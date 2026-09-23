import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Post,
  Put,
} from '@nestjs/common';
import { UsersService } from './users.service';
import envConfig from 'src/shared/config';

@Controller('users')
export class UsersController {
  constructor(private readonly usersSerivce: UsersService) {}
  @Get('')
  getUsers() {
    console.log(envConfig.DATABASE_URL);
    return this.usersSerivce.getUsers();
  }
  @Post('')
  createUser(@Body() payload: any) {
    console.log(payload);
    return this.usersSerivce.createUser(payload);
  }
  @Put('/:id')
  updateUser(@Body() payload: any, @Param('id') id: string) {
    return this.usersSerivce.updateUser({ id, payload });
  }
  @Delete('/:id')
  deleteUser(@Param('id') id: string) {
    return this.usersSerivce.deleteUser({ id });
  }
}
