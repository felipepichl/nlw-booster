/*
  Warnings:

  - You are about to drop the column `cost` on the `classes` table. All the data in the column will be lost.
  - Added the required column `coast` to the `classes` table without a default value. This is not possible if the table is not empty.

*/
-- RedefineTables
PRAGMA foreign_keys=OFF;
CREATE TABLE "new_classes" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "coast" REAL NOT NULL,
    "fk_user_id" TEXT NOT NULL,
    "fk_subject_id" TEXT NOT NULL,
    "created_at" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updated_at" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
    CONSTRAINT "classes_fk_user_id_fkey" FOREIGN KEY ("fk_user_id") REFERENCES "users" ("id") ON DELETE RESTRICT ON UPDATE CASCADE,
    CONSTRAINT "classes_fk_subject_id_fkey" FOREIGN KEY ("fk_subject_id") REFERENCES "subjects" ("id") ON DELETE RESTRICT ON UPDATE CASCADE
);
INSERT INTO "new_classes" ("created_at", "fk_subject_id", "fk_user_id", "id", "updated_at") SELECT "created_at", "fk_subject_id", "fk_user_id", "id", "updated_at" FROM "classes";
DROP TABLE "classes";
ALTER TABLE "new_classes" RENAME TO "classes";
PRAGMA foreign_key_check;
PRAGMA foreign_keys=ON;
