import { getViolationPolicyMetadata, policyIdToCondition } from '@/lib/utils/violation-utils';

// Test Case ID: TC_VIO_018
// Muc tieu: Kiem tra ham xu ly an toan voi policy ID khong hop le.
// Input: policyId = UNKNOWN_POLICY.
// Expected Output: getViolationPolicyMetadata tra ve null, policyIdToCondition tra ve chuoi rong.
// CheckDB: Khong truy cap DB vi day la ham pure function.
// Rollback: Khong can rollback vi DB that khong thay doi.
it('TC_VIO_018 - helper tra ve gia tri an toan voi policy khong hop le', () => {
  expect(getViolationPolicyMetadata('UNKNOWN_POLICY')).toBeNull();
  expect(policyIdToCondition('UNKNOWN_POLICY')).toBe('');
});
