import { prisma } from '@/lib/prisma';
import { UserService } from '@/services/user.service';
import { Role, UserStatus } from '@prisma/client';

jest.mock('@/lib/utils', () => ({
  PasswordUtils: {
    hash: jest.fn(),
  },
}));

// Mock Prisma de mo phong so dien thoai moi da ton tai trong DB.
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

// Test Case ID: TC_SUA_ND_007
// Muc tieu: Kiem tra khong cho sua phone thanh so dien thoai da ton tai.
// Input: phoneNumber doi tu 0912345678 sang 0987654321, trong khi 0987654321 da ton tai.
// Expected Output: Throw "Phone number already exists" va khong goi prisma.user.update.
// CheckDB: Theo nghiep vu, service can check phoneNumber moi voi DB truoc khi update.
// Rollback: Khong can rollback vi Prisma da duoc mock.
// Ghi chu: Code hien tai chua check trung phone khi update nen testcase nay du kien fail.
it('TC_SUA_ND_007 - tu choi sua phone thanh so dien thoai da ton tai', async () => {
  const existingUser = {
    id: 1,
    fullName: 'Nguyen Van A',
    email: 'user-a@example.com',
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
    phoneNumber: '0987654321',
  };

  const otherUserWithSamePhone = {
    id: 2,
    phoneNumber: updateUserInput.phoneNumber,
  };

  // Lan 1: getUserById tim thay user dang sua.
  // Lan 2: theo ky vong nghiep vu, service nen tim user khac co phone moi.
  (prisma.user.findFirst as jest.Mock)
    .mockResolvedValueOnce(existingUser)
    .mockResolvedValueOnce(otherUserWithSamePhone);
  (prisma.user.update as jest.Mock).mockResolvedValue({
    ...existingUser,
    ...updateUserInput,
  });

  await expect(UserService.updateUser(1, updateUserInput)).rejects.toThrow(
    'Phone number already exists'
  );

  expect(prisma.user.findFirst).toHaveBeenNthCalledWith(2, {
    where: {
      phoneNumber: updateUserInput.phoneNumber,
      id: { not: 1 },
      isDeleted: false,
    },
    select: { id: true, phoneNumber: true },
  });
  expect(prisma.user.update).not.toHaveBeenCalled();
});

