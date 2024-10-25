import { ColumnType } from '@app/common/constants/database.constants';
import { TableColumn } from 'typeorm';

export const defaultTimestampColumns: TableColumn[] = [
  new TableColumn({
    name: 'created_at',
    type: ColumnType.TIMESTAMP,
    default: 'now()',
  }),
  new TableColumn({
    name: 'updated_at',
    type: ColumnType.TIMESTAMP,
    default: 'now()',
  }),
];
