const express = require("express");
const bodyParser = require("body-parser");
const InitiateMongoServer = require("./config/db");
const user = require("./routes/user");
const cors = require('cors');

InitiateMongoServer();
const app = express();
const PORT = process.env.PORT || 3000
app.use(cors());
app.use(bodyParser.json());

app.get("/", (req, res) => {
    res.json({ message: "API Working" });
})

app.use("/user", user)

app.listen(PORT, (req, res) => {
    console.log(`Server started at PORT ${PORT}`);
})