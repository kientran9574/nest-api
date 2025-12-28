import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/shared/prisma.service';

@Injectable()
export class UsersService {
    constructor(private readonly prismaServices: PrismaService) {}
    getUsers() {
        return this.prismaServices.user.findMany()
    }
    createUser(payload: any) {
        return this.prismaServices.user.create({
            data: payload
        })
    }
    updateUser({id, payload}: {id: string, payload: any}){
        return this.prismaServices.user.upsert({
            where: {id: Number(id)},
            update: payload,
            create: payload
        })
    }
    deleteUser({id}: {id: string}) {
        return this.prismaServices.user.delete({
            where: {id: Number(id)}
        })
    }
}
