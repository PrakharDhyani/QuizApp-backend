import { app } from "./app.js";
import { PORT } from "./constant.js";
import connectDB from "./db/index.js";


connectDB()
.then(()=>{
    app.on("error",(error)=>{
        console.log("application unable to connect with db : ", error);
        throw error
    })
    app.listen(PORT,()=>{
        console.log(`App is listening at port : ${PORT}`);
    })
})
.catch((error)=>{
    console.log("Mongodb Connection Error : ", error);
})
