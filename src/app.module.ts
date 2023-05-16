import { Module } from "@nestjs/common";

import { ItemsModule } from "./items/items.module";

@Module({
  controllers: [],
  imports: [ItemsModule],
  providers: [],
})
export class AppModule {}
