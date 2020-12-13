const express = require("express");
const expressHbs = require("express-handlebars");
const hbs = require("hbs");
const app = express();


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


app.use("/", function(request, response){

    response.render("home.hbs");
});
app.listen(80);