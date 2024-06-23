import { Question } from "../models/question.model.js";

// Controller function to get all unique backgroundAnimations
export const getAllUniqueBackgroundAnimations = async (req, res) => {
  try {
    const questions = await Question.find({}, 'backgroundAnimations');
    const animationsMap = {};
    
    questions.forEach(question => {
      question.backgroundAnimations.forEach((url, filename) => {
        if (!animationsMap[filename]) {
          animationsMap[filename] = url;
        }
      });
    });

    res.status(200).json(animationsMap);
  } catch (error) {
    console.error('Error fetching unique background animations:', error);
    res.status(500).json({ error: 'Failed to fetch unique background animations' });
  }
};