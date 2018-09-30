module.exports = function getZerosCount(number) {
  let pow = 1;
  let res = 0;
  let powFive = 5;
  while (number / powFive >= 1) {
    res += Math.floor(number / powFive);
    pow++;
    powFive = Math.pow(5, pow);
  }
  return res;
}