import { ForbiddenException, Injectable } from "@nestjs/common";
import { Prisma, User } from "@prisma/client";
import * as bcrypt from "bcrypt";
import { PrismaService } from "src/prisma/prisma.service";

import { CreateUserDto } from "./dto/create-user.dto";

@Injectable()
export class AuthService {
  constructor(private readonly prisma: PrismaService) {}

  async signUp(dto: CreateUserDto): Promise<Omit<User, "hashedPassword"> | undefined> {
    const salt = await bcrypt.genSalt();
    const hashedPassword = await bcrypt.hash(dto.password, salt);

    try {
      const user = await this.prisma.user.create({
        data: { email: dto.email, hashedPassword, name: dto.name, status: dto.status },
      });
      // eslint-disable-next-line @typescript-eslint/no-unused-vars
      const { hashedPassword: _, ...publicUser } = user;
      return publicUser;
    } catch (error) {
      if (error instanceof Prisma.PrismaClientKnownRequestError) {
        if (error.code === "P2002") {
          throw new ForbiddenException("This email is already taken");
        }
      }
    }
  }
}
