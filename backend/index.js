const express = require("express");
const bodyParser = require("body-parser");
const InitiateMongoServer = require("./config/db");
const user = require("./routes/user");
const cors = require('cors');
const library = require("./routes/library");
const review = require("./routes/review");
const clear = require("./clearDB");

InitiateMongoServer();
const app = express();
const PORT = process.env.PORT || 3000
app.use(cors());
app.use(bodyParser.json());
app.use("/user", user)
app.use("/library", library)
app.use("/review", review)

// Comment out when you don't want to clear the database
// app.use("/clearDB", clear)

app.get("/", (req, res) => {
    res.json({ message: "API Working" });
})

app.listen(PORT, (req, res) => {
    console.log(`Server started at PORT ${PORT}`);
})