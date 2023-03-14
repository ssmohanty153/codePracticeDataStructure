function EletricBillUnit(billPrice) {
  // let totalbill = billPrice - 80;
  // let totalUnit = 0;
  // if (totalbill < =150) {
  //   totalUnit = totalbill / 3;
  //   return totalUnit;
  // } else if (totalbill <= 650) {
  //   totalUnit = 50;
  //   totalbill = totalbill - 150;
  //   totalUnit += totalbill / 5;
  //   return totalUnit;
  // } else {
  //   totalUnit = 150;
  //   totalbill = totalbill - 650;
  //   totalUnit += totalbill / 10;
  //   return totalUnit;
  // }
  //or

  let totalbill = billPrice - 80;
  let totalUnit = 0;
  if (totalbill <= 150) {
    totalUnit = totalbill / 3;
    return totalUnit;
  } else {
    totalUnit = 50;
    totalbill = billPrice - 150;
  }
  if (totalbill <= 500) {
    totalUnit += totalbill / 5;
    return totalUnit;
  } else {
    totalUnit = 150;
    totalbill = billPrice - 500;
    totalUnit += totalbill / 10;
    return totalUnit;
  }
}
console.log("total units is", EletricBillUnit(230));

//min eletric bill 80;
//from (1-50)-3,(50-150)-5,above-10
