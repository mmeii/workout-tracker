const express = require("express");
const logger = require("morgan");
const mongoose = require("mongoose");

const PORT = process.env.PORT || 8080;

// const db = require("./models");

// express middleware
const app = express();
app.use(logger("dev"));
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(express.static("public"));

// add routes
app.use(require("./routes/html-routes.js"));
app.use(require("./routes/api-routes.js"));

// connect to db
mongoose.connect(
    process.env.MONGODB_URI || "mongodb://localhost/workout",
    {
        useNewUrlParser: true,
        useUnifiedTopology: true,
        useCreateIndex: true,
        useFindAndModify: false
    }
);

// Start the server
app.listen(PORT, () => {
    console.log(`App running on port ${PORT}!`);
});