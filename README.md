# Typescript, NestJS, and Angular

This is a set of three projects designed to help you gain real-world proficiency
with projects that use Typescript, NestJS, and Angular.

1. A small set of Typescript exercises to get your hands dirty.
2. A NestJS backend server with one route implemented.
3. An Angular frontend that displays the output of the NestJS route.

The NestJS and Angular projects come together to form a seed repository for you
to build on to create this project:

> # Real-time Crypto Prices using NestJS and Angular
> 
> Task: Create a client/server that provides a real time price stream for the
> following coins [BTC,ETH,XRP,LTC,BCH,ETC] and their value in the following
> currencies [USD,GBP,EUR,JPY,ZAR].
> 
> The project must be hosted on Github or Gitlab and CryptoCompare must be used
> as the data source.
> 
> Requirements:
> * Server: NestJS
> * Client: Angular
> * Testing
>
> Nice to haves:
> * History
> * Filters
> * WebSockets

## Introduction & Walkthrough Video

## Things you'll need to learn

Here's a list of things that are important to learn to be proficient in this
stack. You can use it to keep track of your learning, and avoid getting
side-tracked by less important things.

There are a lot of things here and there's no expectation you learn all of this
in any period of time. The key thing is to stay focused and make progress. Check
in with your coach if you are unsure.

- [ ] Javascript
  - [ ] Functions
  - [ ] Classes
  - [ ] Async behaviour
  - [ ] Async/await
  - [ ] Testing
  - [ ] Decorators (e.g. `@Query`)
- [ ] Typescript
  - [ ] Type annotations (e.g. `name: string`)
  - [ ] List and object types (e.g. `number[]` and `{ name: string, age: number }`)
  - [ ] Generic data structures (e.g. `Promise<number>`)
  - [ ] Generic functions (e.g. `function head<T>(list: T[]): T { ... } `)
  - [ ] [Parameter properties](https://www.typescriptlang.org/docs/handbook/2/classes.html#parameter-properties)
- [ ] Client/server applications
  - [ ] Request-response
  - [ ] JSON APIs
- [ ] NestJS
  - [ ] Inversion of Control & Dependency Injection
  - [ ] Nest Generators
  - [ ] Nest Modules
  - [ ] Nest Controllers
  - [ ] Nest Services
- [ ] Angular
  - [ ] AngularJS/Angular1 vs Angular/Angular2
  - [ ] Inversion of Control & Dependency Injection
  - [ ] Angular Generators
  - [ ] Angular Modules
  - [ ] Angular Components
  - [ ] Angular Services
  - [ ] Angular Routing
  - [ ] CSS in Angular

## Seed Project Setup

```shell
; cd 02_nestjs               # For the backend
; npm install -g @nestjs/cli # Install the NestJS CLI
; npm install                # Install dependencies
; code .env                  # Add the API key according to instructions
; npm run test               # Run unit tests
; npm run test:e2e           # Run end-to-end integration tests
; npm run start
# Server will start, to verify visit http://localhost:3000/price?from=BTC&to=USD
```

```shell
# In a new terminal
; cd 03_angular               # For the frontend
; npm install -g @angular/cli # Install the Angular CLI
; npm install                 # Install dependencies
; npm run test                # Run the tests (in Chrome)
; npm run start
# Server will start, to verify visit http://localhost:4200/
```
