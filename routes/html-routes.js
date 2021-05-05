// const path = require('path'); 
module.exports = (app) => {
    // homepage
    app.get('/', (req, res) =>
    // res.sendFile(path.join(__dirname, '../public/search-element.html'))
    res.render("index")
    ); 

    // user results 
    app.get('/route',(req, res) =>
    res.render("searchresult")
    // res.sendFile(path.join(__dirname, '../public/ResultsPage.html'))
    );

    // saved routes
    app.get('/savedroutes', (req, res) => 
    res.render("savedroutes")
    // res.sendFile(path.join(__dirname, '../public/savedroutes.html'))
    ); 
}; 