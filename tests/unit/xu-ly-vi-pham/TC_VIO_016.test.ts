import { policyToViolationPolicy } from '@/lib/utils/violation-utils';

// Test Case ID: TC_VIO_016
// Muc tieu: Kiem tra convert policy WORN_BOOK tu DB sang ViolationPolicy dung diem va phan tram phat.
// Input: Policy id=WORN_BOOK, amount=50, unit=FIXED.
// Expected Output: ViolationPolicy co points=1 va penaltyPercent=50.
// CheckDB: Khong truy cap DB; policy dau vao la object gia lap.
// Rollback: Khong can rollback vi DB that khong thay doi.
it('TC_VIO_016 - policyToViolationPolicy convert WORN_BOOK dung cau truc', () => {
  const wornBookPolicy = {
    id: 'WORN_BOOK',
    name: 'Worn Book',
    amount: 50,
    unit: 'FIXED',
    isDeleted: false,
    createdAt: new Date('2026-04-18T10:00:00Z'),
    updatedAt: new Date('2026-04-18T10:00:00Z'),
  };

  const violationPolicy = policyToViolationPolicy(wornBookPolicy as never);

  expect(violationPolicy).toEqual({
    id: 'WORN_BOOK',
    name: 'Worn Book',
    points: 1,
    penaltyPercent: 50,
  });
});
