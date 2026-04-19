import { prisma } from '@/lib/prisma';
import { PasswordUtils } from '@/lib/utils';
import { GorseService } from '@/services/gorse.service';
import { UserService } from '@/services/user.service';
import { Role, UserStatus } from '@prisma/client';

// Mock Prisma de test khong ghi du lieu that vao DB.
jest.mock('@/lib/prisma', () => ({
  prisma: {
    user: {
      findUnique: jest.fn(),
      create: jest.fn(),
    },
  },
}));

// Mock hash password de test chi tap trung vao logic tao user.
jest.mock('@/lib/utils', () => ({
  PasswordUtils: {
    hash: jest.fn(),
  },
}));

// Mock Gorse de test khong goi service ben ngoai.
jest.mock('@/services/gorse.service', () => ({
  GorseService: {
    insertUser: jest.fn(),
    createUserPayload: jest.fn(),
  },
}));

beforeEach(() => {
  jest.resetAllMocks();
});

// Test Case ID: TC_THEM_TT_001
// Muc tieu: Kiem tra tao user thanh cong khi thong tin hop le va email chua ton tai.
// CheckDB: Xac minh service goi dung Prisma findUnique va create.
// Rollback: Khong can rollback vi Prisma da duoc mock, DB that khong thay doi.
it('TC_THEM_TT_001 - tao user thanh cong voi thong tin hop le', async () => {
  const validUserInput = {
    fullName: 'Nguyen Van A',
    email: 'nguyenvana@example.com',
    password: 'Password@123',
    phoneNumber: '0123456789',
    address: 'Ha Noi',
    role: Role.READER,
  };

  const hashedPassword = 'hashed_password_value';

  const createdUserResult = {
    id: 1,
    fullName: 'Nguyen Van A',
    email: 'nguyenvana@example.com',
    phoneNumber: '0123456789',
    address: 'Ha Noi',
    avatarUrl: null,
    role: Role.READER,
    status: UserStatus.ACTIVE,
    violationPoints: 0,
    createdAt: new Date('2026-04-18T10:00:00Z'),
    updatedAt: new Date('2026-04-18T10:00:00Z'),
    inactiveAt: null,
  };

  (prisma.user.findUnique as jest.Mock).mockResolvedValue(null);
  (PasswordUtils.hash as jest.Mock).mockResolvedValue(hashedPassword);
  (prisma.user.create as jest.Mock).mockResolvedValue(createdUserResult);
  (GorseService.createUserPayload as jest.Mock).mockReturnValue({
    UserId: '1',
    Comment: 'Nguyen Van A',
  });
  (GorseService.insertUser as jest.Mock).mockResolvedValue(undefined);

  const result = await UserService.createUser(validUserInput);

  expect(prisma.user.findUnique).toHaveBeenCalledWith({
    where: { email: validUserInput.email },
  });
  expect(PasswordUtils.hash).toHaveBeenCalledWith(validUserInput.password);
  expect(prisma.user.create).toHaveBeenCalledWith({
    data: {
      fullName: validUserInput.fullName,
      email: validUserInput.email,
      password: hashedPassword,
      phoneNumber: validUserInput.phoneNumber,
      address: validUserInput.address,
      role: Role.READER,
      status: UserStatus.ACTIVE,
    },
    select: {
      id: true,
      fullName: true,
      email: true,
      phoneNumber: true,
      address: true,
      avatarUrl: true,
      role: true,
      status: true,
      violationPoints: true,
      createdAt: true,
      updatedAt: true,
      inactiveAt: true,
    },
  });
  expect(GorseService.insertUser).toHaveBeenCalled();
  expect(result).toEqual(createdUserResult);
});

