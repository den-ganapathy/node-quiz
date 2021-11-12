import Question from "../models/Question.js";
import Category from "../models/Category.js";

export const createQuestion = async (req, res) => {
  const {
    question,
    category,
    correctAnswer,
    option1,
    option2,
    option3,
    option4,
  } = req.body;
  try {
    const existingCategory = await Category.find({ category });
    if (!existingCategory.length)
      res.status(400).json({ message: "Add category before adding question" });

    const result = await Question.create({
      question,
      category,
      correctAnswer,
      option1,
      option2,
      option3,
      option4,
    });
    res.status(200).json({ result });
  } catch (error) {
    res.status(500).json({ message: "Something Went Wrong" });
  }
};
