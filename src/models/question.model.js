import  mongoose,{Schema}  from "mongoose";

const QuestionSchema = new Schema({
  quizId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'quiz',
    required: true
  },
  questionPhotoUrl: {
    type: String,
    required: true
  },
  answerPhotoUrl: {
    type: String,
    required: true
  },
  questionText: {
    type: String,
    required: true
  },
  options: {
    type: [String],
    required: true
  },
  correctAnswer: {
    type: String,
    required: true
  }, 
  backgroundAnimation: {
    type: String,
    required: true
  },
  // timer: {
  //   type: Number,
  //   required: true
  // },
});

export const Question = mongoose.model('Question', QuestionSchema);

