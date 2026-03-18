const mongoose = require("mongoose");

const bookingSchema = mongoose.Schema({
  movieId: { type: mongoose.Types.ObjectId, ref: "movies" },
  userId: { type: mongoose.Types.ObjectId, ref: "user" },
  date: { type: String, require: true },
  time: { type: String, require: true },
  seats: { type: [String], require: true },
});
const bookingModel = mongoose.model("ticketBooking", bookingSchema);

module.exports = bookingModel;
// movies id
// user id
// date 
// time
// seats