import { prisma } from '@/lib/prisma';
import { GorseService } from '@/services/gorse.service';
import { UserService } from '@/services/user.service';
import { Role, UserStatus } from '@prisma/client';

jest.mock('@/lib/utils', () => ({
  PasswordUtils: {
    hash: jest.fn(),
  },
}));

jest.mock('@/lib/prisma', () => ({
  prisma: {
    user: {
      findMany: jest.fn(),
      updateMany: jest.fn(),
    },
  },
}));

jest.mock('@/services/gorse.service', () => ({
  GorseService: {
    toGorseUserId: jest.fn((id: number) => id.toString()),
    deleteUser: jest.fn(),
  },
}));

beforeEach(() => {
  jest.resetAllMocks();
});

// Test Case ID: TC_QLND_004
// Related Function: UserService.deleteBulkUsers
// Muc tieu: Kiem tra xoa mem nhieu nguoi dung va tra ve deletedCount/notFoundIds.
// CheckDB: Xac minh updateMany set isDeleted=true, status=INACTIVE, inactiveAt la Date.
// Rollback: Khong can rollback vi Prisma da duoc mock.
it('TC_QLND_004 - xoa mem nhieu nguoi dung thanh cong', async () => {
  (prisma.user.findMany as jest.Mock)
    .mockResolvedValueOnce([{ id: 1 }, { id: 2 }])
    .mockResolvedValueOnce([{ id: 1 }]);
  (prisma.user.updateMany as jest.Mock).mockResolvedValue({ count: 2 });
  (GorseService.deleteUser as jest.Mock).mockResolvedValue(undefined);

  const result = await UserService.deleteBulkUsers([1, 2, 999]);

  expect(prisma.user.findMany).toHaveBeenNthCalledWith(1, {
    where: {
      id: { in: [1, 2, 999] },
      isDeleted: false,
    },
    select: { id: true },
  });
  expect(prisma.user.updateMany).toHaveBeenCalledWith({
    where: {
      id: { in: [1, 2] },
    },
    data: {
      isDeleted: true,
      status: UserStatus.INACTIVE,
      inactiveAt: expect.any(Date),
    },
  });
  expect(prisma.user.findMany).toHaveBeenNthCalledWith(2, {
    where: {
      id: { in: [1, 2] },
      role: Role.READER,
    },
    select: { id: true },
  });
  expect(GorseService.toGorseUserId).toHaveBeenCalledWith(1);
  expect(GorseService.deleteUser).toHaveBeenCalledTimes(1);
  expect(result).toEqual({
    deletedCount: 2,
    notFoundIds: [999],
  });
});

