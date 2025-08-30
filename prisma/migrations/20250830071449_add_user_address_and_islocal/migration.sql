-- AlterTable
ALTER TABLE "public"."User" ADD COLUMN     "address" TEXT,
ADD COLUMN     "isLocal" BOOLEAN NOT NULL DEFAULT false;
