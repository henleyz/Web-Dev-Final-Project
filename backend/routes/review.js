const Review = require("../models/Reviews");
const Library = require("../models/Library");
const express = require("express");
const router = express.Router();

var app = express();
app.use(express.urlencoded({extended: false}));
app.use(express.json()) // To parse the incoming requests with JSON payloads


router.get("/", async (req, res) => {
    console.log("Getting review from " + req.query.library);
    const library = req.query.library;

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
    if(title == ''|| body == ''){
        console.log("empty review")
        return null;
    } 
    console.log("Posting review to " + library)
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

        let lib = await Library.findOne({name: library})
        await Library.updateOne(
            {name: library},
            {
            $inc: {total_reviews: 1, total_rate: rate},
            $set: {rating:((lib.total_rate + rate)/(lib.total_reviews + 1)).toFixed(1)}})
        return res.send(JSON.stringify(review));
    } catch(e) {
        console.log(e);
        res.status(500).send("Error in posting review");
    }
})

module.exports = router