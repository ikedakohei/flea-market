import { PartialType } from "@nestjs/mapped-types";
import { ItemStatus } from "@prisma/client";
import { IsEnum, IsOptional } from "class-validator";

import { CreateItemDto } from "./create-item.dto";

export class UpdateItemDto extends PartialType(CreateItemDto) {
  @IsEnum(ItemStatus)
  @IsOptional()
  status!: ItemStatus;
}
