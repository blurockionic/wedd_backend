/*
  Warnings:

  - A unique constraint covering the columns `[userId,serviceId]` on the table `Cart` will be added. If there are existing duplicate values, this will fail.

*/
-- DropIndex
DROP INDEX "Cart_id_userId_key";

-- CreateIndex
CREATE UNIQUE INDEX "Cart_userId_serviceId_key" ON "Cart"("userId", "serviceId");
