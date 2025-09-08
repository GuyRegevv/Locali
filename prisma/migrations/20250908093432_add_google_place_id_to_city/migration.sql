/*
  Warnings:

  - A unique constraint covering the columns `[googlePlaceId]` on the table `City` will be added. If there are existing duplicate values, this will fail.

*/
-- AlterTable
ALTER TABLE "public"."City" ADD COLUMN     "googlePlaceId" TEXT;

-- CreateIndex
CREATE UNIQUE INDEX "City_googlePlaceId_key" ON "public"."City"("googlePlaceId");
