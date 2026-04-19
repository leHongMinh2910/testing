import { conditionToPolicyId, getViolationPolicyMetadata } from '@/lib/utils/violation-utils';

// Test Case ID: TC_VIO_015
// Muc tieu: Kiem tra helper co the xac dinh dong thoi policy sach WORN va policy tra tre.
// Input: condition = WORN, policyId tra tre = LATE_RETURN.
// Expected Output: WORN map sang WORN_BOOK va LATE_RETURN co metadata hop le.
// CheckDB: Khong truy cap DB vi day la ham pure function.
// Rollback: Khong can rollback vi DB that khong thay doi.
it('TC_VIO_015 - helper xac dinh duoc WORN_BOOK va LATE_RETURN', () => {
  const wornPolicyId = conditionToPolicyId('WORN');
  const lateReturnMetadata = getViolationPolicyMetadata('LATE_RETURN');

  expect(wornPolicyId).toBe('WORN_BOOK');
  expect(lateReturnMetadata).toEqual({ points: 1, penaltyPercent: 10000 });
});
