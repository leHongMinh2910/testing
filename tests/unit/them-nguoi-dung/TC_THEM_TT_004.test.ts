import { validateCreateUser } from '@/lib/validators/user';
import { Role, UserStatus } from '@prisma/client';

// Test Case ID: TC_THEM_TT_004
// Muc tieu: Kiem tra validator bao loi khi thieu so dien thoai.
// Ghi chu: Theo bang system test, phone number la bat buoc.
// Hien code dang coi phoneNumber la optional nen testcase nay du kien fail.
it('TC_THEM_TT_004 - bao loi khi thieu so dien thoai', () => {
  const missingPhoneForm = {
    fullName: 'Tran Van Dung',
    email: 'tranvandung01@example.com',
    password: 'Password@123',
    confirmPassword: 'Password@123',
    phoneNumber: '',
    address: 'Ha Noi',
    role: Role.READER,
    status: UserStatus.ACTIVE,
  };

  const result = validateCreateUser(missingPhoneForm);

  expect(result.errors.phoneNumber).toBe('Phone number is required');
  expect(result.firstError).toBe('Phone number is required');
});

