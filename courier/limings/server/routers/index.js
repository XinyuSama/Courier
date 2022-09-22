const router = require("koa-router")();

const controller = require("../controller");
const userController = require('../token/login')

router
  .get("/", async (ctx) => {
    ctx.body = "hello";
  })
  .get("/getData/getAllOrder", controller.getAllOrder)
  // .get("/getData/getNotAllocationPickOrder", controller.getNotAllocationPickOrder)
  // .get("/getData/getNotAllocationDeliverOrder", controller.getNotAllocationDeliverOrder)
  .get("/getData/getDeliverAccount", controller.getDeliverAccount)//送货员电话
  .get("/getData/getPickAccount", controller.getPickAccount)//取货员电话
  // OrderId
  .post("/getData/getDataByOrder", controller.getDataByOrder)
  .post("/SentData/CancelCustomerOrder", controller.CancelCustomerOrder) //客户取消订单 CustomerPhone OrderId
  // .post("/SentData/CancelAllocationPick", controller.CancelAllocationPick)//取消分配取货 PickPersonPhone OrderId
  // .post("/SentData/CancelAllocationDeliver", controller.CancelAllocationDeliver)//取消分配送货 DeliverPhone OrderId
  //StartTime EndTime
  .post("/SentData/History/HistoryOrderStart", controller.HistoryOrderStart)
  //StartTime EndTime
  .post("/SentData/History/HistoryOrderFinish", controller.HistoryOrderFinish)
  // ExpressType size price PickCode address isroom CustomerPhone
  .post("/SentData/CustomerTakeOrder", controller.CustomerTakeOrder) 
  // OrderId PickPersonPhone
  // .post("/SentData/AllocationPickPersonOrder", controller.AllocationPickPersonOrder)
  // OrderId DeliverPhone
  // .post("/SentData/AllocationDeliverOrder", controller.AllocationDeliverOrder)
  .get("/getData/getAllAccount", controller.getAllAccount)//除超级管理员
  .get("/getData/Lookprice", controller.Lookprice)
  .post("/SentData/Setprice", controller.Setprice) //ExpressType,dong,layer,isroom,price
  .post("/SentData/Removeprice", controller.Removeprice)//id
  
  // PickPersonPhone
  // .post("/SentData/PickPersonOrder", controller.PickPersonOrder)
  // DeliverPhone
  // .post("/SentData/DeliverOrder", controller.DeliverOrder)


  .post("/SentData/getPickFinishedOrder", controller.getPickFinishedOrder) //取货员获取已经完成的订单 PickPersonPhone
  .post("/SentData/getDeliverFinishOrder", controller.getDeliverFinishOrder)//送货员获取已完成的订单  DeliverPhone
  // WhetherFound OrderId
  .post("/SentData/WhetherFindCourier", controller.WhetherFindCourier)
  // WhetherDeliver OrderId
  .post("/SentData/WhetherTakeCourier", controller.WhetherTakeCourier)
  // WhetherFinish OrderId
  .post("/SentData/CustomerFinishOrder", controller.CustomerFinishOrder)
  .get("/getData/getPickOrder", controller.getPickOrder)
  .get("/getData/getDeliverOrder", controller.getDeliverOrder)
  // ExpressType PickPersonPhone
  .post("/SentData/PickChoose", controller.PickChoose)
  // DeliverPhone dong 
  .post("/SentData/DeliverChoose", controller.DeliverChoose)
  // PickPersonPhone 取货员查看已经接受的订单或者未完成的订单
  .post("/SentData/PickGetChoosedOrder", controller.PickGetChoosedOrder)
  //DeliverPhone  送货员查看已经接受的订单或者未完成的订单
  .post("/SentData/DeliverGetChoosedOrder", controller.DeliverGetChoosedOrder)
  
  // PickPersonPhone
  .post("/SentData/AllPickFinish", controller.AllPickFinish)
  // DeliverPhone
  .post("/SentData/AllDeliverFinish", controller.AllDeliverFinish)

  //Account password 
  .post('/user/login',userController.login) 
  // loginAccount addAccount addAccountPassword addpermissions
  .post('/user/addUser',controller.addUser)
  // loginAccount
  .post('/user/lookAllPassword',controller.lookAllPassword)
  // loginAccount changeAccount newPassword
  .post('/user/changePassword',controller.changePassword)
  // loginAccount newPermissions changeAccount
  .post('/user/changePermissions',controller.changePermissions)
  .post("/user/lookLoginPassword", controller.lookLoginPassword)//loginAccount
module.exports = router;
