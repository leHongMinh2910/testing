import { prisma } from '@/lib/prisma';
import { GorseService } from '@/services/gorse.service';
import { UserService } from '@/services/user.service';
import { Role, UserStatus } from '@prisma/client';

// Mock utils de tranh import barrel '@/lib/utils' keo theo component TSX trong Jest node.
jest.mock('@/lib/utils', () => ({
  PasswordUtils: {
    hash: jest.fn(),
  },
}));

// Mock Prisma de test khong ghi DB that.
jest.mock('@/lib/prisma', () => ({
  prisma: {
    user: {
      findFirst: jest.fn(),
      findUnique: jest.fn(),
      update: jest.fn(),
    },
  },
}));

// Mock Gorse de khong goi service ben ngoai khi update user.
jest.mock('@/services/gorse.service', () => ({
  GorseService: {
    toGorseUserId: jest.fn(),
    updateUser: jest.fn(),
  },
}));

beforeEach(() => {
  jest.resetAllMocks();
});

// Test Case ID: TC_SUA_ND_001
// Muc tieu: Kiem tra sua thong tin user thanh cong khi du lieu hop le.
// Input: fullName, email, phoneNumber, address moi hop le.
// Expected Output: UserService.updateUser tra ve user da cap nhat va goi prisma.user.update dung du lieu.
// CheckDB: Xac minh service tim user, kiem tra email moi, va update dung ban ghi id=1.
// Rollback: Khong can rollback vi Prisma da duoc mock, DB that khong thay doi.
it('TC_SUA_ND_001 - sua thong tin user thanh cong khi du lieu hop le', async () => {
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
    fullName: 'Nguyen Van A Updated',
    email: 'updated-user@example.com',
    phoneNumber: '0987654321',
    address: 'New Address',
  };

  const updatedUserResult = {
    ...existingUser,
    ...updateUserInput,
    updatedAt: new Date('2026-04-18T10:00:00Z'),
  };

  (prisma.user.findFirst as jest.Mock).mockResolvedValueOnce(existingUser);
  (prisma.user.findUnique as jest.Mock).mockResolvedValue(null);
  (prisma.user.update as jest.Mock).mockResolvedValue(updatedUserResult);
  (GorseService.toGorseUserId as jest.Mock).mockReturnValue('1');
  (GorseService.updateUser as jest.Mock).mockResolvedValue(undefined);

  const result = await UserService.updateUser(1, updateUserInput);

  expect(prisma.user.findFirst).toHaveBeenCalledWith({
    where: {
      id: 1,
      isDeleted: false,
    },
    select: expect.any(Object),
  });
  expect(prisma.user.findUnique).toHaveBeenCalledWith({
    where: { email: updateUserInput.email },
  });
  expect(prisma.user.update).toHaveBeenCalledWith({
    where: { id: 1 },
    data: updateUserInput,
    select: expect.any(Object),
  });
  expect(result).toEqual(updatedUserResult);
});

