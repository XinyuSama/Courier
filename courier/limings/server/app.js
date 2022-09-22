const Koa = require("koa");
const path = require("path");
const bodyParser = require("koa-bodyparser");
const static = require("koa-static");
const cors = require("koa2-cors"); //跨域处理
const error = require("koa-json-error");
// const ratelimit = require("koa-ratelimit");
// const Redis = require("ioredis");
const koajwt = require("koa-jwt");
require("./token/prving");
const app = new Koa();

app.use(bodyParser());
app.use(cors());

app.use(static(path.join(__dirname, "/static")));
app.use(
  koajwt({
    secret: "123456",
  }).unless({
    path: [
      /^\/user\/regist/,
      /^\/user\/login/,
      /^\/static/,
      /^\/SentData\/CustomerTakeOrder/,
      /^\/getData\/Lookprice/,
    ],
  })
);
// const db = new Map();
// app.use(
//   ratelimit({
//     driver: "memory",
//     db: db,
//     duration: 60000,
//     errorMessage: "请求太快，待会再试！！！",
//     id: (ctx) => ctx.ip,
//     headers: {
//       remaining: "Rate-Limit-Remaining",
//       reset: "Rate-Limit-Reset",
//       total: "Rate-Limit-Total",
//     },
//     max: 5,
//     disableHeader: false,
//     whitelist: (ctx) => {
//       // some logic that returns a boolean
//     },
//     blacklist: (ctx) => {
//       // some logic that returns a boolean
//     },
//   })
// );

app.use(
  error({
    postFormat: (e, { stack, ...rest }) =>
      process.env.NODE_ENV === "production" ? rest : { stack, ...rest },
  })
);

const index = require("./routers/index");
app.use(index.routes(), index.allowedMethods());
app.listen(8085);
console.log("服务开启");
