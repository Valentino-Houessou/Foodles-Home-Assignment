# Foodles-Home-Assignment

# Set up

# Front:

First enter the web directory, then:

- Init the project with :`yarn install`

- Create the .env.local at the root of web folder with:

  - NEXT_PUBLIC_BACK_END_URL: It's the url of your graphql backend API.

- Test the project with: `yarn test`

- Run the project in development environment with: `yarn dev`

- Build the project with: `yarn build`

- Run the project in production environment (after the build): `yarn start`

# Back:

First enter the server directory

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
