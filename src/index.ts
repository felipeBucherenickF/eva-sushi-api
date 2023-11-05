import express from "express";
import dotenv from "dotenv";

dotenv.config();

const port = process.env.PORT;

const app = express();

app.use(express.json());

app.get("/", (_, res) => {
  console.log("Eva Sushi API");
  res.send("Eva Sushi API");
});

app.listen(port, () => {
  console.log(`Server running on port: ${port}`);
});
