import express from "express"
import { getAllQuizzes } from "../controllers/quiz.controller.js"
import { createQuiz } from "../controllers/quiz.controller.js";
import { getQuizById } from "../controllers/quiz.controller.js";
import { updateQuiz } from "../controllers/quiz.controller.js";
import { deleteQuiz } from "../controllers/quiz.controller.js";


const router = express.Router();

router.post('/createQuiz', createQuiz);

router.get('/', getAllQuizzes); 

router.get('/:quizId', getQuizById);

router.put('/:quizId', updateQuiz);

router.delete('/:quizId', deleteQuiz);


export default router;