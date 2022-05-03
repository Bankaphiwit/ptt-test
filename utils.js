exports.primeNumber = (numberStart, numberStop) => {
    let primeNumber = [];
    for (let i = numberStart; i <= numberStop; i++) {
        if (this.isPrime(i)) {
            primeNumber.push(i);
        }
    }
    return primeNumber;
};

exports.isPrime = (num) => {
    for (let i = 2; i * i <= num; i++) if (num % i === 0) return false;
    return num > 1;
};

exports.factorial = (num) => {
    let rval = 1;
    for (let i = 2; i <= num; i++) {
        rval = rval * i;
    }
    return BigInt(rval);
};

exports.isSameReverse = (str) => {
    let baseStr = [...str];
    let reverStr = [...str].reverse();
    let isSame = true;
    baseStr.map((item, key) => {
      if (item !== reverStr[key]) {
        isSame = false;
      }
    });
    return isSame;
};

exports.plusNewLine =(numLine) => {
  let content = '';
  for(let i = 1; i <= numLine; i++) {
    for(let x = 1; x <= i; x++) {
      content += '1';
    }
    content += '<br/>';
  }
  return content;
}