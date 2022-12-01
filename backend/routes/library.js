const Library = require("../models/Library")
const express = require("express");
const router = express.Router();
const updateHourAndBusyness = require("../middleware/updateHourAndBusyness")

router.get("/", updateHourAndBusyness, async (req, res) => {
    const libname = req.query.libname
    console.log("Get library info from : " + libname)
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

router.get("/prefer", updateHourAndBusyness, async (req, res) => {
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

    const CalculateScore = async (library) => { // Score calculation 
        let distanceScore = 0
        let estimatedUserRequestedDistance = isNear /1000;
        let distance = Math.sqrt(Math.pow((latitude_user - library.latitude), 2) + Math.pow((longitude_user - library.longitude),2))
        if (distance>estimatedUserRequestedDistance){
                distanceScore = 10000;
        } else {
            distanceScore = distance*1000;
        }
        let currentBusy =0;
        if (library.busyness_info.analysis.venue_live_busyness_available) {
            currentBusy = library.busyness_info.analysis.venue_live_busyness
        } else if (library.busyness_info.analysis.venue_forecast_busyness_available) {
            currentBusy = library.busyness_info.analysis.venue_forecast_busyness
        }
        let quietScore = Math.abs(library.base_noise_level - isQuiet)
        let busyScore = Math.abs(isBusy - currentBusy)
        if (library.is_open != 1 && isOpen == 1) {
            return Infinity // lowest priority
        }
        
        return  distanceScore +  quietScore +  (busyScore || 0)
    }

    try{
        let libs = await Library.find({})
        let libKeys = libs.map(x => x.name);
        let libValues = await Promise.all(libs.map(async (x) => await CalculateScore(x)))
        var libmap = libKeys.map(function(e, i) {
            return [e, libValues[i]];
          });
        libmap.sort((x,y) => x[1]-y[1])
        console.log(libmap)
        let newlist = libmap.map((x) => x[0])
        console.log(newlist)
        res.send(JSON.stringify(newlist))
    } catch(e){
        console.log(e)
        res.status(500).send("Error in fetching prefered library");
    }   
})


module.exports = router
