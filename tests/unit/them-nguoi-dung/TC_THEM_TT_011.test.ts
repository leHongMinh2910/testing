import { validateCreateUser } from '@/lib/validators/user';
import { Role, UserStatus } from '@prisma/client';

// Test Case ID: TC_THEM_TT_011
// Muc tieu: Kiem tra validator bao loi khi so dien thoai dai hon 20 ky tu.
// Ghi chu: Day la kiem thu bien tren cho truong phoneNumber.
it('TC_THEM_TT_011 - bao loi khi so dien thoai dai hon 20 ky tu', () => {
  const longPhoneForm = {
    fullName: 'Nguyen Van A',
    email: 'nguyenvana@example.com',
    password: 'Password@123',
    confirmPassword: 'Password@123',
    phoneNumber: '012345678901234567890',
    address: 'Ha Noi',
    role: Role.READER,
    status: UserStatus.ACTIVE,
  };

  const result = validateCreateUser(longPhoneForm);

  expect(result.errors.phoneNumber).toBe('Phone number must be less than 20 characters');
  expect(result.firstError).toBe('Phone number must be less than 20 characters');
});

