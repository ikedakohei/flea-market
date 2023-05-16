import { Injectable } from "@nestjs/common";

@Injectable()
export class ItemsService {
  findAll() {
    return { message: "This is ItemService" };
  }
}
