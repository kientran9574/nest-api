import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/shared/services/prisma.service';

@Injectable()
export class PostService {
  constructor(private readonly prismaServices: PrismaService) {}
  createPost(payload: any) {}
}
