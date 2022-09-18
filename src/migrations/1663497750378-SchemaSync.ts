import { MigrationInterface, QueryRunner } from 'typeorm';

export class SchemaSync1663497750378 implements MigrationInterface {
  name = 'SchemaSync1663497750378';

  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(`ALTER TABLE "coffee" DROP COLUMN "description"`);
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(
      `ALTER TABLE "coffee" ADD "description" character varying`,
    );
  }
}
