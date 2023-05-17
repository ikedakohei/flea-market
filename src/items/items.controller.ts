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
  async findAll(): Promise<Item[]> {
    return await this.itemsService.findAll();
  }

  @Get(":id")
  async find(@Param("id", ParseIntPipe) id: number): Promise<Item | null> {
    return await this.itemsService.find(id);
  }

  @Post()
  async create(@Body() dto: CreateItemDto): Promise<Item> {
    return await this.itemsService.create(dto);
  }

  @Patch(":id")
  async update(@Param("id", ParseIntPipe) id: number, @Body() dto: UpdateItemDto): Promise<Item> {
    return await this.itemsService.update(id, dto);
  }

  @HttpCode(HttpStatus.NO_CONTENT)
  @Delete(":id")
  async delete(@Param("id", ParseIntPipe) id: number): Promise<void> {
    return await this.itemsService.delete(id);
  }
}
