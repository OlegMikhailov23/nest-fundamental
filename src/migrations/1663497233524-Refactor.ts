import { MigrationInterface, QueryRunner } from 'typeorm';

export class Refactor1663497233524 implements MigrationInterface {
  public async up(queryRunner: QueryRunner): Promise<void> {
    `ALTER TABLE "coffee" RENAME COLUMN "name" TO "title"`;
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    `ALTER TABLE "coffee" RENAME COLUMN "title" TO "name"`;
  }
}
