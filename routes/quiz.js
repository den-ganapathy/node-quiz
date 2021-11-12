import { createCategory } from "../controllers/createCategory.js";
import { createQuestion } from "../controllers/createQuestion.js";
import express from "express";
const router = express.Router();

router.post("/create-category", createCategory);
router.post("/create-question", createQuestion);

export default router;
