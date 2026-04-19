import { getViolationPolicyMetadata } from '@/lib/utils/violation-utils';

// Test Case ID: TC_VIO_003
// Muc tieu: Kiem tra ham lay metadata cho chinh sach LOST_BOOK.
// Input: policyId = LOST_BOOK.
// Expected Output: points = 3, penaltyPercent = 100.
// CheckDB: Khong truy cap DB vi day la ham pure function.
// Rollback: Khong can rollback vi DB that khong thay doi.
it('TC_VIO_003 - getViolationPolicyMetadata tra ve dung metadata LOST_BOOK', () => {
  const lostBookMetadata = getViolationPolicyMetadata('LOST_BOOK');

  expect(lostBookMetadata).toEqual({ points: 3, penaltyPercent: 100 });
});
