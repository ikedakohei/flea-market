## Description

[Nest](https://github.com/nestjs/nest) framework TypeScript starter repository.

## Installation

```bash
$ yarn install
```

## .env（development）

Create a .env file in the root directory of veri-id-server, and write the following contents.

```sh
DATABASE_URL="postgresql://veri_id_user:veri_id_password@localhost:5432/veri_id_development?schema=public"
```

## Prisma (ORM)

```bash
# prisma migrate
$ npx prisma migrate dev

# prisma studio
$ npx prisma studio

# prisma type generation
$ npx prisma generate
```

## Running the app

```bash
# development
$ yarn run start

# watch mode
$ yarn run start:dev

# production mode
$ yarn run start:prod
```

## Test

```bash
# unit tests
$ yarn run test

# e2e tests
$ yarn run test:e2e

# test coverage
$ yarn run test:cov
```
