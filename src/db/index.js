import mongoose from "mongoose";
import { DB_NAME } from "../constant.js";


const connectDB = async ()=>{
    try {
        const connectionInstance =  await mongoose.connect(`mongodb+srv://user:dbpassword@cluster0.glftizx.mongodb.net/${DB_NAME}`)
        console.log(`\n MongoDb Connected !! DB HOST : ${
            connectionInstance.connection.host
        }`);
    } catch (error) {
        console.log("MongoDb Connection Error : ", error);
        process.exit(1)
    }
}
export default connectDB