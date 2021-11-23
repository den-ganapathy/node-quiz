import express from "express";
import mongoose from "mongoose";
import bodyparser from "body-parser";
import cors from "cors";
import dotenv from "dotenv";
const app = express();
import quizRoutes from "./routes/quiz.js";
dotenv.config();

app.use(bodyparser.json());
app.use(cors());
app.use("/quiz", quizRoutes);

const uri = process.env.MONGO_URI;
mongoose
  .connect(uri, { useUnifiedTopology: true, useNewUrlParser: true })
  .then(() =>
    app.listen(process.env.PORT || 8080, () => {
      console.log("listening for request");
    })
  )
  .catch((err) => console.log(err));
