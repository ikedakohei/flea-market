import { Module } from "@nestjs/common";
import { ConfigModule } from "@nestjs/config";

import { ItemsModule } from "./items/items.module";
import { PrismaModule } from "./prisma/prisma.module";

@Module({
  controllers: [],
  imports: [ConfigModule.forRoot({ isGlobal: true }), ItemsModule, PrismaModule],
  providers: [],
})
export class AppModule {}
