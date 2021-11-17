import Category from "../models/Category.js";

export const getQuizDetails = async (req, res) => {
  const { search } = req.query;
  try {
    const quizDetails = await Category.find({
      category: new RegExp(search, "i"),
    });
    console.log(quizDetails);
    if (!quizDetails.length)
      return res.status(400).json({ message: "No Quiz Found" });
    console.log(quizDetails);
    res.status(200).json({ quizDetails });
  } catch (error) {
    res.status(500).json({ message: "Something went wrong" });
  }
};
