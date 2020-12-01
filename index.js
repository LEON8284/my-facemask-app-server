let express = require("express");
let app = express();
let bodyParser = require("body-parser");
let cors = require("cors");
let data = require("./data");
let port = 4000;

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(cors());

app.get("/", (req, res) => res.send("Hello World"));

app.get("/products", (req, res) => res.json(data.products)); // if we visit http://localhost:4000/products we will see the products information from the data.js file

//app.get("/disposableMask", (req, res) => res.json(data.disposableMask)); // if we visit http://localhost:4000/disposableMask we will see the data for disposableMask from the data.js file

app.listen(port);
console.log("api running on " + port + ":");
