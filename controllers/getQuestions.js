import Question from "../models/Question.js";

export const getQuestion = async (req, res) => {
  const { category, limit } = req.query;
  try {
    const quizQuestions = await Question.find({ category: category }).limit(
      limit
    );
    if (!quizQuestions.length)
      return res.status(400).json({ message: "No Questiond found" });
    res.status(200).json({ quizQuestions });
  } catch (error) {
    res.status(500).json({ message: "Something went wrong" });
  }
};
