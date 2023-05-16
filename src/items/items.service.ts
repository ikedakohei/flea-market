import { Injectable } from "@nestjs/common";
import { Item, ItemStatus } from "@prisma/client";
import { PrismaService } from "src/prisma/prisma.service";

import { CreateItemDto } from "./dto/create-item.dto";

@Injectable()
export class ItemsService {
  constructor(private readonly prisma: PrismaService) {}

  findAll() {
    return { message: "This is ItemService" };
  }

  async create(dto: CreateItemDto): Promise<Item> {
    const item = await this.prisma.item.create({ data: { status: ItemStatus.ON_SALE, ...dto } });
    return item;
  }
}
