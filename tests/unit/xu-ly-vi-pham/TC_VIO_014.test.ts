import { getViolationPolicyMetadata } from '@/lib/utils/violation-utils';

// Test Case ID: TC_VIO_014
// Muc tieu: Kiem tra ham lay metadata cho chinh sach LATE_RETURN.
// Input: policyId = LATE_RETURN.
// Expected Output: points = 1, penaltyPercent = 10000 theo cau hinh hien tai.
// CheckDB: Khong truy cap DB vi day la ham pure function.
// Rollback: Khong can rollback vi DB that khong thay doi.
it('TC_VIO_014 - getViolationPolicyMetadata tra ve dung metadata LATE_RETURN', () => {
  const lateReturnMetadata = getViolationPolicyMetadata('LATE_RETURN');

  expect(lateReturnMetadata).toEqual({ points: 1, penaltyPercent: 10000 });
});
