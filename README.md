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
To test the app locally via Wi-Fi, do `npm run dev` and then, in a different terminal, run `gulp mobile` from the project root directory and you will see an IP address in the console (Access URL: External). Type this URL on mobile and you will see the app running. Now you can test it. 

> Note: hot reloading does not work on mobiles for now. Please reload the page manually to see changes.

