import { Injectable, NotFoundException } from "@nestjs/common";
import { Item, ItemStatus } from "@prisma/client";
import { PrismaService } from "src/prisma/prisma.service";

import { CreateItemDto } from "./dto/create-item.dto";
import { UpdateItemDto } from "./dto/update-item.dto";

@Injectable()
export class ItemsService {
  constructor(private readonly prisma: PrismaService) {}

  async findAll(): Promise<Item[]> {
    const items = await this.prisma.item.findMany();
    return items;
  }

  async find(id: number): Promise<Item | null> {
    const item = await this.prisma.item.findUnique({ where: { id } });

    if (!item) throw new NotFoundException("Item not found");

    return item;
  }

  async create(dto: CreateItemDto): Promise<Item> {
    const item = await this.prisma.item.create({ data: { status: ItemStatus.ON_SALE, ...dto } });
    return item;
  }

  async update(id: number, dto: UpdateItemDto): Promise<Item> {
    const item = await this.prisma.item.findUnique({ where: { id } });

    if (!item) throw new NotFoundException("Item not found");

    const updatedItem = await this.prisma.item.update({
      data: dto,
      where: { id },
    });
    return updatedItem;
  }

  async delete(id: number): Promise<void> {
    const item = await this.prisma.item.findUnique({ where: { id } });

    if (!item) throw new NotFoundException("Item not found");

    await this.prisma.item.delete({
      where: { id },
    });
  }
}
