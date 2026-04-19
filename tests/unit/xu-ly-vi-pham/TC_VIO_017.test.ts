import { policyIdToCondition } from '@/lib/utils/violation-utils';

// Test Case ID: TC_VIO_017
// Muc tieu: Kiem tra map nguoc tu policy ID sang condition cua sach.
// Input: policyId = LOST_BOOK, DAMAGED_BOOK, WORN_BOOK.
// Expected Output: LOST, DAMAGED, WORN.
// CheckDB: Khong truy cap DB vi day la ham pure function.
// Rollback: Khong can rollback vi DB that khong thay doi.
it('TC_VIO_017 - policyIdToCondition map dung policy sang condition', () => {
  expect(policyIdToCondition('LOST_BOOK')).toBe('LOST');
  expect(policyIdToCondition('DAMAGED_BOOK')).toBe('DAMAGED');
  expect(policyIdToCondition('WORN_BOOK')).toBe('WORN');
});
