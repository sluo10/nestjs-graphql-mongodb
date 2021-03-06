# NestJS GraphQL MongoDB
This project is a simple GraphQL server that can create lessons and assign them to students with a MongoDB datastore and TypeORM.

## Description

[Nest](https://github.com/nestjs/nest) framework TypeScript starter repository.

## Installation

```bash
$ npm install
```

## Running the app locally
First, spin up a Mongo Database locally
```bash
docker run --name mongo -p 27017:27017 -d mongo
```

Then, run the application
```bash
# development
$ npm run start

# watch mode
$ npm run start:dev
```

After the application starts, you can open up the GraphQL console.

```bash
$ localhost:3000/graphql
```

## Support

Nest is an MIT-licensed open source project. It can grow thanks to the sponsors and support by the amazing backers. If you'd like to join them, please [read more here](https://docs.nestjs.com/support).

## Stay in touch

- Author - [Kamil Myśliwiec](https://kamilmysliwiec.com)
- Website - [https://nestjs.com](https://nestjs.com/)
- Twitter - [@nestframework](https://twitter.com/nestframework)

## License

  Nest is [MIT licensed](LICENSE).
