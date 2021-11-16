import Question from "../models/Question.js";

export const getQuestion = async (req, res) => {
  const { category } = req.query;
  console.log(category);
  try {
    const quizQuestions = await Question.find({ category: category });
    console.log(quizQuestions);
    if (!quizQuestions.length)
      return res.status(400).json({ message: "No Questiond found" });
    console.log(quizQuestions);
    res.status(200).json({ quizQuestions });
  } catch (error) {
    res.status(500).json({ message: "Something went wrong" });
  }
};
