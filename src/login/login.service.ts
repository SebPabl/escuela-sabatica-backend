import { BadRequestException, Injectable } from '@nestjs/common';
import { UserService } from 'src/user/user.service';
import { LoginDto } from './dto/login.dto';

@Injectable()
export class LoginService {
    constructor(private readonly userService: UserService){}

    async login(loginDto: LoginDto){
        const user = this.userService.findByUsername(loginDto.username);
        
        if(!user) {
            throw new BadRequestException("User does not exist");
        }

        if(loginDto.password != (await user).password){
            throw new BadRequestException("Password is incorrect");
        }

        return {
            user
        }
        
    }
}
