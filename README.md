# Rapiddweller challenger

Rapiddweller challenger is a web project that written by ReactJs and Typescript.

### Setting up your first run!

> Make sure that you have Node.JS installed on your device from nodejs.org with the required version is `16.18.1`

#### Start the project

Now in the terminal and and after you `cd` to the repo's root:

- run `yarn install`, this will install all app dependencies.
- run `yarn prepare`, this will prepare for husky.
- run `yarn dev` which will run the app in the development space.

#### Build the repository

- run `yarn build` , this will expose all resources to `dist` folder.

### Our structure - Clean code architecture

- `src/presentation` (Presentation): Contain all ui components
- `src/services` (Services): Contain all utils, redux, browser services like localStorage, fetch...
- `src/infras` (Infrastructure): Contain all outside services like api, third-party...
- `src/models` (Domain/Models): Contain all entities, objects, interfaces for display on the UI
