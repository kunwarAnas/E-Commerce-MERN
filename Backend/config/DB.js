import mongoose from "mongoose";
import dotenv from "dotenv";
dotenv.config({ path: "../.env" });
const db_link = process.env.MONGO_URL;
// console.log(db_link);
const connectDB = async () => {
  await mongoose
    .connect(db_link, {
      useUnifiedTopology: true,
      useNewUrlParser: true,
      //   useCreateIndex: true,
    })
    .then(() => {
      console.log("DB connected");
    })
    .catch((err) => {
      console.log(err.message);
    });
};

export default connectDB;
