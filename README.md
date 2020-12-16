### Foodles-Home-Assignment

## Set up

# Back:

First enter the server directory, then:

- Init the project: `yarn install`

- Create a test database and a development database with postgres

- Create the .env.test file for test environment variables and add the following variables:

  - APP_ENV=test
  - DB_HOST: The test database host
  - DB_DATABASE: The test database name
  - DB_USER: The test database username
  - DB_PASSWORD: The test database password
  - DB_PORT: The test database post
  - PORT: The web server port in test environment (must be different from the dev one)
  - BACK_END_URL: The back-end url
  - BACK_END_URL: The front-end url

- Create the .env.development file for development environment variables and add the same environment variables as for test but with development environment value:

  - APP_ENV=development

  - ...

- Test the project with: `yarn test`

- Run the project in development environment with: `yarn dev`
# Front:

First enter the web directory, then:

- Init the project with :`yarn install`

- Create the .env.local at the root of web folder with:

  - NEXT_PUBLIC_BACK_END_URL: It's the url of your graphql backend API.

- Test the project with: `yarn test`

- Run the project in development environment with: `yarn dev`

- Build the project with: `yarn build`

- Run the project in production environment (after the build): `yarn start`

## Summary:

I develop the project in a node js environement. I prefer typescript over javascript mainly because it offer type.

- For the backend I use the following libraries:
	- express: ligthweight node js middleware library to create API
	- graphql: Query engine for API
	- Appolo-server-express: Combine express and grapql to use the graphql schemas to request the api
	- postgresql: for the database
	- type-orm: To connect the database with the code.
	- Type-graphql: To define the graphql schemas with class and decorator.

- For the frontend I use the following libraries:
	- Next js: A react framework
	- Chakra UI: A component friendly css library
	- Urql: An open source and single package graphql client that offer caching.
	- graphql code generator: To generate types and hooks based on the backend graphql schema for the frontend.


I use jest for testing.

I assume there are users and product in the database at set up.
I also assume that we need to register the history of what dish users by.

If i have more time, i will write tests in the front
