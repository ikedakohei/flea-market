-- CreateEnum
CREATE TYPE "ItemStatus" AS ENUM ('ON_SALE', 'SOLD_OUT');

-- CreateTable
CREATE TABLE "items" (
    "id" SERIAL NOT NULL,
    "name" TEXT NOT NULL,
    "price" INTEGER NOT NULL,
    "description" TEXT,
    "status" "ItemStatus" NOT NULL,
    "created_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updated_at" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "items_pkey" PRIMARY KEY ("id")
);
