import { validateCreateUser } from '@/lib/validators/user';
import { Role, UserStatus } from '@prisma/client';

// Test Case ID: TC_THEM_TT_009
// Muc tieu: Kiem tra validator bao loi khi bo trong ho ten.
// Ghi chu: Day la unit test cho truong bat buoc fullName.
it('TC_THEM_TT_009 - bao loi khi bo trong ho ten', () => {
  const missingFullNameForm = {
    fullName: '   ',
    email: 'nguyenvana@example.com',
    password: 'Password@123',
    confirmPassword: 'Password@123',
    phoneNumber: '0123456789',
    address: 'Ha Noi',
    role: Role.READER,
    status: UserStatus.ACTIVE,
  };

  const result = validateCreateUser(missingFullNameForm);

  expect(result.errors.fullName).toBe('Full name is required');
  expect(result.firstError).toBe('Full name is required');
});

