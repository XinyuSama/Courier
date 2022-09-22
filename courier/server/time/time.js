module.exports = function () {
  function addzero(xx, hh) {
    if (xx.toString().length == 1) {
      hh = "0" + xx;
      return hh;
    } else {
      hh = xx;
      return hh;
    }
  }
  var date = new Date();
  let Y = date.getFullYear();
  let Ms = date.getMonth() + 1;
  let D = date.getDate();
  let H = date.getHours();
  let M = date.getMinutes();
  let S = date.getSeconds();

  let Ms2 = "";
  let Ds = "";
  let Hs = "";
  let Mss = "";
  let Ss = "";
  let time = `${Y}-${addzero(Ms, Ms2)}-${addzero(D, Ds)}:${addzero(
    H,
    Hs
  )}:${addzero(M, Mss)}:${addzero(S, Ss)}`;
  return time;
};
