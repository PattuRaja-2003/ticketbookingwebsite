const mongoose = require("mongoose");
const userModel = require("../model/userModel");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const dotenv = require("dotenv");
dotenv.config();
const transporter = require("../utils/email");
const userController = new Object();
userController.createUser = async (req) => {
  let body = req?.body;
  let password = body.password;
  let saltround = 10;
  let hashPasword = await bcrypt.hash(password, saltround);
  body.password = hashPasword;
  const isEqual = await userModel.findOne({ email: body.email });
  if (isEqual) {
    return { code: 400, status: false, massage: "This email is already Exist" };
  }
  let result = await userModel.create(body);
  try {
    if (result) {
      let key = process.env.TOKEN_KEY;
      let jwtObject = new Object();
      jwtObject.email = result.email;
      jwtObject._id = result._id;
      let token = await jwt.sign(jwtObject, key);
      const message = {
        from: "patturaja501@gmail.com",
        to: result.email,
        subject: "Hello World",
        text: "TicketBooking Website Account created Successfully",
      };
      transporter.sendMail(message, (err) => {
        if (err) {
          console.log("Error sending email:", err);
        }
      });
      return {
        code: 201,
        status: true,
        massage: "User Created",
        data: { result, token },
      };
    }
    return { code: 400, status: false, massage: "Faild", data: {} };
  } catch (error) {
    console.log(error);
    return { code: 500, status: false, massage: error };
  }
};

userController.login = async (req) => {
  let body = req?.body;
  let user = await userModel.findOne({ email: body.email });
  let isEqual = await bcrypt.compare(body.password, user.password);
  if (!isEqual) {
    return {
      code: 400,
      status: false,
      massage: "Password incorrected",
      data: {},
    };
  }
  try {
    const jwtObject = new Object();
    jwtObject.email = user.email;
    jwtObject._id = user.id;
    const key = process.env.TOKEN_KEY;
    const token = await jwt.sign(jwtObject, key);
    return {
      code: 200,
      status: true,
      massage: "login sucessfully",
      data: { user, token },
    };
  } catch (error) {
    return { code: 500, status: false, massage: error };
  }
};

module.exports = userController;
