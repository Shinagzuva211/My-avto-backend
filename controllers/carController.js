const Car = require("../models/Car")

async function getAllCars(req, res) {
    try{
        const cars = await Car.find()

        res.status(200).json(cars)
    } catch (err) {
        res.status(500).json({
            message: err.message
        });
    }
}

async function getCarById(req, res) {

    try{
        const car = await Car.findById(req.params.id);

        if (!car) {
            return res.status(404).json({
                message: "Mashina topilmadi"
            })
        }

        res.status(200).json(car);
    } catch (err) {

        res.status(500).json({
            message: err.message
        })

    }

}

async function createCar(req, res) {
    try {

        const newCar = await Car.create(req.body);

        res.status(201).json({
            message: "Mashina qo'shildi",
            car: newCar
        });

    } catch (error) {

        res.status(500).json({
            message: error.message
        });

    }
}

async function deleteCar(req, res) {
    try {

        const car = await Car.findByIdAndDelete(req.params.id);

        if (!car) {
            return res.status(404).json({
                message: "Mashina topilmadi"
            });
        }

        res.status(200).json({
            message: "Mashina o'chirildi",
            car
        });

    } catch (error) {

        res.status(500).json({
            message: error.message
        });

    }
}

async function updateCar(req, res) {
    try {
        const car = await Car.findByIdAndUpdate(
            req.params.id,
            req.body,
            { new: true, runValidators: true }
        );

        if (!car) {
            return res.status(404).json({
                message: "Mashina topilmadi"
            });
        }

        res.status(200).json({
            message: "Mashina o'zgartirildi",
            car
        });

    } catch (error) {
        res.status(500).json({
            message: error.message
        });
    }
}

async function partialChange(req, res) {
    try {
        const car = await Car.findByIdAndUpdate(
            req.params.id,
            req.body,
            { new: true, runValidators: true }
        );

        if (!car) {
            return res.status(404).json({
                message: "Mashina topilmadi"
            });
        }

        res.status(200).json({
            message: `Mashina qisman o'zgartirildi`,
            car
        });

    } catch (error) {
        res.status(500).json({
            message: error.message
        });
    }
}

module.exports = {
    getAllCars,
    getCarById,
    createCar,
    deleteCar,
    updateCar,
    partialChange
}