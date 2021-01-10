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

app.get("/karte.hbs", function(request, response){

    response.render("karte.hbs");
});


app.get("/reservieren.hbs", function(request, response){

    response.render("reservieren.hbs");
});

app.get("/ueberuns.hbs", function(request, response){

    response.render("ueberuns.hbs");
});

app.get("/konfigurator.hbs", function(request, response){

    response.render("konfigurator.hbs");
});

app.get("/bestellen.hbs", function(request, response){

    response.render("bestellen.hbs");
});

app.get("/bestellen2.hbs", function(request, response){

    response.render("bestellen2.hbs");
});

app.get("/bestellenKarte.hbs", function(request, response){

    response.render("bestellenKarte.hbs");
});

app.get("/bestellenPizza.hbs", function(request, response){

    response.render("bestellenPizza.hbs");
});



const server = app.listen(80, function () {
    console.log('listening on port', server.address().port);
});