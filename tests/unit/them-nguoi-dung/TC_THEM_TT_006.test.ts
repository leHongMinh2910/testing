import { validateCreateUser } from '@/lib/validators/user';
import { Role, UserStatus } from '@prisma/client';

// Test Case ID: TC_THEM_TT_006
// Muc tieu: Kiem tra validator bao loi khi so dien thoai chua ky tu khong hop le.
// Ghi chu: Input "abc" lay theo bang system test.
it('TC_THEM_TT_006 - bao loi khi so dien thoai khong hop le', () => {
  const invalidPhoneForm = {
    fullName: 'Tran Van Phuc',
    email: 'tranvanphuc01@example.com',
    password: 'Password@123',
    confirmPassword: 'Password@123',
    phoneNumber: 'abc',
    address: 'Ha Noi',
    role: Role.READER,
    status: UserStatus.ACTIVE,
  };

  const result = validateCreateUser(invalidPhoneForm);

  expect(result.errors.phoneNumber).toBe('Invalid phone number format');
  expect(result.firstError).toBe('Invalid phone number format');
});

