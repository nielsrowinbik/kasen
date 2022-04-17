# Kasen

## Running locally

```bash
$ git clone https://github.com/nielsrowinbik/kasen
$ cd kasen
```

### With Docker:

```bash
$ docker compose run --rm kasen npm ci # Only on first run to install dependencies
$ docker compose up # To start development server
$ docker compose exec kasen sh # Run this to run commands within the container
```

### Without Docker:

```bash
$ npm i # To install dependencies
$ npm run dev # To start development server
```

Create a `.env.local` file similar to [`.env.example`](https://github.com/nielsrowinbik/kasen/blob/master/.env.example).
