import jwt from "jsonwebtoken";
import userModel from "../Model/userModel.js";

const productedRoute = async (req, res, next) => {
  let token = req.headers.authorization.split(" ")[1];
  if (token && req.headers.authorization.startsWith("Bearer")) {
    try {
      const decoded = jwt.verify(token,process.env.SECRET);
      if (decoded) {
        console.log(decoded.id);
        req.user = await userModel.findById(decoded.id).select('-password');
        console.log(req.user);
        next();
      }
    } catch (err) {
      res.status(401);
      throw new Error("Invalid Token");
    }
  } else {
    res.status(401);
    throw new Error("No Token found/failed");
  }
};

export default productedRoute;
