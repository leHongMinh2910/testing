import { prisma } from '@/lib/prisma';
import { PasswordUtils } from '@/lib/utils';
import { GorseService } from '@/services/gorse.service';
import { UserService } from '@/services/user.service';
import { Role } from '@prisma/client';

// Mock Prisma de kiem tra logic trung email ma khong truy cap DB that.
jest.mock('@/lib/prisma', () => ({
  prisma: {
    user: {
      findUnique: jest.fn(),
      create: jest.fn(),
    },
  },
}));

jest.mock('@/lib/utils', () => ({
  PasswordUtils: {
    hash: jest.fn(),
  },
}));

jest.mock('@/services/gorse.service', () => ({
  GorseService: {
    insertUser: jest.fn(),
    createUserPayload: jest.fn(),
  },
}));

beforeEach(() => {
  jest.resetAllMocks();
});

// Test Case ID: TC_THEM_TT_002
// Muc tieu: Kiem tra khong cho tao user khi email da ton tai.
// CheckDB: Xac minh service kiem tra email truoc khi insert.
// Rollback: Khong can rollback vi DB da duoc mock.
it('TC_THEM_TT_002 - tu choi tao user khi email da ton tai', async () => {
  const duplicateEmailInput = {
    fullName: 'Nguyen Van B',
    email: 'nguyenvana@example.com',
    password: 'Password@123',
    phoneNumber: '0123456788',
    address: 'Ha Noi',
    role: Role.READER,
  };

  (prisma.user.findUnique as jest.Mock).mockResolvedValue({
    id: 1,
    email: duplicateEmailInput.email,
  });

  await expect(UserService.createUser(duplicateEmailInput)).rejects.toThrow(
    'Email already exists'
  );

  expect(prisma.user.findUnique).toHaveBeenCalledWith({
    where: { email: duplicateEmailInput.email },
  });
  expect(PasswordUtils.hash).not.toHaveBeenCalled();
  expect(prisma.user.create).not.toHaveBeenCalled();
  expect(GorseService.insertUser).not.toHaveBeenCalled();
});

