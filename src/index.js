const express = require("express");
const path = require("path");
const morgan = require("morgan");
const handlebars = require("express-handlebars");
const app = express();
const port = 3000;
const route = require("./routes");
const db = require("./config/db");
const methodOverride = require('method-override')

//Connect DB
db.connect();

const bodyParser = require('body-parser')
app.use(bodyParser.urlencoded({ extended: false }))


app.use(express.static(path.join(__dirname, "public")));

app.use(
  express.urlencoded({
    extended: true,
  })
);

app.use(express.json());

app.use(methodOverride('_method'))
//XMLHttpRequest, fetch, axious,...

// HTTP logger
// app.use(morgan("combined"));

//Template engine
app.engine(
  "hbs",
  handlebars.engine({
    extname: ".hbs",
    helpers: {
      sum: (a, b) => a + b,
    }
  })
);
app.set("view engine", "hbs");
app.set("views", path.join(__dirname, "resources", "views"));

console.log("PATH: ", path.join(__dirname, "resources", "views"));

//Home, Search, Contact

//Routes init

route(app);

app.listen(port, () => {
  console.log(`App listening on port ${port}`);
});
