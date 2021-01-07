const express = require("express");
const expressHbs = require("express-handlebars");
const hbs = require("hbs");
const app = express();
const path = require('path');
const publicPath = path.join(__dirname, 'public');


// set up layout
app.engine("hbs", expressHbs(
    {
        layoutsDir: "views/layouts",
        defaultLayout: "layout",
        extname: "hbs"
    }
))
app.set("view engine", "hbs");
hbs.registerPartials(__dirname + "/views/partials");

app.use(express.static('public'))


app.get("/", function(request, response){

    response.render("home.hbs");
});
app.get("/home.hbs", function(request, response){

    response.render("home.hbs");
});
app.get("/kontakt.hbs", function(request, response){

    response.render("kontakt.hbs");
});
const server = app.listen(80, function () {
    console.log('listening on port', server.address().port);
});