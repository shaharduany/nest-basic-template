export enum DatabaseTypes {
  mysql = 'mysql',
  mariadb = 'mariadb',
  mongodb = 'mongodb',
}

export const usedSqlDatabase = DatabaseTypes.mariadb;

export const usedDocumentDb = DatabaseTypes.mongodb;

export enum ColumnType {
  CHAR = 'CHAR',
  VARCHAR = 'VARCHAR',
  VARCHAR_255 = 'VARCHAR(255)',
  TINYTEXT = 'TINYTEXT',
  TEXT = 'TEXT',
  MEDIUMTEXT = 'MEDIUMTEXT',
  LONGTEXT = 'LONGTEXT',

  TINYINT = 'TINYINT',
  SMALLINT = 'SMALLINT',
  MEDIUMINT = 'MEDIUMINT',
  INT = 'INT',
  BIGINT = 'BIGINT',
  DECIMAL = 'DECIMAL',
  FLOAT = 'FLOAT',
  DOUBLE = 'DOUBLE',

  DATE = 'DATE',
  DATETIME = 'DATETIME',
  TIMESTAMP = 'TIMESTAMP',
  TIME = 'TIME',
  YEAR = 'YEAR',

  ENUM = 'ENUM',
  SET = 'SET',
  BINARY = 'BINARY',
  VARBINARY = 'VARBINARY',
  BLOB = 'BLOB',

  JSON = 'JSON',
  GEOMETRY = 'GEOMETRY',
  POINT = 'POINT',
  LINESTRING = 'LINESTRING',
  POLYGON = 'POLYGON',
}
