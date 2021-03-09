# Movies Zone

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app), using the [Redux](https://redux.js.org/) and [Redux Toolkit](https://redux-toolkit.js.org/) template.

It also uses `json-server` to mock a potential API server, `redux-observables` to handle async requests,
`jest` and `react-testing-library` for the unit testing, `styled-component` for the styling, `typescript` for static typing.

The UI is quite basic and lacks of any particular, shiny interaction and the test coverage is not 100%. There are just few tests (snapshots and unite tests) to show a possible strategy of testing.
Generally the typing and naming makes the code decently readable and every component has a bit of commented details 

##To run the project:

### `yarn json-server`

Run the fake json-server that serves the mocked APIs over the port 3004
If you don't run the json-server, application will just fail to load the resources

Then the following command to run the app in dev mode

### `yarn start`

Runs the app in the development mode.<br />
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.<br />
You will also see any lint errors in the console.

### `yarn test`

Launches the test runner in the interactive watch mode.<br />
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `yarn build`

Builds the app for production to the `build` folder.<br />
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.<br />
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.
