# Blue Bottle Coffee

###### Description of architecture
The back end was created with Node.js / Express and MongoDB as database. All API routes are in routes folder.

The front end was created with Javascript / React / Redux. 

Components:
App = component that displays all other components in the project
HomePage = component that renders Modal and Order Form
Pagination = component that takes care of displaying 25 items per page
Data = component that renders our data from database

###### Description of any trade-offs you made

I did not create as many tests as I wanted to as I got close to the 8 hour requirement and implementing Redux changed the way I wanted to approach this coding exercise as I was thinking of a bigger picture where there might be a lot more states needed in the React app as the order system gets scaled out. However, I do not believe I needed to use Redux in this specific project and I have not performed many unit testing under Redux. 

###### Description of how to run it locally

* perform "npm install" on root directory to install dependencies for back-end
* go into client folder and perform "npm install" to install dependencies for client-side
* perform "npm run dev" to run both servers of front and back end in parallel
* mLab is used to hold mongoDB data, and I have included the dev key to access the db. So no need to seed data.

###### Description of deployment and production readiness

Performing "npm run build" will build the app for production to the build folder and it correctlys bundles React in production mode and optimizes the build for the best performance. The build will be minified and the filenames include the hashes. The app will be ready to be deployed afterwards and it can be eithe pushed up to Heroku or containerized through Docker and get pushed up to AWS EC2.
