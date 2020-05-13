const express = require("express");

const db = require("./carsConfig");

const router = express.Router();

router.get('/', (req, res) => {
    db.select('*')
        .from('cars')
        .then(cars => {
            res.status(200).json({data: cars})
        }).catch(err => {
            res.status(500).json({message: "Error fetching cars", error: err})
        })

})


function carValidater(req,res,next){
    if(req.body.VIN && req.body.Make && req.body.Model && req.body.Mileage){
        next();
    } else {
        res.status(500).json({error:"Missing required fields, please include VIN, Make, Model and Mileage"})
    }
}
module.exports = router;