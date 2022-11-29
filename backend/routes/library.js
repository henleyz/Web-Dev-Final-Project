const Library = require("../models/Library")
const express = require("express");
const router = express.Router();

// let template = new Library({
//     name:,
//     open_time:,
//     close_time:,
//     latitude:,
//     longitude:,
//     short_description:,
//     long_description:,
//     image1_link:,
//     image2_link:,
// })

//adding libraries
let kresge = new Library({
    name: "kresge",
    open_time : 900,
    close_time : 2400,
    latitude: 37.87388090865484, 
    longitude : -122.25832257833491,
    short_description : "The perfect library to last minute grind that cs project",
    long_description : "The Kresge Engineering Library is a meeting and study hub in the Bechtel Engineering Center. Our extensive collections and services support the research and teaching programs of the College of Engineering and beyond. ",
    image1_link : "https://www.lib.berkeley.edu/sites/default/files/styles/library_hours_image/public/2022-03/hours-engineering-.jpg.webp?itok=kIqyqIKE",
    image2_link : "https://lh5.googleusercontent.com/p/AF1QipON-jkYMcZ-fR1qI2x1LqGBhM1fHAVRBhXui5Fu=w408-h306-k-no"

})
kresge.save()
// adding more libraries
let moffit = new Library({
        name: "moffit",
        open_time: 800,
        close_time:600,
        latitude:37.872672419959436,
        longitude:-122.26056838146692,
        short_description:"Moffit has the best scene on campus",
        long_description:"Moffitt Library, located next to Memorial Glade, is one of the busiest libraries on campus. The library includes the Copy Center, Free Speech Movement Café, and convenient access to the collections in the Main (Gardner) Stacks. Reserved for UC Berkeley students and faculty, Moffitt is food- and drink-friendly, serves students of all majors, and is open the longest hours.",
        image1_link:"https://www.lib.berkeley.edu/sites/default/files/styles/library_hours_image/public/2022-03/hours-moffitt-.jpg.webp?itok=rDFDP0mS",
        image2_link:"https://static2.gensler.com/uploads/hero_element/11231/thumb_desktop/thumbs/project_MoffittLibrary_1024x576_01_1509396775_1024x576.jpg"
    })
moffit.save()

let mainstack = new Library({
    name:"mainstack",
    open_time:900,
    close_time:200,
    latitude:37.87235256259323,
    longitude:-122.25916374878575,
    short_description:"A basement style library.",
    long_description:"The David Pierpont Gardner Stacks is a large multi-level space housing 2.3 million volumes, of the approximately 4.5 million volumes that constitute Doe Library’s research collection. Access to the Main (Gardner) Stacks is via Moffitt Library or Doe Library. Open tables, study carrels, and group study rooms are arranged throughout the floors and serve as a primary study area for UC Berkeley students and faculty.",
    image1_link:"https://www.lib.berkeley.edu/sites/default/files/styles/library_hours_image/public/2022-03/hours-Doe-05041_2.jpg.webp?itok=A4wveHVs",
    image2_link:"https://live.staticflickr.com/7582/28551141222_5a4227da65_b.jpg"
})
mainstack.save()

let business = new Library({
    name:"business",
    open_time:700,
    close_time:2200,
    latitude:37.8716258950288,
    longitude:-122.25298366227898,
    short_description:"I've never been there.",
    long_description:"The Thomas J. Long Business Library is your hub for business information at UC Berkeley. We'll help you find company, industry, and financial market data for your coursework, research, or job search.",
    image1_link:"https://www.lib.berkeley.edu/sites/default/files/styles/library_hours_image/public/2022-03/hours-BUSINESS-02.jpg.webp?itok=9F1P2hpI",
    image2_link:"https://streetviewpixels-pa.googleapis.com/v1/thumbnail?panoid=e9vAYNJIaQmaX9iUA-1myQ&cb_client=search.gws-prod.gps&w=408&h=240&yaw=269.92892&pitch=0&thumbfov=100"
})
business.save()

router.get("/", async (req, res) => {
    const {name} = req.body
    try{
        let library = await Library.findOne({name}).lean()
        if (!library) {
            return res.status(400).json({msg: "Library not Exist"});
        } else {
            return res.send(JSON.stringify(library))
        }
    } catch(e){
        console.log(e)
        res.status(500).send("Error in Fetching");
    }
})
module.exports = router
