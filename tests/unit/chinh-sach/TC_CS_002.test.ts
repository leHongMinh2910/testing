import { validateCreatePolicy } from '@/lib/validators/policy';

// Test Case ID: TC_CS_002
// Muc tieu: Kiem tra validateCreatePolicy bao loi khi Policy ID bi bo trong.
// Ghi chu: ID la khoa chinh cua Policy nen form phai bat buoc nhap.
it('TC_CS_002 - bao loi khi policy id bi bo trong', () => {
  const missingIdPolicyForm = {
    id: '',
    name: 'Worn Book',
    amount: '50',
    unit: 'FIXED' as const,
    isDeleted: false,
  };

  const result = validateCreatePolicy(missingIdPolicyForm);

  expect(result.errors.id).toBe('Policy ID is required');
  expect(result.firstError).toBe('Policy ID is required');
});

