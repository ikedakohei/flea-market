import { Module } from "@nestjs/common";
import { ConfigModule } from "@nestjs/config";

import { AuthModule } from "./auth/auth.module";
import { ItemsModule } from "./items/items.module";
import { PrismaModule } from "./prisma/prisma.module";

@Module({
  controllers: [],
  imports: [ConfigModule.forRoot({ isGlobal: true }), ItemsModule, PrismaModule, AuthModule],
  providers: [],
})
export class AppModule {}
