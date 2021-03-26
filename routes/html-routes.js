const path = require('path'); 

module.exports = (app) => {
    //homepage
    app.get('/', (req, res) =>
    res.render("index")
    ); 

    app.get('/searchedroute',(req, res) =>
    res.sendFile(path.join(__dirname, '../public/ResultsPage.html'))
    );

    app.get('/savedroutes',(req, res) =>
    res.sendFile(path.join(__dirname, '../public/savedroutes.html'))
    );
}; 