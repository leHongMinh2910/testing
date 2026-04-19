import { validateCreateUser } from '@/lib/validators/user';
import { Role, UserStatus } from '@prisma/client';

// Test Case ID: TC_THEM_TT_010
// Muc tieu: Kiem tra validator bao loi khi password ngan hon 6 ky tu.
// Ghi chu: Day la kiem thu bien duoi cho do dai password.
it('TC_THEM_TT_010 - bao loi khi password ngan hon 6 ky tu', () => {
  const shortPasswordForm = {
    fullName: 'Nguyen Van A',
    email: 'nguyenvana@example.com',
    password: 'A@123',
    confirmPassword: 'A@123',
    phoneNumber: '0123456789',
    address: 'Ha Noi',
    role: Role.READER,
    status: UserStatus.ACTIVE,
  };

  const result = validateCreateUser(shortPasswordForm);

  expect(result.errors.password).toBe('Password must be at least 6 characters');
  expect(result.firstError).toBe('Password must be at least 6 characters');
});

