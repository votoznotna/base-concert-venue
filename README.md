# Popular Concert Venue

### An app to support the Udemy course [Testing Next.js Apps](https://www.udemy.com/course/nextjs-testing/)

## Installation

1. Run `npm install`
1. Run `cp .env.development.local_template .env.development.local`
1. Run `cp .env.test.local_template .env.test.local`
1. Run `cp .env.local_template .env.local`
1. In _.env.local_ and _.env.test.local_:

- add long, hard-to-guess strings as the values for `NEXTAUTH_SECRET` and `REVALIDATION_SECRET`

  - command to generate a random string: `openssl rand -base64 32`

## Special setup required to avoid errors

# https://nextjs.org/docs/api-reference/next.config.js/custom-page-extensions#including-non-page-files-in-the-pages-directory

## Running the App

Run `npm run dev`. The app will be found at [http://localhost:3000]

# Testing project

https://github.com/bonnie/ten-cent-teacakes

# Cypress

./node_modules/.bin/cypress install
npm run cypress:start
