# Mobilize frontend

## How to run

1. From the root of the repository, run `yarn` to install dependencies
2. Run `yarn start` to start the development server at http://localhost:3000
3. Run `yarn run test` to run the tests

## Design

- This repository follows the ["Functional Core, Imperative Shell"](https://www.destroyallsoftware.com/screencasts/catalog/functional-core-imperative-shell) model. State is managed in App.js, and every other component is kept stateless.

- I didn't add [React Router](https://reactrouter.com/) because I thought adding an additional dependency would create more complexity than manually managing the view with state. In retrospect, that was a mistake, and I would refactor with React Router if I had more time.

- The map view is unreachable with a screen reader since the list view is much more useable with a screen reader.

- I kept the URL as a string in state instead of using a `URL` or `URLSearchParams` object since having a `setUrl` function that takes a string allows for the easy use of the `previous` and `next` fields returned from the Mobilize API.

- To save time and minimize errors, this app heavily relies on [React Bootstrap](https://react-bootstrap.github.io/) components rather than custom components.

- As a React app, this app has a hefty bundle size. Thankfully, this app is a Single Page App, so the bundle only has to be loaded once. Additionally, strategies for reducing bundle size are described [here](https://create-react-app.dev/docs/production-build/#static-file-caching).
