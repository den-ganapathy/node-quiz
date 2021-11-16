import { createCategory } from "../controllers/createCategory.js";
import { createQuestion } from "../controllers/createQuestion.js";
import { getQuizDetails } from "../controllers/getQuizDetails.js";
import { getQuestion } from "./../controllers/getQuestions.js";
import express from "express";
const router = express.Router();

router.post("/create-category", createCategory);
router.post("/create-question", createQuestion);
router.get("/get-details", getQuizDetails);
router.get("/get-questions", getQuestion);

export default router;
