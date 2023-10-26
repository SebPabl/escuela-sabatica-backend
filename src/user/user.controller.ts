import { Controller, Get, Post, Body } from '@nestjs/common';
import { UserService } from './user.service';
import { UserInterface } from './interface/user.interface';

@Controller('user')
export class UserController {
  constructor(private readonly userService: UserService) { }

  @Post()
  create(@Body() createUserInterface: UserInterface) {
    return this.userService.create(createUserInterface);
  }

  @Get()
  findAll() {
    return this.userService.findAll();
  }
}