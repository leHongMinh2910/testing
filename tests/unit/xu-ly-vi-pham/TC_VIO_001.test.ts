import { getViolationPolicyMetadata } from '@/lib/utils/violation-utils';

// Test Case ID: TC_VIO_001
// Muc tieu: Kiem tra ham lay metadata cho chinh sach WORN_BOOK.
// Input: policyId = WORN_BOOK.
// Expected Output: points = 1, penaltyPercent = 50.
// CheckDB: Khong truy cap DB vi day la ham pure function.
// Rollback: Khong can rollback vi DB that khong thay doi.
it('TC_VIO_001 - getViolationPolicyMetadata tra ve dung metadata WORN_BOOK', () => {
  const wornBookMetadata = getViolationPolicyMetadata('WORN_BOOK');

  expect(wornBookMetadata).toEqual({ points: 1, penaltyPercent: 50 });
});
