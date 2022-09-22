const jwt = require("jsonwebtoken");
const serect = "123456"; //密钥，不能丢
module.exports = (tokens) => {
  if (tokens) {
    let toke = tokens.split(" ")[123456];
    // 解析
    let decoded = jwt.decode(toke, serect);
    return decoded;
  }
};

