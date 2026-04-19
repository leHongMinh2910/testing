import { validateCreatePolicy } from '@/lib/validators/policy';

// Test Case ID: TC_CS_003
// Muc tieu: Kiem tra validateCreatePolicy bao loi khi amount la so am.
// Ghi chu: Phi/pham tram chinh sach khong duoc nho hon 0.
it('TC_CS_003 - bao loi khi amount la so am', () => {
  const negativeAmountPolicyForm = {
    id: 'LATE_RETURN',
    name: 'Late Return',
    amount: '-1',
    unit: 'PER_DAY' as const,
    isDeleted: false,
  };

  const result = validateCreatePolicy(negativeAmountPolicyForm);

  expect(result.errors.amount).toBe('Amount must be greater than or equal to 0');
  expect(result.firstError).toBe('Amount must be greater than or equal to 0');
});

