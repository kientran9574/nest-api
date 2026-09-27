import { Body, Controller, Post, SerializeOptions } from '@nestjs/common';
import { AuthService } from './auth.service';
import { RegisterResEntity } from './auth.dto';

@Controller('auth')
export class AuthController {
  constructor(private readonly authService: AuthService) {}

  @SerializeOptions({ type: RegisterResEntity })
  @Post('register')
  async register(@Body() body: any) {
    return this.authService.register(body);
  }
}

/* Cách 1: return new RegisterResEntity(user) để serialize trước khi trả về cho client

Cách 2: Dùng decorator @SerializeOptions({ type: RegisterResDTO })
Sau đó là return bình thường thôi -> return this.authService.register(body)

Lưu ý: 
@UseInterceptors(ClassSerializerInterceptor) Thì thay vì chúng ta thêm decorator cho Mỗi router

Thì mình sẽ vào app.module Mình thêm ClassSerializerInterceptor cho toàn app luôn,
Mình sẽ không cần thêm @UseInterceptors(ClassSerializerInterceptor) cho mỗi router nữa.
*/
