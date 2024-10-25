import { MigrationInterface, QueryRunner, Table } from 'typeorm';
import { defaultTimestampColumns } from '../utils/timestamp-columns';

export class AddTimestampColumnsToUsersTable1729883966207
  implements MigrationInterface
{
  private table: Table = new Table({ name: 'users' });
  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.addColumns(this.table, defaultTimestampColumns);
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.dropColumns(this.table, defaultTimestampColumns);
  }
}
