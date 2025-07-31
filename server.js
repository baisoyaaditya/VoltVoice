// server.js
import express from 'express';
import cors from 'cors';
import dotenv from 'dotenv';
import bodyParser from 'body-parser';
import cohere from 'cohere-ai';

dotenv.config();
const app = express();
const PORT = 3000;

app.use(cors());
app.use(bodyParser.json());
app.use(express.static('.')); // serve index.html and assets

cohere.init(process.env.COHERE_API_KEY);

app.post('/api/message', async (req, res) => {
  const userMessage = req.body.message;
  try {
    const response = await cohere.generate({
      model: 'command-r-plus',
      prompt: userMessage,
      max_tokens: 100,
      temperature: 0.5,
    });

    const reply = response.body.generations[0]?.text?.trim();
    res.json({ reply: reply || "I'm not sure how to respond." });
  } catch (err) {
    console.error("Cohere API error:", err);
    res.status(500).json({ reply: "Error contacting Cohere API." });
  }
});

app.listen(PORT, () => {
  console.log(`✅ Server listening on http://localhost:${PORT}`);
});
