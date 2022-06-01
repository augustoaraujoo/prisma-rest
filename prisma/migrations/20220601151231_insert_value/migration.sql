/*
  Warnings:

  - You are about to drop the column `content` on the `Card` table. All the data in the column will be lost.
  - Added the required column `value` to the `Card` table without a default value. This is not possible if the table is not empty.

*/
-- RedefineTables
PRAGMA foreign_keys=OFF;
CREATE TABLE "new_Card" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "createdAt" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "title" TEXT,
    "value" INTEGER NOT NULL,
    "published" BOOLEAN NOT NULL DEFAULT false,
    "authorId" INTEGER,
    CONSTRAINT "Card_authorId_fkey" FOREIGN KEY ("authorId") REFERENCES "User" ("id") ON DELETE SET NULL ON UPDATE CASCADE
);
INSERT INTO "new_Card" ("authorId", "createdAt", "id", "published", "title") SELECT "authorId", "createdAt", "id", "published", "title" FROM "Card";
DROP TABLE "Card";
ALTER TABLE "new_Card" RENAME TO "Card";
PRAGMA foreign_key_check;
PRAGMA foreign_keys=ON;
