import {
  Body,
  Controller,
  Delete,
  Get,
  HttpCode,
  HttpStatus,
  Param,
  ParseIntPipe,
  Patch,
  Post,
} from "@nestjs/common";
import { Item } from "@prisma/client";

import { CreateItemDto } from "./dto/create-item.dto";
import { UpdateItemDto } from "./dto/update-item.dto";
import { ItemsService } from "./items.service";

@Controller("items")
export class ItemsController {
  constructor(private readonly itemsService: ItemsService) {}

  @Get()
  findAll() {
    return this.itemsService.findAll();
  }

  @Get(":id")
  find(@Param("id", ParseIntPipe) id: number) {
    return this.itemsService.find(id);
  }

  @Post()
  create(@Body() dto: CreateItemDto): Promise<Item> {
    return this.itemsService.create(dto);
  }

  @Patch(":id")
  update(@Param("id", ParseIntPipe) id: number, @Body() dto: UpdateItemDto): Promise<Item> {
    return this.itemsService.update(id, dto);
  }

  @HttpCode(HttpStatus.NO_CONTENT)
  @Delete(":id")
  delete(@Param("id", ParseIntPipe) id: number): Promise<void> {
    return this.itemsService.delete(id);
  }
}
