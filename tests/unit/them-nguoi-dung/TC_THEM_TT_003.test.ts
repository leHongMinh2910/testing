import { validateCreateUser } from '@/lib/validators/user';
import { Role, UserStatus } from '@prisma/client';

// Test Case ID: TC_THEM_TT_003
// Muc tieu: Kiem tra validator bao loi khi email sai dinh dang.
// Ghi chu: Day la unit test cho function validateCreateUser, khong test UI.
it('TC_THEM_TT_003 - bao loi khi email sai dinh dang', () => {
  const invalidEmailForm = {
    fullName: 'Tran Van Cuong',
    email: 'tranvancuonggmail',
    password: 'Password@123',
    confirmPassword: 'Password@123',
    phoneNumber: '0123456789',
    address: 'Ha Noi',
    role: Role.READER,
    status: UserStatus.ACTIVE,
  };

  const result = validateCreateUser(invalidEmailForm);

  expect(result.errors.email).toBe('Invalid email format');
  expect(result.firstError).toBe('Invalid email format');
});

