// Requiring necessary npm packages
const express = require("express");

// favicon npm package
// const favicon = require('express-favicon');

// Setting up port and requiring models for syncing
const PORT = process.env.PORT || 8080;
const db = require("./models");

// Creating express app
const app = express();
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(express.static("public"));

// favicon invoked - need to add the correct image if useing 
// app.use(favicon(path.join(__dirname, "./public/assets/img/favicon.png")));

// Requiring our routes
const htmlRoutes = require("./routes/html-routes");
const apiRoutes = require("./routes/api-routes");
htmlRoutes(app); 
apiRoutes(app); 


// Syncing our database and logging a message to the user upon success
db.sequelize.sync().then(() => {
  app.listen(PORT, () => {
    console.log(
      "==> :earth_americas:  Listening on port %s. Visit http://localhost:%s/ in your browser.",
      PORT,
      PORT
    );
  });
});