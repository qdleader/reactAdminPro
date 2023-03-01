
const mongoose = require("mongoose")

mongoose.connect('mongodb://localhost:27017').catch(err => {
  console.log("err", err)
});
const Schema = mongoose.Schema

const UserType = {
  username: String,
  password: String,
  gender: Number,
  introduction: String,
  avatar: String,
  role: Number
}

const UserModel = mongoose.model("user", new Schema(UserType))
module.exports = UserModel