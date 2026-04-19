import { validateCreatePolicy } from '@/lib/validators/policy';

// Test Case ID: TC_CS_005
// Muc tieu: Kiem tra validateCreatePolicy bao loi khi FIXED percentage lon hon 100.
// Ghi chu: Chinh sach FIXED trong code dang duoc hieu la phan tram toi da 100.
it('TC_CS_005 - bao loi khi fixed percentage lon hon 100', () => {
  const overPercentagePolicyForm = {
    id: 'OVER_PERCENTAGE',
    name: 'Over Percentage',
    amount: '101',
    unit: 'FIXED' as const,
    isDeleted: false,
  };

  const result = validateCreatePolicy(overPercentagePolicyForm);

  expect(result.errors.amount).toBe('Percentage must be less than or equal to 100');
  expect(result.firstError).toBe('Percentage must be less than or equal to 100');
});

