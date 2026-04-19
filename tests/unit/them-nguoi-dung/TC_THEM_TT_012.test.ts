import { validateCreateUser } from '@/lib/validators/user';
import { Role, UserStatus } from '@prisma/client';

// Test Case ID: TC_THEM_TT_012
// Muc tieu: Kiem tra validator bao loi khi dia chi dai hon 500 ky tu.
// Ghi chu: Day la kiem thu bien tren cho truong address.
it('TC_THEM_TT_012 - bao loi khi dia chi dai hon 500 ky tu', () => {
  const longAddressForm = {
    fullName: 'Nguyen Van A',
    email: 'nguyenvana@example.com',
    password: 'Password@123',
    confirmPassword: 'Password@123',
    phoneNumber: '0123456789',
    address: 'A'.repeat(501),
    role: Role.READER,
    status: UserStatus.ACTIVE,
  };

  const result = validateCreateUser(longAddressForm);

  expect(result.errors.address).toBe('Address must be less than 500 characters');
  expect(result.firstError).toBe('Address must be less than 500 characters');
});

