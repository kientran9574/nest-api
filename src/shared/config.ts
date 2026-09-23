// Validate file config -> Sẽ hiển thị được những biến môi trường trong file .env
// class validater -> dùng để validate
// class transformer -> để chuyển đổi dữ liệu
import { plainToInstance } from 'class-transformer';
import { IsString, validateSync } from 'class-validator';
import fs from 'fs';
import path from 'path';
import { config } from 'dotenv';

config({
  path: '.env',
});

if (!fs.existsSync(path.resolve('.env'))) {
  console.log('Không tìm thấy file .env');
  process.exit(1);
}
class ConfigSchema {
  @IsString()
  DATABASE_URL!: string;
//   @IsString()
//   ACCESS_TOKEN_SECRET!: string;
//   @IsString()
//   ACCESS_TOKEN_EXPIRES_IN!: string;
//   @IsString()
//   REFRESH_TOKEN_SECRET!: string;
//   @IsString()
//   REFRESH_TOKEN_EXPIRES_IN!: string;
}
// process.env -> là một cái object chứa các biến env
// Chuyển 1 cái object này -> thành 1 class -> để validate và chuyển đổi dữ liệu

// hàm plainToInstance -> chuyển 1 cái object -> thành 1 class instance
const configServer = plainToInstance(ConfigSchema, process.env, {
// enableImplicitConversion -> nếu biến môi trường nào không phải string thì sẽ tự động chuyển đổi sang kiểu dữ liệu đó.
// Ví dụ: biến môi trường nào là số thì sẽ chuyển sang kiểu number, biến môi trường nào là boolean thì sẽ chuyển sang kiểu boolean
  enableImplicitConversion: true,
});
// validateSync -> validate các biến môi trường trong file .env
const errorArray = validateSync(configServer); // nó là 1 array chứa các lỗi validate

// Nếu có lỗi validate -> Mình sẽ custom lại lỗi cho gọn hơn.
// Vì errorArray trả về rất nhiều thông tin, mình chỉ cần 3 thông tin là property, constraints và value
if (errorArray.length > 0) {
  console.log('Các giá trị khai báo trong file .env không hợp lệ');
  const errors = errorArray.map((eItem) => {
    // custom lại, mình khai báo ra một object và 3 trường thông tin mình cần
    return {
      property: eItem.property,
      constraints: eItem.constraints,
      value: eItem.value,
    };
  });
  throw errors;
}
const envConfig = configServer;

export default envConfig;
