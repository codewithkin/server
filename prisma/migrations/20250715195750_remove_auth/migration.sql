/*
  Warnings:

  - You are about to drop the column `userId` on the `Confession` table. All the data in the column will be lost.
  - You are about to drop the column `userId` on the `ConfessionComment` table. All the data in the column will be lost.
  - You are about to drop the column `userId` on the `ConfessionLike` table. All the data in the column will be lost.
  - You are about to drop the `User` table. If the table is not empty, all the data it contains will be lost.
  - Added the required column `creatorId` to the `Confession` table without a default value. This is not possible if the table is not empty.
  - Added the required column `creatorId` to the `ConfessionComment` table without a default value. This is not possible if the table is not empty.
  - Added the required column `creatorId` to the `ConfessionLike` table without a default value. This is not possible if the table is not empty.

*/
-- DropForeignKey
ALTER TABLE "Confession" DROP CONSTRAINT "Confession_userId_fkey";

-- DropForeignKey
ALTER TABLE "ConfessionComment" DROP CONSTRAINT "ConfessionComment_userId_fkey";

-- DropForeignKey
ALTER TABLE "ConfessionLike" DROP CONSTRAINT "ConfessionLike_userId_fkey";

-- AlterTable
ALTER TABLE "Confession" DROP COLUMN "userId",
ADD COLUMN     "creatorId" TEXT NOT NULL;

-- AlterTable
ALTER TABLE "ConfessionComment" DROP COLUMN "userId",
ADD COLUMN     "creatorId" TEXT NOT NULL;

-- AlterTable
ALTER TABLE "ConfessionLike" DROP COLUMN "userId",
ADD COLUMN     "creatorId" TEXT NOT NULL;

-- DropTable
DROP TABLE "User";
