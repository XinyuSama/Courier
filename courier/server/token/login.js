const mysql = require("mysql2/promise");
const dbs = require("../db/db");
const addtoken = require("./addtoken");
const connection = mysql.createConnection(dbs);

class userController {
  static async login(ctx) {
    try {
      let SentAccount = ctx.request.body.Account;
      let SentPassword = ctx.request.body.password;
      console.log(SentAccount, SentPassword);
      if (!SentPassword || !SentAccount) {
        return (ctx.response.body = {
          code: "-1",
          msg: "用户名或密码不能为空",
        });
      } else {
        let sql = `SELECT * FROM user WHERE Account='${SentAccount}';`;
        let connections = await connection;
        let res = await connections.query(sql);
        if (res[0].length == "0") {
          return (ctx.response.body = {
            code: "-1",
            msg: "没有该用户",
          });
        } else {
          if (res[0][0].password === SentPassword) {
            let sql = `SELECT permissions FROM user WHERE 'Account=${SentAccount}';`
            let connections = await connection;
            let ress = await connections.query(sql);
            console.log(ress[0])
            const token = addtoken(
                {
                  account:SentAccount,
                  password:SentPassword
                }
            );
            return (ctx.response.body = {
              code: "0",
              msg: "登录成功",
              token: token,
              permissionsCode:ress[0][0]
            });
          } else {
            return (ctx.response.body = {
              code: "-1",
              msg: "密码错误",
            });
          }
        }
      }
    }catch(err){
     console.log(err)

    }
    // const req = ctx.request.body;

  }
}

module.exports = userController;
