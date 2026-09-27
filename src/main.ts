import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { UnprocessableEntityException, ValidationPipe } from '@nestjs/common';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  // thiết lập validation áp dụng cho toàn bộ request đến mọi route trong app useGlobalPipes
  app.useGlobalPipes(
    // ValidationPipe là người gác cổng đứng trước mọi API của bạn. Mọi request đi vào đều phải qua người này kiểm tra trước.
    new ValidationPipe({
      // "Chỉ nhận đúng thứ tôi yêu cầu trong class DTO -> bắt buộc phải có decorator cho từng field trong class DTO"
      whitelist: true, // Tự động loại bỏ các field không được khai báo decorator trong classDTO.

      // "Nếu gửi dư thì báo lỗi luôn, đừng lặng lẽ xóa".
      forbidNonWhitelisted: true, // Nếu có field không được khai báo decorator trong DTO mà client truyền lên thì sẽ báo lỗi.

      transform: true, // Tự động chuyển đổi dữ liệu sang kiểu được khai báo trong class DTO
      transformOptions: {
        enableImplicitConversion: true,
      },
      // format lỗi khi validation thất bại. Mặc định NestJS trả về lỗi dạng khá dài dòng, Custom lại lỗi cho gọn hơn
      exceptionFactory: (validationErrors) => {
        console.log('validationErrors', validationErrors);
        return new UnprocessableEntityException(
          validationErrors.map((error) => ({
            field: error.property, // tên field bị lỗi
            constraints: error.constraints, // nội dung lỗi
          })),
        );
      },
    }),
  );
  await app.listen(process.env.PORT ?? 4100);
}
bootstrap();
