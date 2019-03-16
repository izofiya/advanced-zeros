module.exports = function getZerosCount(number, base) {
  let arr = []; 
  for (let i = 2; i <= 256; i++) {
    let count = 0; 
    let base2 = base; 
    let value = 0;
      if (base2 % i == 0){
        while (base2 % i == 0) {
          base2 /= i;
          count += 1;
        };
      } else continue;
      base /= Math.pow(i, count); 
     
      for(let k = 1; ; k++) {
        if (number / Math.pow(i, k) > 1) {
          value += Math.trunc(number / Math.pow(i, k));
        } else {
          arr.push(Math.trunc(value / count));
          break;
        };
      };
      if (base == 0) {
        break;
      }
  };
  let minvalue = arr[0];
    arr.forEach(el => {
      if (el < minvalue) {
        minvalue = el;
      }
  });
  return minvalue;
}