import { DataSource, DataSourceOptions } from 'typeorm';

export const ormConfig: DataSourceOptions = {
  type: 'postgres',
  host: 'localhost',
  port: 5432,
  username: 'postgres',
  password: 'pass123',
  database: 'postgres',
  synchronize: true,
  entities: ['dist/**/*.entity.js'],
  migrations: ['dist/migrations/*.js'],
};

export const dataSource = new DataSource(ormConfig);
