# wannabook-frontend

This is a repo for Wannabook frontend

### Git rules
* merges are only after the pull passes a code review of 2 developers
* one cannot push straight into develop branch. We create pull requests instead and wait for 2 developers' approval before merging
* branch naming convention `feature/WNB-19/some-feature-name`
* commit names convention: `WNB-19: Create some feature`
* commit names should contain URL to respective ticket 

### Architecture and tech stack

We use [the following technologies and architecture](https://docs.google.com/document/d/1bBVGc3HTySaMOgyjPUMZxbyz2gxKqtI6KeDokjYyR_Y/edit#).

### Testing on mobiles
To test the app locally via Wi-Fi, set `MOBILE_TESTING` environment variable in `.env.development` to `true`. Once webpack is up and running you will see an IP address in the console (Access URLs - External). Type this URL with port number on mobile and you will see the app running. Now you can test it. 

> Note: hot reloading does not work on mobiles for now. Instead, the page reloads entirely to apply changes.

To turn off mobile testing mode just set `MOBILE_TESTING` to false and restart webpack.

### Environment variables
`.env` files are in the root directory of the project. There are three of them: for development, staging and production. 

Any values you put there will be available in the source code via `process.env.SOMETHING`, where `SOMETHING` is the key in the respective `.env` file.

The `scripts` section in `package.json` contains commands where we specify which environment we want to run in.

## ESLint setup
We support our custom shareable eslint config called `Wannabook`. 

To use the package, just do `npm i` and set your IDE to automatically pick the ESLint config file. 

To change the config, clone the eslint-config repo from `Wannabook`, make changes to `.eslintrc` and publish the package. 

**For now you will need to install all eslint plugins and packages to the project in which you are going to use `eslint-config`. Do not install or add those packages to `eslint config`'s `package.json`.**

  
