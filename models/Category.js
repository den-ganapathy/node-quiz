import mongoose from "mongoose";
const Schema = mongoose.Schema;

const categorySchema = new Schema({
  category: { type: String, required: true },
  time: { type: Number, required: true },
  noOfQuestion: { type: Number, required: true },
  level: { type: String, required: true },
});
const Category = mongoose.model("category", categorySchema);

export default Category;
