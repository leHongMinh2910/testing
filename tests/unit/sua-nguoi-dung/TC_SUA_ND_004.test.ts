import { validateUpdateUser } from '@/lib/validators/user';

// Test Case ID: TC_SUA_ND_004
// Muc tieu: Kiem tra validateUpdateUser bao loi khi so dien thoai sua user khong hop le.
// Input: phoneNumber = "abc".
// Expected Output: errors.phoneNumber = "Invalid phone number format".
// Notes: Day la unit test cho validator, khong can DB.
it('TC_SUA_ND_004 - bao loi khi so dien thoai sua user khong hop le', () => {
  const invalidPhoneUpdateForm = {
    phoneNumber: 'abc',
  };

  const result = validateUpdateUser(invalidPhoneUpdateForm);

  expect(result.errors.phoneNumber).toBe('Invalid phone number format');
  expect(result.firstError).toBe('Invalid phone number format');
});

