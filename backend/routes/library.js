const Library = require("../models/Library")
const express = require("express");
const router = express.Router();

//adding libraries
let kresge = new Library({
    name: "kresge",
    open : 900,
    close : 2400,
    lat: 37.87388090865484, 
    long : -122.25832257833491,
    short_description : "The perfect library to last minute grind that cs project",
    long_description : "The Kresge Engineering Library is a meeting and study hub in the Bechtel Engineering Center. Our extensive collections and services support the research and teaching programs of the College of Engineering and beyond. ",
    image1_link : "https://www.lib.berkeley.edu/sites/default/files/styles/library_hours_image/public/2022-03/hours-engineering-.jpg.webp?itok=kIqyqIKE",
    image2_link : "https://lh5.googleusercontent.com/p/AF1QipON-jkYMcZ-fR1qI2x1LqGBhM1fHAVRBhXui5Fu=w408-h306-k-no"

})
kresge.save()
router.get("/", async (req, res) => {
    const {name} = req.body
    try{
        let library = await Library.findOne({name})
        if (!library) {
            return res.status(400).json({msg: "Library not Exist"});
        } else {
            return res.
        }
    } catch(e){
        console.log(e)
        res.status(500).send("Error in Fetching");
    }
})
module.exports = router
