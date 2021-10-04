# Qantas Hotels Code Challenge

This project implements the Qantas Hotels Code Challenge.

## Author Notes

I've tried to prioritise the problem solution and test coverage instead of some other aspects, such as CSS and the layout matching. I believe a project like that takes advantage of a design system so I didn't spend much time styling the application. Also, I relied on some external images for the rating icons because I didn't have the original resources available.

Also, I planned some components to be reusable in other scopes the application, such as the `Rating` and `Sorting`. The `Result` components and its sub-components can also be reused in different other contexts but they may require some re-thinking.

Lastly, this application relies on `json-server` package to simulates an API server. I decided to use that so I can simulate a HTTP request and fetch the data as it will happen in a real world.

I hope this implementation makes sense. Look forward to hearing any feedback from the team.

## Available Scripts

In the project directory, you can run:

### `npm run server`

Runs a local JSON API on [http://localhost:8080](http://localhost:8080).
This is important to run before starting the app as it relies on this server to pull data from.

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.\
You will also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

## How to run the app

1. Open a terminal instance and run `npm run server`;
2. Open another terminal instance and run `npm start`;
3. Open `http://localhost:3000` in your browser
