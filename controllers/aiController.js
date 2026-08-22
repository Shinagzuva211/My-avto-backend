const { askAI } = require("../ai/aiService");

console.log("AI CONTROLLER LOADED");
console.log("askAI:", askAI);

async function askAIController(req, res) {
    try {
        const { prompt } = req.body;

        const response = await askAI(prompt);

        res.status(200).json({
            response
        });
    } catch (err) {
        res.status(500).json({
            message: err.message
        });
    }
}

module.exports = { askAIController };