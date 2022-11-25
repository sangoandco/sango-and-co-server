const express = require('express');
const cors = require('cors');
const app = express();
const {
    getWebWordingService,
    getUserDetailsService
  } = require("./express-services");

app.use(cors())

app.use(express.json())
app.use(express.urlencoded({ extended: true }));

app.get("/wording", getWebWordingService);
app.get("/users", getUserDetailsService);

app.listen('3001', () => { })