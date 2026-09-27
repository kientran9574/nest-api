import { Exclude } from 'class-transformer';
import { IsEmail, IsString } from 'class-validator';

export class LoginDTO {
  @IsEmail()
  email!: string;
  @IsString()
  password!: string;
}

export class RegisterDTO extends LoginDTO {
  @IsString()
  name!: string;
}

// Serialize cho response trả về cho client
export class RegisterResEntity {
  id!: number;
  email!: string;
  name!: string;
  // Exclude: Loại trừ
  @Exclude() password!: string;
  createdAt!: Date;
  updatedAt!: Date;

  constructor(partial: Partial<RegisterResEntity>) {
    // Object.assign là: nó sẽ sao chép tất cả các thuộc tính từ đối tượng partial vào đối tượng hiện tại (this).
    Object.assign(this, partial);
  }
}
