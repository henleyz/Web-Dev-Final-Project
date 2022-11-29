const Review = require("../models/Reviews");
const express = require("express");
const router = express.Router();

router.get("/", async (req, res) => {
    const {library} = req.body
    try{
        let reviews = await Review.find({library}).limit(10).sort({createdAt: -1}) // Return a list of latest 10 reviews corresponding to this library
        res.send(JSON.stringify(reviews))
    } catch(e){
        console.log(e);
        res.status(500).send("Cannot get the reviews");
    }
})
router.post("/post", async (req, res) => {
    const {library, title, body, rate} = req.body; // Create a review and save into the db
    try{
        let review = new Review({
            library: library,
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