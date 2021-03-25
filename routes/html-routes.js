const path = require('path'); 

module.exports = (app) => {
    //homepage
    app.get('/', (req, res) =>
    res.sendFile(path.join(__dirname, '../public/search-element.html'))
    ); 
}