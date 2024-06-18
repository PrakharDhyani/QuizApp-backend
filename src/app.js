import express from "express"
import cors from "cors"
import cookieParser from "cookie-parser";
import { CORS_ORIGIN } from "./constant.js";
import quizRoutes  from "./routes/quiz.routes.js";
import { router as questionRoutes } from "./routes/question.routes.js";

const app = express();


app.use(cors({
    origin : CORS_ORIGIN,
     credentials : true
}))

app.use(express.json({limit : "16kb"}))
app.use(express.urlencoded({extended : true ,limit : "16kb"}))
app.use(express.static("public"))
app.use(cookieParser())
 
  
app.use('/quizzes', quizRoutes);
app.use('/questions', questionRoutes);


export {app} 
 
