import Category from "../models/Category.js";

export const getQuizDetails = async (req, res) => {
  try {
    const quizDetails = await Category.find();
    if (!quizDetails.length)
      return res.status(400).json({ message: "No Quiz Found" });
    console.log(quizDetails);
    res.status(200).json({ quizDetails });
  } catch (error) {
    res.status(500).json({ message: "Something went wrong" });
  }
};
