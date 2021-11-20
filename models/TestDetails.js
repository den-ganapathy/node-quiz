import mongoose from "mongoose";
const Schema = mongoose.Schema;

const testSchema = new Schema({
  totalQuestions: { type: Number, required: true },
  totalCorrectCount: { type: Number, required: true },
  name: { type: String, required: true },
});
const Test = mongoose.model("test", testSchema);

export default Test;
