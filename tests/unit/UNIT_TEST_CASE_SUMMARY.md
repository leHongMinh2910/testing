# Unit Test Case Summary

Quy uoc dat ten file: moi test case nam trong mot file rieng, ten file giu dung Test Case ID va them hau to `.test.ts` de Jest tu dong nhan dien.

| TT | Chuc nang / Use case | Lop / File duoc test | Phuong thuc / Ham | Test Case ID | Truong hop test | File test |
|---:|---|---|---|---|---|---|
| 1 | Them nguoi dung | `src/services/user.service.ts` | `UserService.createUser` | `TC_THEM_TT_001` | Tao user thanh cong khi thong tin hop le va email chua ton tai | `tests/unit/them-nguoi-dung/TC_THEM_TT_001.test.ts` |
| 2 | Them nguoi dung | `src/services/user.service.ts` | `UserService.createUser` | `TC_THEM_TT_002` | Tu choi tao user khi email da ton tai | `tests/unit/them-nguoi-dung/TC_THEM_TT_002.test.ts` |
| 3 | Them nguoi dung | `src/services/user.service.ts` | `UserService.createUser` | `TC_THEM_TT_008` | Tu choi tao user khi so dien thoai da ton tai | `tests/unit/them-nguoi-dung/TC_THEM_TT_008.test.ts` |
| 4 | Them nguoi dung | `src/lib/validators/user.ts` | `validateCreateUser` | `TC_THEM_TT_003` | Bao loi khi email sai dinh dang | `tests/unit/them-nguoi-dung/TC_THEM_TT_003.test.ts` |
| 5 | Them nguoi dung | `src/lib/validators/user.ts` | `validateCreateUser` | `TC_THEM_TT_004` | Bao loi khi thieu so dien thoai | `tests/unit/them-nguoi-dung/TC_THEM_TT_004.test.ts` |
| 6 | Them nguoi dung | `src/lib/validators/user.ts` | `validateCreateUser` | `TC_THEM_TT_005` | Bao loi khi confirm password khong khop password | `tests/unit/them-nguoi-dung/TC_THEM_TT_005.test.ts` |
| 7 | Them nguoi dung | `src/lib/validators/user.ts` | `validateCreateUser` | `TC_THEM_TT_006` | Bao loi khi so dien thoai co ky tu khong hop le | `tests/unit/them-nguoi-dung/TC_THEM_TT_006.test.ts` |
| 8 | Them nguoi dung | `src/lib/validators/user.ts` | `validateCreateUser` | `TC_THEM_TT_009` | Bao loi khi bo trong ho ten | `tests/unit/them-nguoi-dung/TC_THEM_TT_009.test.ts` |
| 9 | Them nguoi dung | `src/lib/validators/user.ts` | `validateCreateUser` | `TC_THEM_TT_010` | Bao loi khi password ngan hon 6 ky tu | `tests/unit/them-nguoi-dung/TC_THEM_TT_010.test.ts` |
| 10 | Them nguoi dung | `src/lib/validators/user.ts` | `validateCreateUser` | `TC_THEM_TT_011` | Bao loi khi so dien thoai dai hon 20 ky tu | `tests/unit/them-nguoi-dung/TC_THEM_TT_011.test.ts` |
| 11 | Them nguoi dung | `src/lib/validators/user.ts` | `validateCreateUser` | `TC_THEM_TT_012` | Bao loi khi dia chi dai hon 500 ky tu | `tests/unit/them-nguoi-dung/TC_THEM_TT_012.test.ts` |
| 12 | Sua thong tin nguoi dung | `src/services/user.service.ts` | `UserService.updateUser` | `TC_SUA_ND_001` | Cap nhat thong tin user thanh cong khi du lieu hop le | `tests/unit/sua-nguoi-dung/TC_SUA_ND_001.test.ts` |
| 13 | Sua thong tin nguoi dung | `src/services/user.service.ts` | `UserService.updateUser` | `TC_SUA_ND_003` | Tu choi sua user khi email moi da ton tai | `tests/unit/sua-nguoi-dung/TC_SUA_ND_003.test.ts` |
| 14 | Sua thong tin nguoi dung | `src/services/user.service.ts` | `UserService.updateUser` | `TC_SUA_ND_007` | Tu choi sua phone thanh so dien thoai da ton tai | `tests/unit/sua-nguoi-dung/TC_SUA_ND_007.test.ts` |
| 15 | Sua thong tin nguoi dung | `src/lib/validators/user.ts` | `validateUpdateUser` | `TC_SUA_ND_002` | Bao loi khi email sua user sai dinh dang | `tests/unit/sua-nguoi-dung/TC_SUA_ND_002.test.ts` |
| 16 | Sua thong tin nguoi dung | `src/lib/validators/user.ts` | `validateUpdateUser` | `TC_SUA_ND_004` | Bao loi khi so dien thoai sua user khong hop le | `tests/unit/sua-nguoi-dung/TC_SUA_ND_004.test.ts` |
| 17 | Sua thong tin nguoi dung | `src/lib/validators/user.ts` | `validateUpdateUser` | `TC_SUA_ND_005` | Bao loi khi bo trong ho ten luc sua user | `tests/unit/sua-nguoi-dung/TC_SUA_ND_005.test.ts` |
| 18 | Sua thong tin nguoi dung | `src/lib/validators/user.ts` | `validateUpdateUser` | `TC_SUA_ND_006` | Bao loi khi dia chi sua user dai hon 500 ky tu | `tests/unit/sua-nguoi-dung/TC_SUA_ND_006.test.ts` |
| 19 | Quan ly chinh sach | `src/lib/validators/policy.ts` | `validateCreatePolicy` | `TC_CS_001` | Khong bao loi khi thong tin chinh sach hop le | `tests/unit/chinh-sach/TC_CS_001.test.ts` |
| 20 | Quan ly chinh sach | `src/lib/validators/policy.ts` | `validateCreatePolicy` | `TC_CS_002` | Bao loi khi Policy ID bi bo trong | `tests/unit/chinh-sach/TC_CS_002.test.ts` |
| 21 | Quan ly chinh sach | `src/lib/validators/policy.ts` | `validateCreatePolicy` | `TC_CS_003` | Bao loi khi amount la so am | `tests/unit/chinh-sach/TC_CS_003.test.ts` |
| 22 | Quan ly chinh sach | `src/lib/validators/policy.ts` | `validateCreatePolicy` | `TC_CS_004` | Bao loi khi unit khong hop le | `tests/unit/chinh-sach/TC_CS_004.test.ts` |
| 23 | Quan ly chinh sach | `src/lib/validators/policy.ts` | `validateCreatePolicy` | `TC_CS_005` | Bao loi khi FIXED percentage lon hon 100 | `tests/unit/chinh-sach/TC_CS_005.test.ts` |
| 28 | Quan ly nguoi dung | `src/services/user.service.ts` | `UserService.getUsers` | `TC_QLND_001` | Lay danh sach nguoi dung voi search, filter, sort va phan trang | `tests/unit/quan-ly-nguoi-dung/TC_QLND_001.test.ts` |
| 29 | Quan ly nguoi dung | `src/services/user.service.ts` | `UserService.getUserById` | `TC_QLND_002` | Lay chi tiet nguoi dung theo id | `tests/unit/quan-ly-nguoi-dung/TC_QLND_002.test.ts` |
| 30 | Quan ly nguoi dung | `src/services/user.service.ts` | `UserService.getUsersByIds` | `TC_QLND_003` | Lay nhieu nguoi dung theo danh sach id | `tests/unit/quan-ly-nguoi-dung/TC_QLND_003.test.ts` |
| 31 | Quan ly nguoi dung | `src/services/user.service.ts` | `UserService.deleteBulkUsers` | `TC_QLND_004` | Xoa mem nhieu nguoi dung va tra ve deletedCount/notFoundIds | `tests/unit/quan-ly-nguoi-dung/TC_QLND_004.test.ts` |
| 32 | Quan ly nguoi dung | `src/services/user.service.ts` | `UserService.emailExists` | `TC_QLND_005` | Kiem tra email da ton tai | `tests/unit/quan-ly-nguoi-dung/TC_QLND_005.test.ts` |

## Ghi chu ve pham vi

- `UserService.createUser`, `UserService.updateUser`, `UserService.getUsers`, `UserService.getUserById`, `UserService.getUsersByIds`, `UserService.deleteBulkUsers`, `UserService.emailExists` duoc test o tang service voi Prisma mock.
- `validateCreateUser`, `validateUpdateUser`, `validateCreatePolicy` duoc test nhu cac pure function validator.
- Project hien khong co `PolicyService`, nen cac case tao/sua policy co logic DB duoc test o tang API route handler (`POST`, `PUT`) voi Prisma va middleware duoc mock.
- Cac testcase co thao tac DB deu dung mock Prisma. Vi vay Rollback khong can thuc hien vi DB that khong bi thay doi.

## Cong cu coverage

- Framework test: Jest.
- TypeScript transformer: ts-jest.
- Cong cu do coverage: Jest Coverage, chay bang lenh `npm run test:coverage`.


## Bo sung tu System Test - Nhom 6

| TT | Chuc nang / Use case | Lop / File duoc test | Phuong thuc / Ham | Test Case ID | Truong hop test | File test |
|---:|---|---|---|---|---|---|
| 36 | Xu ly vi pham | `src/lib/utils/violation-utils.ts` | `getViolationPolicyMetadata` | `TC_VIO_001` | Lay metadata WORN_BOOK: 1 diem, phat 50% gia sach | `tests/unit/xu-ly-vi-pham/TC_VIO_001.test.ts` |
| 37 | Xu ly vi pham | `src/lib/utils/violation-utils.ts` | `getViolationPolicyMetadata` | `TC_VIO_002` | Lay metadata DAMAGED_BOOK: 2 diem, phat 100% gia sach | `tests/unit/xu-ly-vi-pham/TC_VIO_002.test.ts` |
| 38 | Xu ly vi pham | `src/lib/utils/violation-utils.ts` | `getViolationPolicyMetadata` | `TC_VIO_003` | Lay metadata LOST_BOOK: 3 diem, phat 100% gia sach | `tests/unit/xu-ly-vi-pham/TC_VIO_003.test.ts` |
| 39 | Xu ly vi pham | `src/lib/utils/violation-utils.ts` | `conditionToPolicyId` | `TC_VIO_004` | Tinh trang GOOD/Keep current khong map sang policy vi pham | `tests/unit/xu-ly-vi-pham/TC_VIO_004.test.ts` |
| 40 | Xu ly vi pham | `src/lib/utils/violation-utils.ts` | `getViolationPolicyMetadata` | `TC_VIO_014` | Lay metadata LATE_RETURN: 1 diem, muc phat 10000 | `tests/unit/xu-ly-vi-pham/TC_VIO_014.test.ts` |
| 41 | Xu ly vi pham | `src/lib/utils/violation-utils.ts` | `conditionToPolicyId`, `getViolationPolicyMetadata` | `TC_VIO_015` | Helper xac dinh duoc ca WORN_BOOK va LATE_RETURN | `tests/unit/xu-ly-vi-pham/TC_VIO_015.test.ts` |
| 42 | Xu ly vi pham | `src/lib/utils/violation-utils.ts` | `policyToViolationPolicy` | `TC_VIO_016` | Convert policy WORN_BOOK thanh ViolationPolicy dung points va penaltyPercent | `tests/unit/xu-ly-vi-pham/TC_VIO_016.test.ts` |
| 43 | Xu ly vi pham | `src/lib/utils/violation-utils.ts` | `policyIdToCondition` | `TC_VIO_017` | Map nguoc LOST_BOOK/DAMAGED_BOOK/WORN_BOOK ve condition tuong ung | `tests/unit/xu-ly-vi-pham/TC_VIO_017.test.ts` |
| 44 | Xu ly vi pham | `src/lib/utils/violation-utils.ts` | `getViolationPolicyMetadata`, `policyIdToCondition` | `TC_VIO_018` | Tra ve gia tri an toan khi policy ID khong hop le | `tests/unit/xu-ly-vi-pham/TC_VIO_018.test.ts` |

## Ghi chu bo sung Nhom 6

- Da loai cac test route handler `GET/POST/PUT/DELETE` khoi phan tong hop vi yeu cau unit test can gan voi ten ham ro rang.
- Project hien khong co `ReviewService` hoac validator review thuần de test truc tiep. Vi vay cac system test review dang thich hop hon cho integration/UI test, tru khi refactor them service/validator rieng.
- Nhom vi pham co cac ham thuan trong `src/lib/utils/violation-utils.ts`, nen duoc chuyen thanh unit test ham dung nghia.
- Logic tu dong phat hien tra tre khi confirm return hien dang nam trong route/hook, chua duoc tach thanh ham/service rieng. Neu can test dung unit cho bug Late Return, nen tach ham tinh phi tre han rieng truoc.

