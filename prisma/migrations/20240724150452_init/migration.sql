/*
  Warnings:

  - A unique constraint covering the columns `[identity_number]` on the table `Profiles` will be added. If there are existing duplicate values, this will fail.

*/
-- CreateIndex
CREATE UNIQUE INDEX "Profiles_identity_number_key" ON "Profiles"("identity_number");
