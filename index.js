let express = require("express");
let app = express();
let bodyParser = require("body-parser");
let cors = require("cors");
let data = require("./data");
let disposableMask = require("./disposableMask");
let port = 4000;

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(cors());

app.get("/", (req, res) => res.send("Hello World"));

app.get("/products", (req, res) => res.json(data.products)); // if we visit http://localhost:4000/products we will see the products information from the data.js file

app.get("/disposable", (req, res) => res.json(disposableMask.disposable)); // if we visit the http://localhost:4000/disposable see will see the disposable mask product information from disposableMask. js file

app.listen(port);
console.log("api running on " + port + ":");
