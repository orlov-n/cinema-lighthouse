# Rancid Tomatillos

## Overview
**Rancid Tomatillos** is an easy-to-use, visually appealing application that allows for a user to view information about some popular (and not-so-popular) movies. Information includes release date, average ratings, overview, and more.

#### Goals
- Gain competency with React fundamentals such as using functional components vs. class components (and its methods)
- Implement Cypress to conduct acceptance testing on React components & asynchronous JS
- Create a multi-page UX using Router

#### Project Specs
The rubric and specs can be found [here](https://frontend.turing.edu/projects/module-3/rancid-tomatillos-v3.html).

## Set Up
1. Fork this [repository](https://github.com/orlov-n/Tomatillos-Rancid), and clone it into your local machine.
2. Navigate into the repository.
3. Run `npm install` from your command line, which will install the required React framework.
4. Open another command line tab, and remain in the repository. Each time you use the application, run `npm start`, and copy the local host link, `http://localhost:3000/`, to your browser to view the application.
5. To run testing, run `npm i -D cypress` to install Cypress as a dev dependency.
6. Add 
`{
  "scripts": {
    "cypress": "cypress open"
  }
}`
to `package.json`, and then run `npm run cypress` to begin testing.

## Visual Walkthrough
- User can view a list of movies on the home page
![Home Page](src/images/home.gif)

- User can view more specific information about 
![Selected Movie Information Page](src/images/info.gif)

## Technologies Implemented
- Javascript/HTML (JSX)
- React
- React Router
- Webpack
- REST API
- Cypress
- CSS

## Future Directions
- Create a search bar filter function so the user can look for a specific movie
- Add a user login page so users can access their own information
- Implement Express microservice so users can store their movie ratings, favorite movies, and movies watched

## Contributors
- [Kristy Nguyen](https://github.com/kpn678)
- [Nickolai Orlov](https://github.com/orlov-n)
