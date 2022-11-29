const Review = require("../models/Reviews");
const express = require("express");
const router = express.Router();

router.get("/", (req, res) => console.log("Console"))
router.post("/post", async (req, res) => {
    const {title, body, rate} = req.body;
    try{
        let review = new Review({
            title: title,
            body: body,
            rate: rate
        })
        if (!review) return res.status(400).json({
            msg: "Review doesn't seem right",
        });
        review.save()
        return res.send(JSON.stringify(review))
    } catch(e) {
        console.log(e);
        res.status(500).send("Error in posting review");
    }
})

module.exports = router