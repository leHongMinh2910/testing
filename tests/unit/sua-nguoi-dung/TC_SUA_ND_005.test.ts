import { validateUpdateUser } from '@/lib/validators/user';

// Test Case ID: TC_SUA_ND_005
// Muc tieu: Kiem tra validateUpdateUser bao loi khi fullName sua user bi bo trong.
// Input: fullName = "".
// Expected Output: errors.fullName = "Full name is required".
// Notes: Day la unit test cho validator, khong can DB.
it('TC_SUA_ND_005 - bao loi khi bo trong ho ten luc sua user', () => {
  const missingFullNameUpdateForm = {
    fullName: '',
  };

  const result = validateUpdateUser(missingFullNameUpdateForm);

  expect(result.errors.fullName).toBe('Full name is required');
  expect(result.firstError).toBe('Full name is required');
});

