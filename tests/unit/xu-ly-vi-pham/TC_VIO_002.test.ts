import { getViolationPolicyMetadata } from '@/lib/utils/violation-utils';

// Test Case ID: TC_VIO_002
// Muc tieu: Kiem tra ham lay metadata cho chinh sach DAMAGED_BOOK.
// Input: policyId = DAMAGED_BOOK.
// Expected Output: points = 2, penaltyPercent = 100.
// CheckDB: Khong truy cap DB vi day la ham pure function.
// Rollback: Khong can rollback vi DB that khong thay doi.
it('TC_VIO_002 - getViolationPolicyMetadata tra ve dung metadata DAMAGED_BOOK', () => {
  const damagedBookMetadata = getViolationPolicyMetadata('DAMAGED_BOOK');

  expect(damagedBookMetadata).toEqual({ points: 2, penaltyPercent: 100 });
});
