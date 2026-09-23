import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UsersModule } from './routers/users/users.module';
import { SharedModule } from './shared/shared.module';
import { PostModule } from './routers/post/post.module';
import { AuthModule } from './routers/auth/auth.module';

@Module({
  imports: [UsersModule, PostModule, SharedModule, AuthModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
