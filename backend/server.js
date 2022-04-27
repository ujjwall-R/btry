import express from "express";
// import "./config/db.js";
import formRouter from "./routes/forms.js";
import connectDB from "./config/db.js";

connectDB();

const app = express();

const PORT = process.env.PORT || 5000;

app.use(express.json());

import cors from "cors";

app.use(cors());

app.use(formRouter);

app.listen(PORT, () => {
  console.log("Server is on port", PORT);
});
