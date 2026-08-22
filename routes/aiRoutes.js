const express = require("express")

const { askAIController } = require("../controllers/aiController")

const router = express.Router()

router.post("/", askAIController)

module.exports = router;