import { Module } from "@nestjs/common";
import { PrismaModule } from "src/prisma/prisma.module";

import { ItemsController } from "./items.controller";
import { ItemsService } from "./items.service";

@Module({
  controllers: [ItemsController],
  imports: [PrismaModule],
  providers: [ItemsService],
})
export class ItemsModule {}
