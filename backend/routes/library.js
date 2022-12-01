const Library = require("../models/Library")
const express = require("express");
const router = express.Router();
const fetch = require("node-fetch");

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
const createLibrary = async () => {
let kresge = await Library.findOne({name: "kresge"});
if (!kresge) {
    kresge = new Library({
        name: "kresge",
        full_name: "Kresge Engineering Library",
        open_time : 9,
        close_time : 24,
        latitude: 37.87388090865484, 
        longitude : -122.25832257833491,
        short_description : "The perfect library to last minute grind that cs project",
        long_description : "The Kresge Engineering Library is a meeting and study hub in the Bechtel Engineering Center. Our extensive collections and services support the research and teaching programs of the College of Engineering and beyond. ",
        image1_link : "https://www.lib.berkeley.edu/sites/default/files/styles/library_hours_image/public/2022-03/hours-engineering-.jpg.webp?itok=kIqyqIKE",
        image2_link : "https://lh5.googleusercontent.com/p/AF1QipON-jkYMcZ-fR1qI2x1LqGBhM1fHAVRBhXui5Fu=w408-h306-k-no",
        base_noise_level: 70,
        venue_id: "ven_496a6c6172504976315a4c52415968384e7969734234464a496843"
    })
    kresge.save()
}
// adding more libraries
let moffit = await Library.findOne({name: "moffit"});
if (!moffit) {
    moffit = new Library({
        name: "moffit",
        full_name: "James K. Moffitt Undergraduate Library",
        open_time: 8,
        close_time:6,
        latitude:37.872672419959436,
        longitude:-122.26056838146692,
        short_description:"Moffit has the best scene on campus",
        long_description:"Moffitt Library, located next to Memorial Glade, is one of the busiest libraries on campus. The library includes the Copy Center, Free Speech Movement Café, and convenient access to the collections in the Main (Gardner) Stacks. Reserved for UC Berkeley students and faculty, Moffitt is food- and drink-friendly, serves students of all majors, and is open the longest hours.",
        image1_link:"https://www.lib.berkeley.edu/sites/default/files/styles/library_hours_image/public/2022-03/hours-moffitt-.jpg.webp?itok=rDFDP0mS",
        image2_link:"https://static2.gensler.com/uploads/hero_element/11231/thumb_desktop/thumbs/project_MoffittLibrary_1024x576_01_1509396775_1024x576.jpg",
        base_noise_level: 70,
        venue_id: "ven_55686b35347473535f383452415968385a4375734557784a496843",
    })
    moffit.save()
}
let mainstack = await Library.findOne({name: "mainstack"});
if (!mainstack) {
    mainstack = new Library({
        name:"mainstack",
        full_name: "Main (Gardner) Stacks",
        open_time:9,
        close_time:2,
        latitude:37.87235256259323,
        longitude:-122.25916374878575,
        short_description:"A basement style library.",
        long_description:"The David Pierpont Gardner Stacks is a large multi-level space housing 2.3 million volumes, of the approximately 4.5 million volumes that constitute Doe Library’s research collection. Access to the Main (Gardner) Stacks is via Moffitt Library or Doe Library. Open tables, study carrels, and group study rooms are arranged throughout the floors and serve as a primary study area for UC Berkeley students and faculty.",
        image1_link:"https://i.pinimg.com/originals/69/06/37/6906377a15dd28c53b3f5c7b75cf952e.jpg",
        image2_link:"https://live.staticflickr.com/7582/28551141222_5a4227da65_b.jpg",
        base_noise_level: 50,
        venue_id: "ven_385048586949466a2d447552415968393556786f7035514a496843",
    })
    mainstack.save()
}

let business = await Library.findOne({name: "business"});
if (!business) {
    business = new Library({
        name:"business",
        full_name: "The Thomas J. Long Business Library",
        open_time:7,
        close_time:22,
        latitude:37.8716258950288,
        longitude:-122.25298366227898,
        short_description:"I've never been there.",
        long_description:"The Thomas J. Long Business Library is your hub for business information at UC Berkeley. We'll help you find company, industry, and financial market data for your coursework, research, or job search.",
        image1_link:"https://www.lib.berkeley.edu/sites/default/files/styles/library_hours_image/public/2022-03/hours-BUSINESS-02.jpg.webp?itok=9F1P2hpI",
        image2_link:"https://streetviewpixels-pa.googleapis.com/v1/thumbnail?panoid=e9vAYNJIaQmaX9iUA-1myQ&cb_client=search.gws-prod.gps&w=408&h=240&yaw=269.92892&pitch=0&thumbfov=100",
        base_noise_level : 70,
        venue_id: "ven_55645a645242433332476652415968387044734237596d4a496843"
    })
    business.save()
}
}

createLibrary();

router.get("/", async (req, res) => {
    const libname = req.query.libname
    console.log(libname)
    try{
        let library = await Library.findOne({name: libname})
        if (!library) {
            return res.status(404).json({msg: "Library not Exist"});
        } else {
            return res.send(JSON.stringify(library))
        }
    } catch(e){
        console.log(e)
        res.status(500).send("Error in Fetching");
    }
})

router.get("/prefer", async (req, res) => {
    const isNear= req.query.isNear
    const isOpen= req.query.isOpen
    const isQuiet = req.query.isQuiet
    const isBusy = req.query.isBusy
    let latitude_user = null
    let longitude_user = null
    if (isNear == 1){
        latitude_user = req.query.latitude
        longitude_user = req.query.longitude
    }
    const CalculateScore = async (library) => {
        let distanceScore = 0
        if (isNear == 1) distanceScore = Math.sqrt(Math.pow((latitude_user - library.latitude), 2) + Math.pow((longitude_user - library.longitude),2))
        let quietScore = library.base_noise_level - 50
        let now = new Date().getHours()
        if (now < library.open_time && now > library.close_time) { // Ex: open = 8, close 6,  now = 7 => now = 0
            now = 0  // Is close                                   // Ex: open = 8, close 22, now = 23 => now = 0
        } else {
            now = 1 // Is open 
        }
        if (now != 1 && isOpen == 1) {
            return Infinity
        }
        setTimeout(() => {
        }, 150); // Manually setting time out
        let busyScore = await fetch(`http://localhost:3000/busyness?libname=${library.name}`)
        .then(res => res.json())
        .then(data => data.analysis.venue_live_busyness)
        // I need to get live business data
        return isNear * distanceScore + isQuiet * quietScore + isBusy * busyScore
    }
    try{
        let libs = await Library.find({})
        libs.sort((x, y) => CalculateScore(x) - CalculateScore(y))
        res.send(JSON.stringify(libs))
    } catch(e){
        console.log(e)
        res.status(500).send("Error in fetching prefered library");
    }
})


module.exports = router
