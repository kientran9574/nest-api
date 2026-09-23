import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/shared/services/prisma.service';

@Injectable()
export class UsersService {
  // inject PrismaService, nên nhớ là phải khai báo tạo và khai báo trong ShardModule và
  // đưa nó vào app module để có thể sử dụng global được
  constructor(private readonly prismaServices: PrismaService) {}
  getUsers() {
    return this.prismaServices.user.findMany();
  }
  createUser(payload: any) {
    return this.prismaServices.user.create({
      data: payload,
    });
  }
  updateUser({ id, payload }: { id: string; payload: any }) {
    return this.prismaServices.user.upsert({
      where: { id: Number(id) },
      update: payload,
      create: payload,
    });
  }
  deleteUser({ id }: { id: string }) {
    return this.prismaServices.user.delete({
      where: { id: Number(id) },
    });
  }
}
