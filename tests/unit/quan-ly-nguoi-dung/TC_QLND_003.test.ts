import { prisma } from '@/lib/prisma';
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
    },
  },
}));

// Test Case ID: TC_QLND_003
// Related Function: UserService.getUsersByIds
// Muc tieu: Kiem tra lay nhieu nguoi dung theo danh sach id.
// CheckDB: Xac minh Prisma findMany loc id in danh sach va isDeleted=false.
// Rollback: Khong can rollback vi chi doc DB mock.
it('TC_QLND_003 - lay nhieu nguoi dung theo danh sach id', async () => {
  const userIds = [1, 2];
  const mockedUsers = [
    {
      id: 1,
      fullName: 'User One',
      email: 'user1@example.com',
      phoneNumber: '0123456789',
      address: 'Ha Noi',
      avatarUrl: null,
      role: Role.READER,
      status: UserStatus.ACTIVE,
      violationPoints: 0,
      createdAt: new Date('2026-04-18T10:00:00Z'),
      updatedAt: new Date('2026-04-18T10:00:00Z'),
      inactiveAt: null,
    },
  ];

  (prisma.user.findMany as jest.Mock).mockResolvedValue(mockedUsers);

  const result = await UserService.getUsersByIds(userIds);

  expect(prisma.user.findMany).toHaveBeenCalledWith({
    where: {
      id: { in: userIds },
      isDeleted: false,
    },
    select: expect.any(Object),
  });
  expect(result).toEqual(mockedUsers);
});

