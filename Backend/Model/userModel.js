import mongoose from "mongoose";
import dotenv from 'dotenv';
dotenv.config();

// const db_link = process.env.MONGO_URL;

// mongoose.connect(db_link).then((db) => {
//         console.log("db connect");}).catch((err) => {
//         console.log(err);
// })

const userSchema = mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
    },
    email: {
      type: String,
      required: true,
      unique: true,
    },
    password: {
      type: String,
      required: true,
    },
    isAdmin: {
      type: Boolean,
      required: true,
      default: false,
    },
  },
  {
    timestamps: true,
  }
);

const userModel = mongoose.model("userModel", userSchema, "users");

export default userModel;

