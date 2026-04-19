import { validateCreatePolicy } from '@/lib/validators/policy';

// Test Case ID: TC_CS_001
// Muc tieu: Kiem tra validateCreatePolicy khong bao loi khi thong tin chinh sach hop le.
// Ghi chu: Day la unit test cho function validator, khong can DB.
it('TC_CS_001 - khong bao loi khi thong tin chinh sach hop le', () => {
  const validPolicyForm = {
    id: 'WORN_BOOK',
    name: 'Worn Book',
    amount: '50',
    unit: 'FIXED' as const,
    isDeleted: false,
  };

  const result = validateCreatePolicy(validPolicyForm);

  expect(result.errors).toEqual({});
  expect(result.firstError).toBeNull();
});

