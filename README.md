# club-members
Manage members of a club

## Scope
This is a basic node application to manage the members of a club. The functionality to be implemented is limited to

- An API to store and retrieve members
- An API to create lists of members (e.g. Club officers, members, former members, prospects)
- An API to send emails to the members
- A basic web page providing a graphical user interface to use these APIs
- User authentication

## Status

 5% done as of 2015-04-28

 - Basic ui to list and add members
 - Basic api to retrieve and store members
 
## Backlog
- Add form validation to members ui
- Prettify members ui
- Authentication
- Enhance member api to change and delete members
- Enhance member ui to change and delete members
- Implement ember list api
- Create ui for member lists
- Implement api to send email
- Implement ui for sending email

## Setup

1. Install node.js and MongoDB on your machine
2. Download and unzip the sources or clone the repository (run `git clone http://github.com/MichaelWegelin/club-members`)
3. Run `npm install` to fetch the dependencies
4. Run `gulp assets` to create the assets (.css and .js files for the client-side ui)
5. Run `node server.js`
6. Navigate to http://localhost:3000/

## Technologies used
- Node.js to run server side JavaScript
- Express as a server side web application framework
- MongoDB as a NoSQL document database
- AngularJS for client UI


