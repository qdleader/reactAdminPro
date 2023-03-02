
const mongoose = require("mongoose")

// mongoose.connect('mongodb://localhost:27017').catch(err => {
//   console.log("err", err)
// });

mongoose.connect("mongodb+srv://hellomryk:yang1314@cluster0.qiraxtc.mongodb.net/?retryWrites=true&w=majority", { useNewUrlParser: true })

  .then(() => {
    console.log(1111, 'mongoose 连接成功！')
  })
  .catch(err => {
    console.log(2222, err)
  })
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