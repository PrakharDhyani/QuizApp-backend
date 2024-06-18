import express from "express";
import {addQuestionToQuiz} from "../controllers/question.controller.js"
import { getAllQuestionsForQuiz } from "../controllers/question.controller.js";
import { updateQuestion } from "../controllers/question.controller.js";
import { deleteQuestion } from "../controllers/question.controller.js";
import upload from "../utils/multerConfig.js";

export const router = express.Router();

// POST /api/quizzes/:quizId/questions - Add a new question to a quiz
router.post('/:quizId/questions', addQuestionToQuiz);

// GET /api/quizzes/:quizId/questions - Retrieve all questions for a specific quiz
router.get('/:quizId/', getAllQuestionsForQuiz);

// PUT /api/quizzes/:quizId/questions/:questionId - Update a specific question in a quiz
router.put('/:quizId/:questionId', updateQuestion);

// DELETE /api/quizzes/:quizId/questions/:questionId - Delete a specific question from a quiz
router.delete('/:quizId/:questionId', deleteQuestion);


