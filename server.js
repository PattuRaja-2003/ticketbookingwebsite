const express = require("express");
const mongoose = require("mongoose");
const dotenv = require("dotenv");
const userRouter = require("./router/userRouter");
const moviesRouter = require("./router/moviesRouter");
const bookingRouter = require("./router/bookingRouter");
const cors = require("cors");
const app = express();
dotenv.config();
app.use(express.json());
const url = process.env.DATABASE_URL;
mongoose.connect(url).then(() => {
  console.log("Data Base is connected");
});
corsOption = {
  origin: "https://ticketbookingwebsite-frontent.vercel.app",
};
app.use(cors(corsOption));
app.use("/user", userRouter);
app.use("/movies", moviesRouter);
app.use("/booking", bookingRouter);

app.listen(3001, () => {
  console.log("Server is Connected");
});
