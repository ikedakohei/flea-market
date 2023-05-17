import { Injectable, NotFoundException } from "@nestjs/common";
import { Item, ItemStatus } from "@prisma/client";
import { PrismaService } from "src/prisma/prisma.service";

import { CreateItemDto } from "./dto/create-item.dto";
import { UpdateItemDto } from "./dto/update-item.dto";

@Injectable()
export class ItemsService {
  constructor(private readonly prisma: PrismaService) {}

  async findAll(): Promise<Item[]> {
    return await this.prisma.item.findMany();
  }

  async find(id: number): Promise<Item | null> {
    const item = await this.prisma.item.findUnique({ where: { id } });

    if (!item) throw new NotFoundException();

    return item;
  }

  async create(dto: CreateItemDto): Promise<Item> {
    return await this.prisma.item.create({ data: { status: ItemStatus.ON_SALE, ...dto } });
  }

  async update(id: number, dto: UpdateItemDto): Promise<Item> {
    const item = await this.prisma.item.findUnique({ where: { id } });

    if (!item) throw new NotFoundException();

    return await this.prisma.item.update({
      data: dto,
      where: { id },
    });
  }

  async delete(id: number): Promise<void> {
    const item = await this.prisma.item.findUnique({ where: { id } });

    if (!item) throw new NotFoundException();

    await this.prisma.item.delete({
      where: { id },
    });
  }
}
