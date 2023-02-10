var express = require('express');
var app = express();

app.use(express.json())

const quoteRouter = require("./src/controllers/QuoteController")
app.use("/quote", quoteRouter)

app.listen(3000)