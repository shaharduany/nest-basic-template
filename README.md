# NestJS Basic Template

This is a basic NestJS project template

## Migrations:

To generate migrations, use the following 
```bash
$ npm run migration:create --name=MigrationClassName
```
This should generate a migration file of TypeOrm in the folder `src/database/migrations`
After that, manually add it to index.ts - Will automate later