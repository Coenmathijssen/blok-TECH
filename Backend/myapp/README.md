# Project TECH webapp | I'm down
<img width="387" alt="Screenshot 2019-06-04 at 22 56 21" src="https://user-images.githubusercontent.com/43337909/58914122-02f6ad00-871e-11e9-86cc-f8d42721c5b2.png">
<img width="387" alt="Screenshot 2019-06-04 at 22 56 21" src="https://user-images.githubusercontent.com/43337909/58914123-038f4380-871e-11e9-93eb-1000986251f8.png">
<img width="387" alt="Screenshot 2019-06-04 at 22 56 21" src="https://user-images.githubusercontent.com/43337909/58914124-038f4380-871e-11e9-97c8-75e10a1137e8.png">


I'm down is a datingapp created for people with a disability. With the app it's possible to find different kinds of relationship. It doesn't matter if you're looking for love, friendship or a community. The app matches your personality with a suitable match through a detailed questionnaire. The app will ask for character trades and preferences, which will be used to find someone suitable. It is also possible to chat on personal level, in groups, make videocalls, send video's and audio, and more. At last, a map functionality is included to find people nearby. Enjoy using this open source app!

## Before you clone/download 
Make sure that you have the following programs setup:
- A code editor
- An CLI(Command Line Interface) like bash or iTerm
- Node ^10.15.1
- MongoDB running locally or cloud-based with MongoAtlas

## Used (and necessery sources)
- NPM
- Node.js
- EJS
- SCSS
- Express

For the full list of dependencies, checkout the package.json in the root directory.

## Installation
1. Clone the repository to your local machine. Create a file and open this file in your terminal. Copy the HTTPS url and paste it after the following command: 
`git clone https://github.com/Coenmathijssen/blok-TECH.git`
2. Move inside the myapp folder within your terminal and install all the required NPM packages through the 
`npm install`
command in your terminal.
3. Create an .env file in the root directory and define the following values for the app to actually work:
```
HOST = your host. Use localhost if running locally
PORT = your port name
DATABASE_NAME = name of your database created through MongoDB
SESSION_KEY = a random string (could be anything) for secure user sessions.
```
This could be anything. However it must match the values in the .env file.
4. Edit the user schema to fit the database suited for your project. This can be done inside the `routes/user-schema.js` file. Read up on the mongoDB docs on how to do that.
An example of a user in the current database:
<img width="387" alt="Screenshot 2019-06-04 at 22 56 21" src="https://user-images.githubusercontent.com/43337909/58913925-967bae00-871d-11e9-9839-2c62e4b15c20.png">
5. Move inside the cloned repository using `cd` in your terminal. Now run the command 
`node app.js` or `nodemon app.js` 
in your terminal.
6. Navigate to the you've chosen. If it is running locally, an example would be:
`localhost:8000`
When you see the login screen, you're all set:


## Receiving updates on all files 
Run the following command in your repository once in a while
`git pull https://github.com/Coenmathijssen/blok-TECH.git`

## Editing / creating new HTML pages
1. Create a new ejs file in the views folder or navigate to an existing page inside this folder.
2. Include the partials you want to include.
3. Write regular HTML inside the ejs pages.
4. Write a new route for the created ejs page in the render-pages.js file located in the routes folder. _Use the existing routes as an example to create a new one._
5. Create a new stylesheet and include this in the ejs file (inside the `<head>`)

## Editing / creating new SCSS files
1. Create a new SCSS file with a name of choice inside the static/styles folder. Otherwise, navigate to an existing one.
2. Import the necessery existing SCSS files in the right order.
3. Write your SCSS code.
4. Compile the SCSS file to browser-readable CSS using the 
`CMD + B` 
command on your mac.
5. Make sure to include the newly compiled CSS file into your corresponding EJS file. Not the SCSS file, this won't work.

## License
This package is licensed under the [MIT license](https://github.com/Coenmathijssen/NPM-boilerplate/blob/master/LICENSE) © [Coen Mathijssen](https://www.coenmathijssen.nl/)

## Sources used to finish this project
- Stack Overflow
- Google
- Github
- Youtube
- Reddit
- Other developers
