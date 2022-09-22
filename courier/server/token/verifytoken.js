const proving = require('../token/prving')
module.exports = (ctx) => {
  let token = ctx.request.header.authorization;
  if (token) {
    //  获取到token
    let res = proving(token);
    if (res && res.exp <= new Date() / 1000) {
      ctx.body = {
        message: "token过期",
        code: '-1',
      };
    } else {
      // ctx.body = {
      //   message: "解析成功",
      //   code: 1,
      // };
    }
  } else {
    // 没有token
    ctx.response.body = {
      msg: "没有token",
      code: '-1',
    };
  }
};
