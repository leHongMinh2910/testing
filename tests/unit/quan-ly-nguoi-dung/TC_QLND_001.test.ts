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
      count: jest.fn(),
    },
  },
}));

// Test Case ID: TC_QLND_001
// Related Function: UserService.getUsers
// Muc tieu: Kiem tra lay danh sach nguoi dung voi search, filter, sort va pagination.
// CheckDB: Xac minh Prisma findMany/count duoc goi dung where, skip, take, orderBy.
// Rollback: Khong can rollback vi chi doc DB mock.
it('TC_QLND_001 - lay danh sach nguoi dung voi filter va phan trang', async () => {
  const mockedUsers = [
    {
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
    },
  ];

  (prisma.user.findMany as jest.Mock).mockResolvedValue(mockedUsers);
  (prisma.user.count as jest.Mock).mockResolvedValue(12);

  const result = await UserService.getUsers({
    search: 'nguyen',
    role: Role.READER,
    status: UserStatus.ACTIVE,
    page: 2,
    limit: 5,
    sortBy: 'email',
    sortOrder: 'asc',
  });

  const expectedWhere = {
    isDeleted: false,
    OR: [
      { fullName: { contains: 'nguyen' } },
      { email: { contains: 'nguyen' } },
      { phoneNumber: { contains: 'nguyen' } },
    ],
    role: Role.READER,
    status: UserStatus.ACTIVE,
  };

  expect(prisma.user.findMany).toHaveBeenCalledWith({
    where: expectedWhere,
    skip: 5,
    take: 5,
    orderBy: { email: 'asc' },
    select: expect.any(Object),
  });
  expect(prisma.user.count).toHaveBeenCalledWith({ where: expectedWhere });
  expect(result).toEqual({
    users: mockedUsers,
    pagination: {
      page: 2,
      limit: 5,
      total: 12,
      totalPages: 3,
    },
  });
});

