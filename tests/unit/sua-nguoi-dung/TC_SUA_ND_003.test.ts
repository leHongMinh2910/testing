import { prisma } from '@/lib/prisma';
import { UserService } from '@/services/user.service';
import { Role, UserStatus } from '@prisma/client';

jest.mock('@/lib/utils', () => ({
  PasswordUtils: {
    hash: jest.fn(),
  },
}));

// Mock Prisma de mo phong email moi da ton tai trong DB.
jest.mock('@/lib/prisma', () => ({
  prisma: {
    user: {
      findFirst: jest.fn(),
      findUnique: jest.fn(),
      update: jest.fn(),
    },
  },
}));

jest.mock('@/services/gorse.service', () => ({
  GorseService: {
    toGorseUserId: jest.fn(),
    updateUser: jest.fn(),
  },
}));

beforeEach(() => {
  jest.resetAllMocks();
});

// Test Case ID: TC_SUA_ND_003
// Muc tieu: Kiem tra khong cho sua user sang email da ton tai cua user khac.
// Input: user id=1 doi email thanh duplicated-email@example.com.
// Expected Output: Throw "Email already exists" va khong goi prisma.user.update.
// CheckDB: Xac minh service goi findUnique de kiem tra email moi truoc khi update.
// Rollback: Khong can rollback vi Prisma da duoc mock.
it('TC_SUA_ND_003 - tu choi sua user khi email moi da ton tai', async () => {
  const existingUser = {
    id: 1,
    fullName: 'Nguyen Van A',
    email: 'old-user@example.com',
    phoneNumber: '0912345678',
    address: 'Old Address',
    avatarUrl: null,
    role: Role.READER,
    status: UserStatus.ACTIVE,
    violationPoints: 0,
    createdAt: new Date('2026-04-18T09:00:00Z'),
    updatedAt: new Date('2026-04-18T09:00:00Z'),
    inactiveAt: null,
    firstLoginAt: null,
    interest: null,
  };

  const updateUserInput = {
    email: 'duplicated-email@example.com',
  };

  (prisma.user.findFirst as jest.Mock).mockResolvedValue(existingUser);
  (prisma.user.findUnique as jest.Mock).mockResolvedValue({
    id: 2,
    email: updateUserInput.email,
  });

  await expect(UserService.updateUser(1, updateUserInput)).rejects.toThrow(
    'Email already exists'
  );

  expect(prisma.user.findUnique).toHaveBeenCalledWith({
    where: { email: updateUserInput.email },
  });
  expect(prisma.user.update).not.toHaveBeenCalled();
});

