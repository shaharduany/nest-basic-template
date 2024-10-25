import { ColumnType } from '@common/constants/database.constants';
import { MigrationInterface, QueryRunner, Table } from 'typeorm';

export class CreateBaseUsersTable1729862399735 implements MigrationInterface {
  private tableName: string = 'users';

  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.createTable(
      new Table({
        name: this.tableName,
        columns: [
          {
            name: 'id',
            type: ColumnType.BIGINT,
            isPrimary: true,
            isGenerated: true,
          },
          {
            name: 'username',
            type: ColumnType.VARCHAR_255,
            isNullable: false,
            isUnique: true,
          },
          {
            name: 'password',
            type: ColumnType.VARCHAR_255,
            isNullable: false,
          },
        ],
      }),
    );
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.dropTable(this.tableName);
  }
}
