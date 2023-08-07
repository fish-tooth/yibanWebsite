const dateDiff = (sDate1, sDate2) => {     // sDate1和sDate2是"2023-7-31"格式
  let aDate, oDate1, oDate2, iDays;
  aDate = sDate1.split("-");
  oDate1 = new Date(aDate[0], aDate[1] - 1, aDate[2]);
  aDate = sDate2.split("-");
  oDate2 = new Date(aDate[0], aDate[1] - 1, aDate[2]);
  iDays = parseInt(Math.abs(oDate1 - oDate2) / 1000 / 60 / 60 / 24);
  if((oDate1 - oDate2) < 0) {
    return - iDays;
  }
  return iDays;
}

export default dateDiff;
