const express = require("express");

const router = express.Router();

const { 
    getAllCars,
    getCarById, 
    createCar,
    deleteCar,
    updateCar,
    partialChange
 } = require("../controllers/carController")

const validateCar = require("../middlewares/validateCar") 

router.get("/", getAllCars);

router.get("/:id", getCarById)

router.post("/", validateCar, createCar)

router.delete("/:id", deleteCar)

router.put("/:id", validateCar, updateCar)

router.patch("/:id", validateCar, partialChange)

module.exports = router;