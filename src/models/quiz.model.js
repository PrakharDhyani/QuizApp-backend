import mongoose from "mongoose"

const quizSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true
  },
  // photos: {
  //   type: [String],
  //   required: true
  // },
  // backgroundColor: {
  //   type: String,
  //   required: true
  // }
  thumbnail : {
    type : String,
    required : true
  },
  numberOfQuestions: {
    type: Number,
    required: true
  }
});

export const Quiz = mongoose.model('Quiz', quizSchema);

