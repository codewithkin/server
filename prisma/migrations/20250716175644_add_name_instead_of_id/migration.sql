/*
  Warnings:

  - You are about to drop the column `creatorId` on the `Confession` table. All the data in the column will be lost.
  - You are about to drop the column `creatorId` on the `ConfessionComment` table. All the data in the column will be lost.
  - You are about to drop the column `creatorId` on the `ConfessionCommentComment` table. All the data in the column will be lost.
  - You are about to drop the column `creatorId` on the `ConfessionCommentLike` table. All the data in the column will be lost.
  - You are about to drop the column `creatorId` on the `ConfessionLike` table. All the data in the column will be lost.
  - Added the required column `creatorName` to the `Confession` table without a default value. This is not possible if the table is not empty.
  - Added the required column `creatorName` to the `ConfessionComment` table without a default value. This is not possible if the table is not empty.
  - Added the required column `creatorName` to the `ConfessionCommentComment` table without a default value. This is not possible if the table is not empty.
  - Added the required column `creatorName` to the `ConfessionCommentLike` table without a default value. This is not possible if the table is not empty.
  - Added the required column `creatorName` to the `ConfessionLike` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "Confession" DROP COLUMN "creatorId",
ADD COLUMN     "creatorName" TEXT NOT NULL;

-- AlterTable
ALTER TABLE "ConfessionComment" DROP COLUMN "creatorId",
ADD COLUMN     "creatorName" TEXT NOT NULL;

-- AlterTable
ALTER TABLE "ConfessionCommentComment" DROP COLUMN "creatorId",
ADD COLUMN     "creatorName" TEXT NOT NULL;

-- AlterTable
ALTER TABLE "ConfessionCommentLike" DROP COLUMN "creatorId",
ADD COLUMN     "creatorName" TEXT NOT NULL;

-- AlterTable
ALTER TABLE "ConfessionLike" DROP COLUMN "creatorId",
ADD COLUMN     "creatorName" TEXT NOT NULL;
