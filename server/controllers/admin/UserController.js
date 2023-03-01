var UserService = require("../../services/admin/UserService")
const UserController = {
  login: async (req, res) => {
    console.log(110, req)
    let result = await UserService.login(req.body)
    console.log(11, result)
    if (result.length === 0) {
      res.send({
        code: '-1',
      })
    } else {
      res.send({
        ActionType: 'ok',
      })
    }
  }
}

module.exports = UserController