/*
  Warnings:

  - You are about to drop the column `resetPasswordExpire` on the `User` table. All the data in the column will be lost.
  - You are about to drop the column `resetPasswordToken` on the `User` table. All the data in the column will be lost.

*/
-- AlterTable
ALTER TABLE "User" DROP COLUMN "resetPasswordExpire",
DROP COLUMN "resetPasswordToken",
ADD COLUMN     "refresh_Token" TEXT,
ADD COLUMN     "resetPassword_Expire" TEXT,
ADD COLUMN     "resetPassword_Token" TEXT;
