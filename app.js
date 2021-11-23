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

const uri =
  "mongodb+srv://den:den123@cluster0.rn771.mongodb.net/quiz?retryWrites=true&w=majority";
mongoose
  .connect(uri, { useUnifiedTopology: true, useNewUrlParser: true })
  .then(() =>
    app.listen(process.env.PORT || 8080, () => {
      console.log("listening for request");
    })
  )
  .catch((err) => console.log(err));
