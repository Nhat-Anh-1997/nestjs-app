import { AuthService } from './auth/auth.service';
import { Controller, Get, Post, Request, UseGuards } from '@nestjs/common';
//import { LocalAuthGuard } from './auth/local-auth.guard';
// import { JwtGuard } from './auth/jwt-auth.guard';

@Controller()
export class AppController {
  constructor(private readonly authService: AuthService) {}
  //@UseGuards(LocalAuthGuard)
  @Post('auth/login')
  async login(@Request() req) {
    return req.user;
  }

  // @UseGuards(JwtGuard)
  // @Get('profile')
  // getProfile(@Request() req) {
  //   return req.user;
  // }
}
