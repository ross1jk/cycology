const express = require('express');

const htmlRouter = require('./routes/html-routes.js');
const apiRouter = require('./routes/api-routes'); 

const app = express();
const PORT = process.env.PORT || 8080;

const db = require('./models');

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.use(express.static(__dirname + '/public'));

htmlRouter(app); 
apiRouter(app);

// Syncing our sequelize models and then starting our Express app
db.sequelize.sync({ force: true }).then(() => {
  app.listen(PORT, () => console.log(`Listening on PORT ${PORT}`));
});
