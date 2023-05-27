/*
  Warnings:

  - A unique constraint covering the columns `[number]` on the table `telephones` will be added. If there are existing duplicate values, this will fail.

*/
-- CreateIndex
CREATE UNIQUE INDEX "telephones_number_key" ON "telephones"("number");
