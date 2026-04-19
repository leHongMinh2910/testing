import { prisma } from '@/lib/prisma';
import { PasswordUtils } from '@/lib/utils';
import { GorseService } from '@/services/gorse.service';
import { UserService } from '@/services/user.service';
import { Role, UserStatus } from '@prisma/client';

// Mock Prisma de test logic trung so dien thoai ma khong truy cap DB that.
jest.mock('@/lib/prisma', () => ({
  prisma: {
    user: {
      findUnique: jest.fn(),
      findFirst: jest.fn(),
      create: jest.fn(),
    },
  },
}));

jest.mock('@/lib/utils', () => ({
  PasswordUtils: {
    hash: jest.fn(),
  },
}));

jest.mock('@/services/gorse.service', () => ({
  GorseService: {
    insertUser: jest.fn(),
    createUserPayload: jest.fn(),
  },
}));

beforeEach(() => {
  jest.resetAllMocks();
});

// Test Case ID: TC_THEM_TT_008
// Muc tieu: Kiem tra khong cho tao user khi so dien thoai da ton tai.
// CheckDB: Theo yeu cau nghiep vu, service can kiem tra phoneNumber truoc khi insert.
// Rollback: Khong can rollback vi Prisma da duoc mock.
// Ghi chu: Code hien tai chua kiem tra trung so dien thoai nen testcase nay du kien fail.
it('TC_THEM_TT_008 - tu choi tao user khi so dien thoai da ton tai', async () => {
  const duplicatePhoneInput = {
    fullName: 'Nguyen Van Phone',
    email: 'phone-duplicate@example.com',
    password: 'Password@123',
    phoneNumber: '0123456789',
    address: 'Ha Noi',
    role: Role.READER,
  };

  (prisma.user.findUnique as jest.Mock).mockResolvedValue(null);
  (prisma.user.findFirst as jest.Mock).mockResolvedValue({
    id: 10,
    phoneNumber: duplicatePhoneInput.phoneNumber,
  });
  (PasswordUtils.hash as jest.Mock).mockResolvedValue('hashed_password_value');
  (prisma.user.create as jest.Mock).mockResolvedValue({
    id: 11,
    fullName: duplicatePhoneInput.fullName,
    email: duplicatePhoneInput.email,
    phoneNumber: duplicatePhoneInput.phoneNumber,
    address: duplicatePhoneInput.address,
    avatarUrl: null,
    role: Role.READER,
    status: UserStatus.ACTIVE,
    violationPoints: 0,
    createdAt: new Date('2026-04-18T10:00:00Z'),
    updatedAt: new Date('2026-04-18T10:00:00Z'),
    inactiveAt: null,
  });

  await expect(UserService.createUser(duplicatePhoneInput)).rejects.toThrow(
    'Phone number already exists'
  );

  expect(prisma.user.findFirst).toHaveBeenCalledWith({
    where: { phoneNumber: duplicatePhoneInput.phoneNumber },
  });
  expect(prisma.user.create).not.toHaveBeenCalled();
  expect(GorseService.insertUser).not.toHaveBeenCalled();
});

