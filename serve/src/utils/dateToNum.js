const dateToNum = (date) => {
  // currentTime当前时间，格式为 2023-7-31 19:03
  var currentTime = date;
  var reg = new RegExp("-","g");  // 去掉时间里面的-
  var a = currentTime.replace(reg,"");
  var regs = new RegExp(" ","g");  // 去掉时间里面的空格
  var b = a.replace(regs,"");
  var regss = new RegExp(":","g");  // 去掉时间里面的:冒号
  var c = b.replace(regss,"");
}

export default dateToNum;