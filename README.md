# react-query-moviedb-demo

Demonstration of react-query library features using free MovieDB API

To use this demo you will need an account for MovieDB Api, you can register [here](https://www.themoviedb.org/signup).

Then add environment variable values in `env.local` file:

```
VITE_MOVIE_DB_USERNAME=your_username
VITE_MOVIE_DB_PASSWORD=your_password
```

## Start app in development mode

```
npm run dev
```

## Start JSON server with reviews & comments

```
npx json-server ./src/db/json
```
