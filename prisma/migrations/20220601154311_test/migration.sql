-- RedefineTables
PRAGMA foreign_keys=OFF;
CREATE TABLE "new_Card" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "createdAt" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "title" TEXT,
    "value" INTEGER NOT NULL,
    "published" BOOLEAN NOT NULL DEFAULT false,
    "authorId" TEXT,
    CONSTRAINT "Card_authorId_fkey" FOREIGN KEY ("authorId") REFERENCES "User" ("email") ON DELETE SET NULL ON UPDATE CASCADE
);
INSERT INTO "new_Card" ("authorId", "createdAt", "id", "published", "title", "value") SELECT "authorId", "createdAt", "id", "published", "title", "value" FROM "Card";
DROP TABLE "Card";
ALTER TABLE "new_Card" RENAME TO "Card";
PRAGMA foreign_key_check;
PRAGMA foreign_keys=ON;
