import Category from "../models/Category.js";

export const createCategory = async (req, res) => {
  const { category, time, noOfQuestion, level } = req.body;
  try {
    const existingCategory = await Category.find({ category });
    if (existingCategory.length)
      return res.status(400).json({ message: "category already exist" });
    const result = await Category.create({
      category,
      time,
      noOfQuestion,
      level,
    });
    res.status(200).json({ result });
  } catch (error) {
    res.status(500).json({ message: "Something went wrong" });
  }
};
