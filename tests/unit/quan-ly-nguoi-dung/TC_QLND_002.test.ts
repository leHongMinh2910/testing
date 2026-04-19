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
      findFirst: jest.fn(),
    },
  },
}));

// Test Case ID: TC_QLND_002
// Related Function: UserService.getUserById
// Muc tieu: Kiem tra lay chi tiet nguoi dung theo id.
// CheckDB: Xac minh Prisma findFirst co dieu kien id va isDeleted=false.
// Rollback: Khong can rollback vi chi doc DB mock.
it('TC_QLND_002 - lay chi tiet nguoi dung theo id', async () => {
  const mockedUser = {
    id: 1,
    fullName: 'Nguyen Van A',
    email: 'nguyenvana@example.com',
    phoneNumber: '0123456789',
    address: 'Ha Noi',
    avatarUrl: null,
    role: Role.READER,
    status: UserStatus.ACTIVE,
    violationPoints: 0,
    createdAt: new Date('2026-04-18T10:00:00Z'),
    updatedAt: new Date('2026-04-18T10:00:00Z'),
    inactiveAt: null,
    firstLoginAt: null,
    interest: null,
  };

  (prisma.user.findFirst as jest.Mock).mockResolvedValue(mockedUser);

  const result = await UserService.getUserById(1);

  expect(prisma.user.findFirst).toHaveBeenCalledWith({
    where: {
      id: 1,
      isDeleted: false,
    },
    select: expect.any(Object),
  });
  expect(result).toEqual(mockedUser);
});

