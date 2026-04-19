import { validateUpdateUser } from '@/lib/validators/user';

// Test Case ID: TC_SUA_ND_006
// Muc tieu: Kiem tra validateUpdateUser bao loi khi dia chi dai hon 500 ky tu.
// Input: address co 501 ky tu.
// Expected Output: errors.address = "Address must be less than 500 characters".
// Notes: Day la unit test bien tren cho truong address.
it('TC_SUA_ND_006 - bao loi khi dia chi sua user dai hon 500 ky tu', () => {
  const longAddressUpdateForm = {
    address: 'A'.repeat(501),
  };

  const result = validateUpdateUser(longAddressUpdateForm);

  expect(result.errors.address).toBe('Address must be less than 500 characters');
  expect(result.firstError).toBe('Address must be less than 500 characters');
});

