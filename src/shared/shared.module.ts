import { Global, Module } from '@nestjs/common';
import { PrismaService } from './services/prisma.service';

// để cho toàn app có thể sử dụng được PrismaService, không cần import SharedModule vào các module khác
// Phải có decorator Global và exports thì mới có thể sử dụng được ở các module khác
@Global()
@Module({
  providers: [PrismaService],
  exports: [PrismaService],
})
export class SharedModule {}
