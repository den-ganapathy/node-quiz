import mongoose from "mongoose";
const Schema = mongoose.Schema;

const questionSchema = new Schema({
  question: { type: String, required: true },
  category: { type: String, required: true },
  correctAnswer: { type: String, required: true },
  option1: { type: String, required: true },
  option2: { type: String, required: true },
  option3: { type: String },
  option4: { type: String },
});
const Question = mongoose.model("question", questionSchema);

export default Question;
