import { validateCreateUser } from '@/lib/validators/user';
import { Role, UserStatus } from '@prisma/client';

// Test Case ID: TC_THEM_TT_005
// Muc tieu: Kiem tra validator bao loi khi confirm password khong khop password.
// Ghi chu: Day la unit test cho rule so khop mat khau.
it('TC_THEM_TT_005 - bao loi khi confirm password khong khop', () => {
  const mismatchedPasswordForm = {
    fullName: 'Tran Van Em',
    email: 'tranvanem01@example.com',
    password: 'Password@123',
    confirmPassword: 'Password@124',
    phoneNumber: '0123456789',
    address: 'Ha Noi',
    role: Role.READER,
    status: UserStatus.ACTIVE,
  };

  const result = validateCreateUser(mismatchedPasswordForm);

  expect(result.errors.confirmPassword).toBe('Passwords do not match');
  expect(result.firstError).toBe('Passwords do not match');
});

