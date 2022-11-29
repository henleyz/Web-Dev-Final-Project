const express = require("express");
const Review = require("../models/Reviews");
const router = express.Router();

router.get("/", () => console.log("BOOBOOO"))

module.exports = router