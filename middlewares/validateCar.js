
const validateCar = (req, res, next) => {

    const { 
        brand, 
        model, 
        year, 
        price, 
        fuel, 
        transmission, 
        mileage, 
        color, 
        engine, 
        driveType, 
        image 
    } = req.body;

    const requiredFields = {
        brand: "Brand",
        model: "Model",
        year: "Year",
        price: "Price",
        fuel: "Fuel",
        transmission: "Transmission",
        mileage: "Mileage",
        color: "Color",
        engine: "Engine",
        driveType: "Drive type",
        image: "Image"
    };

    const missingFields = [];
    for (const [field, label] of Object.entries(requiredFields)) {
        if (!req.body[field]) {
            missingFields.push(label);
        }
    }

    if (missingFields.length > 0) {
        return res.status(400).json({
            message: `Majburiy maydonlar to'ldirilmagan: ${missingFields.join(", ")}`
        })
    }
    
    if (typeof year !== "number" || year <= 0) {
        return res.status(400).json({
            message: "Year musbat son bo'lishi kerak."
        })
    }

    if (typeof price !== "number" || price <= 0) {
        return res.status(400).json({
            message: "Price 0 dan katta bo'lishi kerak"
        })
    }

    if (typeof mileage !== "number" || mileage < 0) {
        return res.status(400).json({
            message: "Mileage manfiy bo'lmasligi kerak"
        })
    }

    next()
}

module.exports = validateCar