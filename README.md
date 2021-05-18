# React Covid-19 tracker

This project is an extended clone of a
[similar dashboard by Bard Traversy](https://github.com/bradtraversy/vue-covid-tracker), implemented in Vue.

The web app presents world-wide confirmed cases and deaths of Covid-19.
Data is fetched from [covid19api.com](https://covid19api.com).

The user can also select a particular country to observe its stats.

While the data is loading, the user will see an hourglass spinner as an indication.

If an error has occured during feching, a appropriate message is shown to the user.

## Technical details

The app uses a custom hook to fech data from an external API and update its state accordingly.
The hook is implemented with React useReducer hook.

Styling was added using [tailwindcss](https://tailwindcss.com/). Due to that, npm scripts execute craco rather than react-scripts, however npm aliases remain the same.
See [installation instructions](#instructions) how to execute the scripts.

## Installing the source code

### Prerequisites

- node.js 14 or higher
- npm 7 or higher

### Instructions

1. Clone the repository locally
2. Run `npm install`
3. To run in development mode &ndash; see [npm start](#npm-start)
4. To build for production &ndash; see [npm run build](#npm-run-build)

## Getting Started with Create React App

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

### Available Scripts

In the project directory, you can run:

#### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.\
You will also see any lint errors in the console.

#### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.
