import { conditionToPolicyId } from '@/lib/utils/violation-utils';

// Test Case ID: TC_VIO_004
// Muc tieu: Kiem tra tinh trang sach khong vi pham thi khong map sang policy phat.
// Input: condition = GOOD.
// Expected Output: null vi GOOD/Keep current khong phai LOST, DAMAGED, WORN.
// CheckDB: Khong truy cap DB vi day la ham pure function.
// Rollback: Khong can rollback vi DB that khong thay doi.
it('TC_VIO_004 - conditionToPolicyId tra ve null khi tinh trang khong vi pham', () => {
  const policyId = conditionToPolicyId('GOOD');

  expect(policyId).toBeNull();
});
