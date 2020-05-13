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

module.exports = router;