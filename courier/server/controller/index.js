const mysql = require("mysql2/promise");
const dbs = require("../db/db");
const connection = mysql.createConnection(dbs);
const time = require("../time/time");
const verify = require("../token/verifytoken");
const caption = require("../utils/getCaption");
const getAllOrder = async (ctx) => {
  try {
    verify(ctx);
    let sql = "SELECT * FROM text1;";
    let connections = await connection;
    let res = await connections.query(sql);
    ctx.body = {
      data: res[0],
      code: "0",
      msg: "success",
    };
  } catch (e) {
    ctx.response.body = {
      msg: "请求失败",
      code: "-1",
      data: e,
    };
  }
};
const CustomerTakeOrder = async (ctx) => {
  try {
    verify(ctx);
    let connections = await connection;
    let selectcode = "SELECT vercode FROM text1;";
    let res2 = await connections.query(selectcode);
    let vercode = parseInt(res2[0][res2[0].length - 1].vercode) + 1 + "";
    let vercode2 = "";

    if (vercode.toString().length == 5) {
      vercode2 = "0" + vercode;
    } else {
      vercode2 = vercode;
    }
    // // 先查询上一个验证码
    let params = ctx.request.body;
    let dongs = caption(params.address, 0);
    console.log(time());
    let sql = `INSERT INTO text1(ExpressType,size,price,PickCode,address,isroom,CustomerPhone,vercode,WhetherFound,WhetherDeliver,WhetherFinish,OrderStartTime,DeliverWhetherChoose,PickWhetherChoose,dong) VALUES (
      '${params.ExpressType}',
      '${params.size}',
      '${params.price}',
      '${params.PickCode}',
      '${params.address}',
      '${params.isroom}',
      '${params.CustomerPhone}',
      '${vercode2}',
      'false',
      'false',
      'false',
      '${time()}',
      'false',
      'false',
      '${dongs}');`;
    let res = await connections.query(sql);
    let sentcode = "SELECT vercode FROM text1;";
    let res3 = await connections.query(sentcode);
    let CodeResponse = res3[0][res3[0].length - 1].vercode;
    ctx.response.body = {
      code: "0",
      vercode: CodeResponse,
      msg: "添加成功",
    };
  } catch (err) {
    console.log(err);
    ctx.response.body = {
      msg: "请求失败",
      code: "-1",
      data: err,
    };
  }
};
// const getNotAllocationPickOrder = async (ctx) => {
//   try {
//     verify(ctx);
//     let connections = await connection;
//     let sql = "SELECT * FROM text1 WHERE WhetherFound ='false';";
//     let res = await connections.query(sql);
//     if (res[0].length == 0) {
//       ctx.response.body = {
//         msg: "暂无取件员订单",
//         code: "-1",
//       };
//     } else {
//       ctx.response.body = {
//         data: res[0],
//         msg: "success",
//         code: "0",
//       };
//     }
//   } catch (e) {
//     ctx.response.body = {
//       msg: "请求失败",
//       code: "-1",
//     };
//   }
// };
// const getNotAllocationDeliverOrder = async (ctx) => {
//   try {
//     verify(ctx);
//     let connections = await connection;
//     let sql =
//       "SELECT * FROM text1 WHERE WhetherDeliver='false' and WhetherFound='true';";
//     let res = await connections.query(sql);
//     if (res[0].length == 0) {
//       ctx.response.body = {
//         msg: "暂无送货员订单",
//         code: "-1",
//       };
//     } else {
//       ctx.response.body = {
//         msg: "success",
//         code: "0",
//         data: res[0],
//       };
//     }
//   } catch (e) {
//     console.log(e);
//     ctx.response.body = {
//       msg: "请求失败",
//       code: "-1",
//     };
//   }
// };
// const AllocationPickPersonOrder = async (ctx) => {
//   // 在数据找到对应id 然后把那一行的person数据插入
//   try {
//     verify(ctx);
//     let connections = await connection;
//     let sql1 = `SELECT * FROM text1 WHERE OrderId='${ctx.request.body.OrderId}';`;
//     let res1 = await connections.query(sql1);
//     if (res1[0].length == 0) {
//       ctx.response.body = {
//         msg: "不存在该订单号",
//         code: "-1",
//       };
//     } else {
//       if (/^1[367589][0-9]{9}$/.test(ctx.request.body.PickPersonPhone)) {
//         let sql2 = `SELECT * FROM user WHERE Account=${ctx.request.body.PickPersonPhone}`;
//         let res2 = await connections.query(sql2);
//         if (res2[0].length == 0) {
//           ctx.response.body = {
//             msg: "该工作人员并未注册",
//             code: "-1",
//           };
//         } else {
//           let sql = `UPDATE text1 SET PickPersonPhone = ${ctx.request.body.PickPersonPhone}  WHERE OrderId = ${ctx.request.body.OrderId};`;
//           let res = await connections.query(sql);
//           ctx.response.body = {
//             msg: "分配成功",
//             code: "0",
//           };
//         }
//       } else {
//         ctx.response.body = {
//           msg: "请输入正确格式的手机号",
//           code: "-1",
//         };
//       }
//     }
//   } catch (e) {
//     console.log(e);
//     ctx.response.body = {
//       msg: "请求失败",
//       code: "-1",
//     };
//   }
// };
// const AllocationDeliverOrder = async (ctx) => {
//   // 在数据找到对应id 然后把那一行的person数据插入
//   try {
//     verify(ctx);
//     let connections = await connection;
//     let sql1 = `SELECT * FROM text1 WHERE OrderId='${ctx.request.body.OrderId}';`;
//     let res1 = await connections.query(sql1);
//     if (res1[0].length == 0) {
//       ctx.response.body = {
//         msg: "不存在该订单号",
//         code: "-1",
//       };
//     } else {
//       if (/^1[367589][0-9]{9}$/.test(ctx.request.body.DeliverPhone)) {
//         let sql2 = `SELECT * FROM user WHERE Account=${ctx.request.body.DeliverPhone}`;
//         let res2 = await connections.query(sql2);
//         if (res2[0].length == 0) {
//           ctx.response.body = {
//             msg: "该工作人员并未注册",
//             code: "-1",
//           };
//         } else {
//           let sql = `UPDATE text1 SET DeliverPhone = ${ctx.request.body.DeliverPhone} WHERE OrderId = ${ctx.request.body.OrderId};`;
//           let res = await connections.query(sql);
//           ctx.response.body = {
//             msg: "分配成功",
//             code: "0",
//             data: res[0],
//           };
//         }
//       } else {
//         ctx.response.body = {
//           msg: "请输入正确格式的手机号",
//           code: "-1",
//         };
//       }
//     }
//     // let connections = await connection;
//   } catch (e) {
//     console.log(e);
//     ctx.response.body = {
//       msg: "请求失败",
//       code: "-1",
//     };
//   }
// };
// const PickPersonOrder = async (ctx) => {
//   try {
//     verify(ctx);
//     let connections = await connection;
//     let PickPersonPhone = ctx.request.body.PickPersonPhone;
//     let sql = `SELECT * FROM text1 WHERE WhetherFound='false' and PickPersonPhone='${PickPersonPhone}';`;
//     let res = await connections.query(sql);
//     if (res[0].length == 0) {
//       ctx.response.body = {
//         msg: "无订单",
//         code: "-1",
//       };
//     } else {
//       ctx.response.body = {
//         msg: "success",
//         code: "0",
//         data: res[0],
//       };
//     }
//   } catch (e) {
//     ctx.response.body = {
//       msg: "请求失败",
//       code: "-1",
//     };
//   }
// };
// const DeliverOrder = async (ctx) => {
//   try {
//     verify(ctx);
//     let connections = await connection;
//     let DeliverPhone = ctx.request.body.DeliverPhone;
//     let sql = `SELECT * FROM text1 WHERE WhetherDeliver='false' and DeliverPhone='${DeliverPhone}';`;
//     let res = await connections.query(sql);
//     if (res[0].length == 0) {
//       ctx.response.body = {
//         msg: "无订单",
//         code: "-1",
//       };
//     } else {
//       ctx.response.body = {
//         msg: "success",
//         code: "0",
//         data: res[0],
//       };
//     }
//   } catch (e) {
//     console.log(e);
//     ctx.response.body = {
//       msg: "请求失败",
//       code: "-1",
//     };
//   }
// };
const WhetherFindCourier = async (ctx) => {
  try {
    verify(ctx);
    let connections = await connection;
    let sql = `UPDATE text1 SET WhetherFound = '${ctx.request.body.WhetherFound}' WHERE OrderId='${ctx.request.body.OrderId}'`;
    let res = await connections.query(sql);
    // console.log(res[0])
    ctx.response.body = {
      code: "0",
      // data: res[0],
      msg: "确认成功",
    };
  } catch (e) {
    ctx.response.body = {
      msg: "请求失败",
      code: "-1",
      data: e,
    };
  }
};
const WhetherTakeCourier = async (ctx) => {
  try {
    verify(ctx);
    let connections = await connection;
    let sql = `UPDATE text1 SET WhetherDeliver = '${ctx.request.body.WhetherDeliver}' WHERE OrderId='${ctx.request.body.OrderId}'`;
    let res = await connections.query(sql);
    ctx.response.body = {
      msg: "正在送货",
      code: "0",
    };
    console.log(res);
  } catch (e) {
    console.log(e);
    ctx.response.body = {
      msg: "请求失败",
      code: "-1",
      data: e,
    };
  }
};
const CustomerFinishOrder = async (ctx) => {
  try {
    verify(ctx);
    let connections = await connection;
    // console.log(time())
    // 逗号隔开
    let sql = `UPDATE text1 SET WhetherFinish = '${
      ctx.request.body.WhetherFinish
    }',OrderFinishTime='${time()}' WHERE OrderId='${ctx.request.body.OrderId}'`;
    let res = await connections.query(sql);
    ctx.response.body = {
      msg: "已确认收货",
      code: "0",
    };
  } catch (e) {
    console.log(e);
    ctx.response.body = {
      msg: "请求失败",
      code: "-1",
      data: e,
    };
  }
};
//
const CancelCustomerOrder = async (ctx) => {
  try {
    verify(ctx);
    let connections = await connection;
    let sql3 = `SELECT * FROM text1 WHERE CustomerPhone='${ctx.request.body.CustomerPhone}' AND OrderId='${ctx.request.body.OrderId}'`;
    let res3 = await connections.query(sql3);
    if (res3[0].length == 0) {
      ctx.response.body = {
        msg: "没有该订单",
        code: "-1",
      };
    } else {
      let sql = `DELETE FROM text1 WHERE CustomerPhone='${ctx.request.body.CustomerPhone}' and OrderId='${ctx.request.body.OrderId}'`;
      let res = await connections.query(sql);
      let sql2 = `SELECT * FROM text1 WHERE OrderId='${ctx.request.body.OrderId}'`;
      let res2 = await connections.query(sql2);
      if (res2[0].length == 0) {
        ctx.response.body = {
          msg: "取消成功",
          code: "0",
        };
      } else {
        ctx.response.body = {
          msg: "取消失败",
          code: "-1",
        };
      }
    }
  } catch (e) {
    console.log(e);
    ctx.response.body = {
      msg: "请求失败",
      code: "-1",
      data: e,
    };
  }
};
// const CancelAllocationPick = async (ctx) => {
//   try {
//     verify(ctx);
//     let connections = await connection;
//     sql4 = `SELECT * FROM text1 WHERE OrderId='${ctx.request.body.OrderId}' AND PickPersonPhone is NULL`;
//     let res4 = await connections.query(sql4);
//     console.log(res4[0]);
//     if (res4[0].length != 0) {
//       ctx.response.body = {
//         msg: "该订单已取消",
//         code: "-1",
//       };
//     } else {
//       let sql3 = `SELECT * FROM text1 WHERE PickPersonPhone='${ctx.request.body.PickPersonPhone}' AND OrderId='${ctx.request.body.OrderId}'`;
//       let res3 = await connections.query(sql3);
//       if (res3[0].length == 0) {
//         ctx.response.body = {
//           msg: "没有该订单",
//           code: "-1",
//         };
//       } else {
//         let sql = `UPDATE text1 SET PickPersonPhone='' WHERE OrderId=${ctx.request.body.OrderId}`;
//         let res = await connections.query(sql);
//         let sql2 = `SELECT * FROM text1 WHERE OrderId='${ctx.request.body.OrderId}' AND PickPersonPhone IS NULL`;
//         let res2 = await connections.query(sql2);
//         if (res2[0].length == 0) {
//           ctx.response.body = {
//             msg: "取消成功",
//             code: "0",
//           };
//         } else {
//           ctx.response.body = {
//             msg: "取消失败",
//             code: "-1",
//           };
//         }
//       }
//     }
//   } catch (e) {
//     console.log(e);
//     ctx.response.body = {
//       msg: "请求失败",
//       code: "-1",
//     };
//   }
// };
// const CancelAllocationDeliver = async (ctx) => {
//   try {
//     verify(ctx);
//     let connections = await connection;
//     sql4 = `SELECT * FROM text1 WHERE OrderId='${ctx.request.body.OrderId}' AND DeliverPhone is NULL`;
//     let res4 = await connections.query(sql4);
//     console.log(res4[0]);
//     if (res4[0].length != 0) {
//       ctx.response.body = {
//         msg: "该订单已取消",
//         code: "-1",
//       };
//     } else {
//       let connections = await connection;
//       let sql3 = `SELECT * FROM text1 WHERE DeliverPhone='${ctx.request.body.DeliverPhone}' AND OrderId='${ctx.request.body.OrderId}'`;
//       let res3 = await connections.query(sql3);
//       if (res3[0].length == 0) {
//         ctx.response.body = {
//           msg: "没有该订单",
//           code: "-1",
//         };
//       } else {
//         let sql = `UPDATE text1 SET DeliverPhone='' WHERE OrderId='${ctx.request.body.OrderId}'`;
//         let res = await connections.query(sql);
//         let sql2 = `SELECT * FROM text1 WHERE OrderId='${ctx.request.body.OrderId}' AND DeliverPhone is NULL`;
//         let res2 = await connections.query(sql2);
//         if (res2[0].length == 0) {
//           ctx.response.body = {
//             msg: "取消成功",
//             code: "0",
//           };
//         } else {
//           ctx.response.body = {
//             msg: "取消失败",
//             code: "-1",
//           };
//         }
//       }
//     }
//   } catch (e) {
//     console.log(e);
//     ctx.response.body = {
//       msg: "请求失败",
//       code: "-1",
//     };
//   }
// };
const getDeliverAccount = async (ctx) => {
  try {
    verify(ctx);
    let connections = await connection;
    let sql3 = `SELECT Account FROM user WHERE permissions='2'`;
    let res3 = await connections.query(sql3);
    if (res3[0].length == 0) {
      ctx.response.body = {
        msg: "无送货员",
        code: "-1",
      };
    } else {
      ctx.response.body = {
        msg: "success",
        code: "0",
        data: res3[0],
      };
    }
  } catch (e) {
    console.log(e);
    ctx.response.body = {
      msg: "请求失败",
      code: "-1",
      data: e,
    };
  }
};
const getPickAccount = async (ctx) => {
  try {
    verify(ctx);
    let connections = await connection;
    let sql3 = `SELECT Account FROM user WHERE permissions='1'`;
    let res3 = await connections.query(sql3);
    if (res3[0].length == 0) {
      ctx.response.body = {
        msg: "无取货员",
        code: "-1",
      };
    } else {
      ctx.response.body = {
        msg: "success",
        code: "0",
        data: res3[0],
      };
    }
  } catch (e) {
    console.log(e);
    ctx.response.body = {
      msg: "请求失败",
      code: "-1",
      data: e,
    };
  }
};
//
const HistoryOrderStart = async (ctx) => {
  try {
    verify(ctx);
    let connections = await connection;
    let sql = `SELECT * FROM text1 WHERE OrderStartTime BETWEEN '${ctx.request.body.StartTime}' AND '${ctx.request.body.EndTime}';`;
    let res = await connections.query(sql);
    if (res[0].length == 0) {
      ctx.response.body = {
        msg: "无完成订单",
        code: "0",
      };
    } else {
      ctx.response.body = {
        msg: "查询成功",
        code: "0",
        data: res[0],
      };
    }
  } catch (e) {
    console.log(e);
    ctx.response.body = {
      msg: "请求失败",
      code: "-1",
      data: e,
    };
  }
};
const HistoryOrderFinish = async (ctx) => {
  try {
    verify(ctx);
    let connections = await connection;
    let sql = `SELECT * FROM text1 WHERE OrderFinishTime BETWEEN '${ctx.request.body.StartTime}' AND '${ctx.request.body.EndTime}';`;
    let res = await connections.query(sql);
    if (res[0].length == 0) {
      ctx.response.body = {
        msg: "无完成订单",
        code: "0",
      };
    } else {
      ctx.response.body = {
        msg: "查询成功",
        code: "0",
        data: res[0],
      };
    }
  } catch (e) {
    console.log(e);
    ctx.response.body = {
      msg: "请求失败",
      code: "-1",
      data: e,
    };
  }
};

const getPickOrder = async (ctx) => {
  try {
    verify(ctx);
    let connections = await connection;
    let sql3 = `SELECT * FROM text1 WHERE PickWhetherChoose='false'`;
    let res3 = await connections.query(sql3);
    if (res3[0].length == 0) {
      ctx.response.body = {
        msg: "无取货订单",
        code: "-1",
      };
    } else {
      ctx.response.body = {
        msg: "success",
        code: "0",
        data: res3[0],
      };
    }
  } catch (e) {
    console.log(e);
    ctx.response.body = {
      msg: "请求失败",
      code: "-1",
      data: e,
    };
  }
};
const getDeliverOrder = async (ctx) => {
  try {
    verify(ctx);
    let connections = await connection;
    let sql3 = `SELECT * FROM text1 WHERE DeliverWhetherChoose='false' and WhetherFound='true'`;
    let res3 = await connections.query(sql3);
    if (res3[0].length == 0) {
      ctx.response.body = {
        msg: "所有楼层已有人接",
        code: "-1",
      };
    } else {
      ctx.response.body = {
        msg: "success",
        code: "0",
        data: res3[0],
      };
    }
  } catch (e) {
    console.log(e);
    ctx.response.body = {
      msg: "请求失败",
      code: "-1",
      data: e,
    };
  }
};
const PickChoose = async (ctx) => {
  try {
    verify(ctx);
    let connections = await connection;
    let sql3 = `SELECT * FROM text1 WHERE PickWhetherChoose='false' and ExpressType='${ctx.request.body.ExpressType}'`;
    let res3 = await connections.query(sql3);
    if (res3[0].length == 0) {
      ctx.response.body = {
        msg: "无该快递种类的取货订单或者该快递已有人取  ",
        code: "-1",
      };
    } else {
      let sql2 = `UPDATE text1 SET PickPersonPhone='${ctx.request.body.PickPersonPhone}',PickWhetherChoose='true' WHERE ExpressType='${ctx.request.body.ExpressType}'and WhetherFound='false' and PickWhetherChoose='false'`;
      let res2 = await connections.query(sql2);
      let sql = `SELECT * FROM text1 WHERE PickWhetherChoose='true' and PickPersonPhone='${ctx.request.body.PickPersonPhone}'`;
      let res = await connections.query(sql);
      if (res[0].length == 0) {
        ctx.response.body = {
          msg: "选择失败",
          code: "-1",
        };
      } else {
        ctx.response.body = {
          msg: "提交成功",
          code: "0",
        };
      }
    }
  } catch (e) {
    console.log(e);
    ctx.response.body = {
      msg: "请求失败",
      code: "-1",
      data: e,
    };
  }
};
const DeliverChoose = async (ctx) => {
  try {
    verify(ctx);
    let connections = await connection;
    let sql3 = `SELECT * FROM text1 WHERE DeliverWhetherChoose='false'`;
    let res3 = await connections.query(sql3);
    if (res3[0].length == 0) {
      ctx.response.body = {
        msg: "所有楼层已有人接",
        code: "-1",
      };
    } else {
      let sql2 = `UPDATE text1 SET DeliverPhone='${ctx.request.body.DeliverPhone}',DeliverWhetherChoose='true' WHERE DeliverWhetherChoose='false' and dong='${ctx.request.body.dong}' and WhetherDeliver='false'`;
      let res2 = await connections.query(sql2);
      let sql = `SELECT * FROM text1 WHERE dong='${ctx.request.body.dong}' and DeliverPhone='${ctx.request.body.DeliverPhone}' AND PickWhetherChoose='true'`;
      let res = await connections.query(sql);
      if (res[0].length == 0) {
        ctx.response.body = {
          msg: "选择失败",
          code: "-1",
        };
      } else {
        ctx.response.body = {
          msg: "提交成功",
          code: "0",
        };
      }
    }
  } catch (e) {
    console.log(e);
    ctx.response.body = {
      msg: "请求失败",
      code: "-1",
      data: e,
    };
  }
};
const PickGetChoosedOrder =async (ctx) => {
  try {
    verify(ctx);
    let connections = await connection;
    let sql3 = `SELECT * FROM text1 WHERE PickWhetherChoose='true' and PickPersonPhone='${ctx.request.body.PickPersonPhone}' and WhetherFound='false'`;
    let res3 = await connections.query(sql3);
    if (res3[0].length == 0) {
      ctx.response.body = {
        msg: "未接受订单",
        code: "-1",
      };
    } else {
      ctx.response.body = {
        msg: "success",
        code: "0",
        data: res3[0],
      };
    }
  } catch (e) {
    console.log(e);
    ctx.response.body = {
      msg: "请求失败",
      code: "-1",
      data: e,
    };
  }
}
const DeliverGetChoosedOrder =async (ctx) => {
  try {
    verify(ctx);
    let connections = await connection;
    let sql3 = `SELECT * FROM text1 WHERE DeliverWhetherChoose='true' and DeliverPhone='${ctx.request.body.DeliverPhone}' and WhetherDeliver='false'`;
    let res3 = await connections.query(sql3);
    if (res3[0].length == 0) {
      ctx.response.body = {
        msg: "未接受订单",
        code: "-1",
      };
    } else {
      ctx.response.body = {
        msg: "success",
        code: "0",
        data: res3[0],
      };
    }
  } catch (e) {
    console.log(e);
    ctx.response.body = {
      msg: "请求失败",
      code: "-1",
      data: e,
    };
  }
}
const AllPickFinish = async (ctx) => {
  try {
    verify(ctx);
    let connections = await connection;
    let sql3 = `UPDATE text1 SET PickPersonPhone='',PickWhetherChoose='false' WHERE PickPersonPhone='${ctx.request.body.PickPersonPhone}' and WhetherFound='false' and PickWhetherChoose='true'`;
    let res3 = await connections.query(sql3);
    let sql2 = `SELECT * FROM text1 WHERE PickPersonPhone='${ctx.request.body.PickPersonPhone}' AND PickWhetherChoose='true' AND WhetherFound='false'`;
    let res2 = await connections.query(sql2);
    if (res2[0].length == 0) {
      ctx.response.body = {
        msg: "完成成功，已将未完成订单重置",
        code: "0",
      };
    }
  } catch (e) {
    console.log(e);
    ctx.response.body = {
      msg: "请求失败",
      code: "-1",
      data: e,
    };
  }
};
const AllDeliverFinish = async (ctx) => {
  try {
    verify(ctx);
    let connections = await connection;
    let sql3 = `UPDATE text1 SET DeliverPhone='',DeliverWhetherChoose='false' WHERE DeliverPhone='${ctx.request.body.DeliverPhone}' and WhetherDeliver='false' and DeliverWhetherChoose='true'`;
    let res3 = await connections.query(sql3);
    let sql2 = `SELECT * FROM text1 WHERE DeliverPhone='${ctx.request.body.DeliverPhone}' AND DeliverWhetherChoose='true' AND WhetherDeliver='false'`;
    let res2 = await connections.query(sql2);
    if (res2[0].length == 0) {
      ctx.response.body = {
        msg: "完成成功，已将未完成订单重置",
        code: "0",
      };
    }
  } catch (e) {
    console.log(e);
    ctx.response.body = {
      msg: "请求失败",
      code: "-1",
      data: e,
    };
  }
};
const getPickFinishedOrder = async (ctx) => {
  try {
    verify(ctx);
    let connections = await connection;
    let sql3 = `SELECT * FROM text1 WHERE WhetherFound='true' and PickPersonPhone='${ctx.request.body.PickPersonPhone}'`;
    let res3 = await connections.query(sql3);
    if (res3[0].length == 0) {
      ctx.response.body = {
        msg: "该账号无完成的订单",
        code: "-1",
      };
    } else {
      ctx.response.body = {
        msg: "success",
        code: "0",
        data: res3[0],
      };
    }
  } catch (e) {
    console.log(e);
    ctx.response.body = {
      msg: "请求失败",
      code: "-1",
      data: e,
    };
  }
};
const getDeliverFinishOrder = async (ctx) => {
  try {
    verify(ctx);
    let connections = await connection;
    let sql3 = `SELECT * FROM text1 WHERE WhetherDeliver='true' and DeliverPhone='${ctx.request.body.DeliverPhone}'`;
    let res3 = await connections.query(sql3);
    if (res3[0].length == 0) {
      ctx.response.body = {
        msg: "该账号无完成的订单",
        code: "-1",
      };
    } else {
      ctx.response.body = {
        msg: "success",
        code: "0",
        data: res3[0],
      };
    }
  } catch (e) {
    console.log(e);
    ctx.response.body = {
      msg: "请求失败",
      code: "-1",
      data: e,
    };
  }
};

const getAllAccount = async (ctx) => {
  try {
    verify(ctx);
    let connections = await connection;
    let sql3 = `SELECT Account FROM user WHERE Account!='18582707259'`;
    let res3 = await connections.query(sql3);
    if (res3[0].length == 0) {
      ctx.response.body = {
        msg: "除了超级管理员，暂无员工",
        code: "-1",
      };
    } else {
      ctx.response.body = {
        msg: "success",
        code: "0",
        data: res3[0],
      };
    }
  } catch (e) {
    console.log(e);
    ctx.response.body = {
      msg: "请求失败",
      code: "-1",
      data: e,
    };
  }
};
const Setprice = async (ctx) => {
  try {
    verify(ctx);
    let connections = await connection;
    let params = ctx.request.body;
    let sql3 = `INSERT INTO setprice(ExpressType,dong,layer,isroom,price) VALUES('${params.ExpressType}','${params.dong}','${params.layer}','${params.isroom}','${params.price}')`;
    let res3 = await connections.query(sql3);
    console.log(res3[0]);
    if (res3[0].warningStatus == 0) {
      ctx.response.body = {
        msg: "添加成功",
        code: "0",
      };
    } else {
      ctx.response.body = {
        msg: "添加失败",
        code: "-1",
        data: res3[0],
      };
    }
  } catch (e) {
    console.log(e);
    ctx.response.body = {
      msg: "请求失败",
      code: "-1",
      data: e,
    };
  }
};
const Lookprice = async (ctx) => {
  try {
    verify(ctx);
    let connections = await connection;
    let sql3 = `SELECT * FROM setprice`;
    let res3 = await connections.query(sql3);
    console.log(res3[0]);
    if (res3[0].length != 0) {
      ctx.response.body = {
        msg: "获取成功",
        code: "0",
        data: res3[0],
      };
    } else {
      ctx.response.body = {
        msg: "获取失败",
        code: "-1",
      };
    }
  } catch (e) {
    console.log(e);
    ctx.response.body = {
      msg: "请求失败",
      code: "-1",
      data: e,
    };
  }
};
const Removeprice = async (ctx) => {
  try {
    verify(ctx);
    let connections = await connection;
    let sql3 = `DELETE FROM setprice WHERE id = '${ctx.request.body.id}'`;
    let res3 = await connections.query(sql3);
    if (res3[0].warningStatus == 0) {
      ctx.response.body = {
        msg: "删除成功",
        code: "0",
      };
    } else {
      ctx.response.body = {
        msg: "删除失败",
        code: "-1",
        data: res3[0],
      };
    }
  } catch (e) {
    console.log(e);
    ctx.response.body = {
      msg: "请求失败",
      code: "-1",
      data: e,
    };
  }
};
const getDataByOrder = async (ctx) => {
  try {
    verify(ctx);
    let sql = `SELECT * FROM text1 WHERE OrderId=${ctx.request.body.OrderId};`;
    let connections = await connection;
    let res = await connections.query(sql);
    if (res[0].length == 0) {
      ctx.body = {
        data: res[0],
        code: "-1",
        msg: "没有该订单",
      };
    } else {
      ctx.body = {
        data: res[0],
        code: "0",
        msg: "success",
      };
    }
  } catch (e) {
    ctx.response.body = {
      msg: "请求失败",
      code: "-1",
      data: e,
    };
  }
};
const addUser = async (ctx) => {
  try {
    verify(ctx);
    let connections = await connection;
    let loginAccount = ctx.request.body.loginAccount;
    let sql = `SELECT * FROM user WHERE Accout=${loginAccount} and permissions=4`;
    let res = await connections.query(sql);
    if (res[0].length == 0) {
      ctx.response.body = {
        msg: "无权限",
        code: "-1",
      };
    } else {
      let addAccount = ctx.request.body.addAccount;
      if (/^1[367589][0-9]{9}$/.test(addAccount)) {
        let sql2 = `SELECT * FROM user WHERE Accout=${addAccount}`;
        let res2 = await connections.query(sql2);
        if (res2[0].length == 0) {
          let addAccountPassword = ctx.request.body.addAccountPassword;
          let addpermissions = ctx.request.body.addpermissions;
          console.log(addpermissions);
          if (
            addpermissions == 1 ||
            addpermissions == 0 ||
            addpermissions == 2 ||
            addpermissions == 3
          ) {
            let sql = `INSERT INTO user(Account,password,permissions) VALUES(${addAccount},${addAccountPassword},${addpermissions})`;
            let res = await connections.query(sql);
            ctx.response.body = {
              msg: "添加成功",
              code: "0",
            };
          } else {
            ctx.response.body = {
              code: "-1",
              msg: "权限只有0,1,2,3",
            };
          }
        } else {
          ctx.response.body = {
            msg: "已存在该用户",
            code: "-1",
          };
        }
      } else {
        ctx.response.body = {
          msg: "用户格式错误",
          code: "-1",
        };
      }
    }
    console.log(res[0]);
  } catch (e) {
    ctx.response.body = {
      msg: "请求失败",
      code: "-1",
      data: e,
    };
  }
};
const lookAllPassword = async (ctx) => {
  try {
    verify(ctx);
    let sql2 = `SELECT permissions FROM user WHERE Account='${ctx.request.body.loginAccount}'`;
    let connections = await connection;
    let res2 = await connections.query(sql2);
    if (
      res2[0][0].permissions == 2 ||
      res2[0][0].permissions == 1 ||
      res2[0][0].permissions == 3
    ) {
      let sql = `SELECT Account ,password FROM user WHERE permissions!='3'`;
      let res = await connections.query(sql);
      console.log(res[0]);
      ctx.response.body = {
        code: "0",
        msg: "success",
        data: res[0],
      };
    } else {
      ctx.response.body = {
        code: "0",
        msg: "无权查看",
      };
    }
  } catch (e) {
    console.log(e);
    ctx.response.body = {
      msg: "请求失败",
      code: "-1",
      data: e,
    };
  }
};
const lookLoginPassword = async (ctx) => {
  try {
    verify(ctx);
    let sql2 = `SELECT password FROM user WHERE Account='${ctx.request.body.loginAccount}'`;
    let connections = await connection;
    let res2 = await connections.query(sql2);
    if (res2[0].length == 0) {
      ctx.response.body = {
        msg: "请求失败",
        code: "-1",
        data: e,
      };
    } else {
      ctx.response.body = {
        msg: "请求成功",
        code: "0",
        data: res2[0],
      };
    }
  } catch (e) {
    console.log(e);
    ctx.response.body = {
      msg: "请求失败",
      code: "-1",
      data: e,
    };
  }
};
const changePassword = async (ctx) => {
  try {
    verify(ctx);
    let connections = await connection;
    let sql2 = `SELECT permissions FROM user WHERE Account='${ctx.request.body.loginAccount}'`;
    let res2 = await connections.query(sql2);
    let sql3 = `SELECT permissions FROM user WHERE Account='${ctx.request.body.changeAccount}'`;
    let res3 = await connections.query(sql3);
    if (res2[0][0].permissions == 2 || res2[0][0].permissions == 1) {
      if (res2[0][0].permissions >= res3[0][0].permissions) {
        let sql = `UPDATE user SET password='${ctx.request.body.newPassword}' WHERE Account='${ctx.request.body.changeAccount}'`;
        let res = await connections.query(sql);
        ctx.response.body = {
          code: "0",
          msg: "success",
        };
      } else {
        ctx.response.body = {
          code: "-1",
          msg: "无权修改",
          // data: res[0],
        };
      }
    } else if (res2[0][0].permissions > 3) {
      ctx.response.body = {
        code: "-1",
        msg: "权限只有0,1,2,3",
        // data: res[0],
      };
    } else {
      ctx.response.body = {
        code: "-1",
        msg: "无权修改",
        // data: res[0],
      };
    }
  } catch (e) {
    ctx.response.body = {
      msg: "请求失败",
      code: "-1",
      data: e,
    };
  }
};
const changePermissions = async (ctx) => {
  try {
    verify(ctx);
    let connections = await connection;
    let sql2 = `SELECT permissions FROM user WHERE Account='${ctx.request.body.loginAccount}'`;
    let res2 = await connections.query(sql2);
    if (res2[0][0].permissions == 3) {
      if (
        ctx.request.body.newPermissions == 1 ||
        ctx.request.body.newPermissions == 0 ||
        ctx.request.body.newPermissions == 2
      ) {
        let sql = `UPDATE user SET permissions='${ctx.request.body.newPermissions}' WHERE Account='${ctx.request.body.changeAccount}'`;
        let res = await connections.query(sql);
        ctx.response.body = {
          code: "0",
          msg: "success",
        };
      } else if (ctx.request.body.newPermissions == 3) {
        ctx.response.body = {
          code: "-1",
          msg: "超级管理员只能有一个",
          // data: res[0],
        };
      } else {
        ctx.response.body = {
          code: "-1",
          msg: "权限只有0,1,2,3",
          // data: res[0],
        };
      }
    } else {
      ctx.response.body = {
        code: "-1",
        msg: "无权限修改",
        data: e,
        // data: res[0],
      };
    }
  } catch (e) {
    console.log(e);
  }
};
module.exports = {
  getAllOrder,
  getDataByOrder,
  addUser,
  CustomerTakeOrder,
  // getNotAllocationPickOrder,
  // getNotAllocationDeliverOrder,
  // AllocationPickPersonOrder,
  // AllocationDeliverOrder,
  // PickPersonOrder,
  // DeliverOrder,
  getPickFinishedOrder,
  getDeliverFinishOrder,
  Setprice,
  Lookprice,
  Removeprice,
  getPickOrder,
  getDeliverOrder,
  PickChoose,
  DeliverChoose,
  PickGetChoosedOrder,
  DeliverGetChoosedOrder,

  AllPickFinish,
  AllDeliverFinish,
  getAllAccount,
  WhetherFindCourier,
  WhetherTakeCourier,
  CustomerFinishOrder,
  HistoryOrderStart,
  HistoryOrderFinish,
  lookAllPassword,
  changePassword,
  changePermissions,
  CancelCustomerOrder,
  // CancelAllocationPick,
  // CancelAllocationDeliver,
  getDeliverAccount,
  getPickAccount,
  lookLoginPassword,
};
