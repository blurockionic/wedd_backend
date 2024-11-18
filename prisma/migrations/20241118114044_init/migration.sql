/*
  Warnings:

  - You are about to drop the column `uploaded_at` on the `User` table. All the data in the column will be lost.

*/
-- AlterTable
ALTER TABLE "User" DROP COLUMN "uploaded_at",
ADD COLUMN     "updated_at" TIMESTAMP(3);
