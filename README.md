# Ticket Management Backend

This is a backend service built with [NestJS](https://nestjs.com/) to manage ticket sales. The project demonstrates how to structure a NestJS application with multiple apps, utilizing a shared core library that contains the business logic.

## Project Structure

The project is divided into the following main components:

### 1. Core Library (`libs/core`)

The Core library contains the essential business logic and modules that are shared across different apps. It includes:

- **Events Module**: Manages events like concerts, shows, etc.
- **Spots Module**: Handles the available spots or seats in the events.
- **Prisma Module**: The main module for database interactions using [Prisma](https://www.prisma.io/).
- **Authentication Module**: Validates requests to ensure they contain a valid token.

### 2. Partner Apps

The project includes two partner applications, each consuming the core library's modules:

- **Partner 1 (`apps/partner1`)**: An application that leverages the core library to handle its specific needs.
- **Partner 2 (`apps/partner2`)**: Another application that also uses the core library for its business logic.

Both apps interact with the core library, utilizing the shared business logic and modules, which promotes code reuse and a clean architecture.

## Getting Started

### Prerequisites

- Node.js (>= 16.x)
- npm (>= 7.x)
- Docker (for database setup)

## Installation

```bash
$ yarn install
```

## Database Setup

First, start de container:

```bash
$ docker compose up
```

With the container running, run the migrations scripts:

```bash
$ yarn run migrate:partner1
$ yarn run migrate:partner2
```

## Running the app

```bash
# watch mode
$ yarn run start:dev

# production mode
$ yarn run start:prod
```
