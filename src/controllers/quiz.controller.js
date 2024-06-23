import {Quiz} from "../models/quiz.model.js"
import {Question} from "../models/question.model.js"


export const createQuiz = async (req, res) => {
  console.log("Received data:", req.body); // Log received data

  const { title, thumbnail, numQuestions, questions } = req.body;

  if (!title || !thumbnail || !numQuestions || !questions) {
    return res.status(400).json({ message: "Missing required fields" });
  }
  try {
    const quiz = new Quiz({ title, thumbnail, numberOfQuestions: numQuestions });
    await quiz.save();

    const questionPromises = questions.map(question => {
      const backgroundAnimations = new Map(Object.entries(question.backgroundAnimations));

      return new Question({
        quizId: quiz._id,
        questionText: question.questionText,
        options: question.options,
        correctAnswer: question.correctAnswer,
        questionPhotoUrl: question.questionPhotoUrl,
        answerPhotoUrl: question.answerPhotoUrl,
        backgroundAnimations,
      }).save();
    });

    await Promise.all(questionPromises);

    res.status(201).json({ quiz });
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};


export const getAllQuizzes = async (req, res) => {
  try {
    const quizzes = await Quiz.find();
    res.status(200).json({ quizzes });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

export const getQuizById = async (req, res) => {
  try {
    const quiz = await Quiz.findById(req.params.quizId).populate('questions');
    if (!quiz) {
      return res.status(404).json({ message: 'Quiz not found' });
    }
    res.status(200).json({ quiz });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

export const updateQuiz = async (req, res) => {
  try {
    const quiz = await Quiz.findByIdAndUpdate(req.params.quizId, req.body, { new: true });
    if (!quiz) {
      return res.status(404).json({ message: 'Quiz not found' });
    }
    res.status(200).json({ quiz });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

export const deleteQuiz = async (req, res) => {
  try {
    // Find and delete all questions associated with the quiz
    await Question.deleteMany({ quizId: req.params.quizId });

    // Find and delete the quiz
    const quiz = await Quiz.findByIdAndDelete(req.params.quizId);
    if (!quiz) {
      return res.status(404).json({ message: 'Quiz not found' });
    }

    res.status(200).json({ message: 'Quiz and related questions deleted successfully' });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};
