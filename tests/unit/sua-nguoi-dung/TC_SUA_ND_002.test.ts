import { validateUpdateUser } from '@/lib/validators/user';

// Test Case ID: TC_SUA_ND_002
// Muc tieu: Kiem tra validateUpdateUser bao loi khi email sua user sai dinh dang.
// Input: email = "updated-user-example.com".
// Expected Output: errors.email = "Invalid email format".
// Notes: Day la unit test cho validator, khong can DB.
it('TC_SUA_ND_002 - bao loi khi email sua user sai dinh dang', () => {
  const invalidEmailUpdateForm = {
    email: 'updated-user-example.com',
  };

  const result = validateUpdateUser(invalidEmailUpdateForm);

  expect(result.errors.email).toBe('Invalid email format');
  expect(result.firstError).toBe('Invalid email format');
});

