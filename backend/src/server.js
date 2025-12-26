import express from "express";
import dotenv from "dotenv";

dotenv.config();

const app = express();

/* 🔥 HARD FIX FOR CORS (NO LIBRARY RELIANCE) */
app.use((req, res, next) => {
  res.header("Access-Control-Allow-Origin", "http://localhost:8082");
  res.header("Access-Control-Allow-Methods", "GET,POST,OPTIONS");
  res.header("Access-Control-Allow-Headers", "Content-Type");

  if (req.method === "OPTIONS") {
    return res.sendStatus(200);
  }

  next();
});

app.use(express.json());

app.post("/api/contact", (req, res) => {
  const { name, email, message } = req.body;

  console.log("📩 Message received:", name, email, message);

  res.status(200).json({ message: "Message sent successfully" });
});

app.get("/", (req, res) => {
  res.send("Backend running");
});

const PORT = 5000;
app.listen(PORT, () => {
  console.log(`✅ Backend running on http://localhost:${PORT}`);
});
