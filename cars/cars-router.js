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

router.get("/:id",(req,res)=>{
    db.select("*")
        .from("cars")
        .where({id: req.params.id})
        .then(entry => {
            if(entry.length > 0){
                res.status(200).json({data:entry})
            } else {
                res.status(400).json({message:"Could not find entry with that ID"})
            }
        })
})


router.post("/",carValidater,(req,res)=>{
    db("cars")
        .returning("id","Make","Model")
        .insert(req.body)
        .then(car => {
            res.status(201).json(
                {message:`Created a new car at entry id: ${car}`}
                )
        })
        .catch(()=>{
            res.status(500).json({error:"Database error while creating new car entry"})
        })
})

router.delete("/:id",(req,res)=>{
    db("cars")
    .where({id:req.params.id})
    .del()
    .then((del)=>{
        res.status(200).json({message: "Car entry deleted successfully"})
    }).catch(()=>{
        res.status(500).json({error: "There was a database error deleting that car"})
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