const path = require('path'); 

module.exports = (app) => {
    //homepage
    app.get('/', (req, res) =>
    res.render("index")
    ); 

    app.get('/route',(req, res) =>
    res.render("userresults")
    );
}; 