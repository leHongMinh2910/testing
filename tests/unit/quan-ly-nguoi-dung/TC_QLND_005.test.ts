import { prisma } from '@/lib/prisma';
import { UserService } from '@/services/user.service';

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

// Test Case ID: TC_QLND_005
// Related Function: UserService.emailExists
// Muc tieu: Kiem tra emailExists tra ve true khi email ton tai.
// CheckDB: Xac minh Prisma findFirst duoc goi voi dieu kien email.
// Rollback: Khong can rollback vi chi doc DB mock.
it('TC_QLND_005 - kiem tra email da ton tai', async () => {
  (prisma.user.findFirst as jest.Mock).mockResolvedValue({
    id: 1,
    email: 'existing@example.com',
  });

  const result = await UserService.emailExists('existing@example.com');

  expect(prisma.user.findFirst).toHaveBeenCalledWith({
    where: { email: 'existing@example.com' },
  });
  expect(result).toBe(true);
});

