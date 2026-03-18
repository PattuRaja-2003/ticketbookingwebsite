const jwt = require("jsonwebtoken");
const dotenv = require("dotenv");
dotenv.config();
const jwtObject = new Object();

jwtObject.verifyToken = async (req, res, next) => {
  try {
    let key = process.env.TOKEN_KEY;
    let token = req.headers?.authorization;
    let extractToken = token?.split(" ")[1];
    let user = await jwt.verify(extractToken, key);
    req.user = user;
    console.log(user);
    next();
  } catch (error) {
    console.log(error);
  }
};

module.exports = jwtObject;
