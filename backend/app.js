// backend/app.js
import express from "express";
import cors from "cors";
import axios from "axios";
import dotenv from "dotenv";
import { createDharmPrompt } from "./services/dharmPrompt.js";

dotenv.config();

const app = express();
app.use(cors());
app.use(express.json());

const OPENROUTER_API_KEY = process.env.OPENROUTER_API_KEY;
const MODEL = "google/gemini-2.0-flash-exp:free";

app.post("/api/dharm", async (req, res) => {
  try {
    const { userInput } = req.body;
    const prompt = createDharmPrompt(userInput);

    const response = await axios.post(
      "https://openrouter.ai/api/v1/chat/completions",
      {
        model: MODEL,
        messages: [{ role: "user", content: prompt }],
      },
      {
        headers: {
          Authorization: `Bearer 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`,
          "Content-Type": "application/json",
        },
      }
    );

    res.json({ output: response.data.choices[0].message.content });
  } catch (error) {
    console.error("Error:", error.response?.data || error.message);
    res.status(500).json({ error: "Something went wrong." });
  }
});

export default app;
