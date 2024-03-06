/*
  Warnings:

  - You are about to drop the `House` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropForeignKey
ALTER TABLE `House` DROP FOREIGN KEY `House_builtById_fkey`;

-- DropForeignKey
ALTER TABLE `House` DROP FOREIGN KEY `House_ownerId_fkey`;

-- DropTable
DROP TABLE `House`;
