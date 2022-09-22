const jwt = require('jsonwebtoken');
const serect = '123456';  //密钥，不能丢
module.exports = (accoutinfo) => { //创建token并导出
  const token = jwt.sign({
    account: accoutinfo.account,
    password: accoutinfo.password
  }, serect, {expiresIn: '1h'});
  return token;
};
