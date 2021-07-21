const express = require("express");
const cors = require("cors");
const errorHandler = require("errorHandler");
const mongoose = require("mongoose");
const routes = require("./src/routes");
require("dotenv").config();

const { PORT, NODE_ENV,} = process.env;
const isProduction = NODE_ENV === "production";

const app = express();

const port = PORT || 4000;

app.use(cors());
app.use(express.urlencoded({extended: true}));
app.use(express.json());

if(!isProduction) app.use(errorHandler());
// app.use(routes);

app.listen(port, () => {
    console.log(`port is running on ${port}`);
});
