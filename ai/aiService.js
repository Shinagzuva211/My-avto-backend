// DeepSeek integratsiyasi (OpenAI-mos API, fetch orqali)

const DEEPSEEK_URL = "https://api.deepseek.com/chat/completions";
const DEEPSEEK_MODEL = "deepseek-chat";

async function askAI(prompt) {
    const res = await fetch(DEEPSEEK_URL, {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${process.env.DEEPSEEK_API_KEY}`,
        },
        body: JSON.stringify({
            model: DEEPSEEK_MODEL,
            messages: [{ role: "user", content: prompt }],
        }),
    });

    if (!res.ok) {
        const errorText = await res.text();
        throw new Error(`DeepSeek xatosi (${res.status}): ${errorText}`);
    }

    const data = await res.json();
    return data.choices[0].message.content;
}

module.exports = { askAI };
