import { validateCreatePolicy } from '@/lib/validators/policy';

// Test Case ID: TC_CS_004
// Muc tieu: Kiem tra validateCreatePolicy bao loi khi unit khong hop le.
// Ghi chu: Unit chi duoc la FIXED hoac PER_DAY.
it('TC_CS_004 - bao loi khi unit khong hop le', () => {
  const invalidUnitPolicyForm = {
    id: 'INVALID_UNIT',
    name: 'Invalid Unit Policy',
    amount: '50',
    unit: 'MONTHLY' as 'FIXED',
    isDeleted: false,
  };

  const result = validateCreatePolicy(invalidUnitPolicyForm);

  expect(result.errors.unit).toBe('Unit must be either FIXED or PER_DAY');
  expect(result.firstError).toBe('Unit must be either FIXED or PER_DAY');
});

