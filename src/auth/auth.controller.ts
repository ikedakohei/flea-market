import { Body, Controller, Post } from "@nestjs/common";
import { User } from "@prisma/client";

import { AuthService } from "./auth.service";
import { CreateUserDto } from "./dto/create-user.dto";

@Controller("auth")
export class AuthController {
  constructor(private readonly authService: AuthService) {}

  @Post("signup")
  async signUp(@Body() dto: CreateUserDto): Promise<Omit<User, "hashedPassword"> | undefined> {
    return await this.authService.signUp(dto);
  }
}
