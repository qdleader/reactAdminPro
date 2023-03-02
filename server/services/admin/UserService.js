const UserModel = require("../../models/UserModel")

const UserService = {
  login: async ({ username, password }) => {
    console.log("username, password ", username, password)
    return UserModel.find({
      username, password
    })
  },
  register: async ({ username, password }) => {
    console.log("username, password ", username, password)
    let registerRes = await UserModel.create({
      username: username,
      password: password,
      time: new Date()
    }).then(() => {
      console.log("插入成功");
      return true
    }).catch((err) => {
      console.log(err);
      return false
    })
    console.log("registerRes", registerRes);
    return registerRes

  }
}
module.exports = UserService