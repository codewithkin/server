/*
  Warnings:

  - Added the required column `text` to the `ConfessionComment` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "ConfessionComment" ADD COLUMN     "text" TEXT NOT NULL;
