function negate(a) {
  return a = !a;
}

function both(a, b) {
  if (a && b) {
    return true;
  }
  return false;
}

function either(a, b) {
  if (a || b) {
    return true;
  }
  return false;
}

function none(a, b) {
  if (!a && !b) {
    return true;
  }
  return false;
}

function one(a, b) {
  if (a && !b) {
    return true;
  }
  if (!a && b) {
    return true;
  }
  return false;
};

function truthiness(a) {
  if (a) {
    return true;
  }
  if (!a) {
    return false;
  }
}

function isEqual(a, b) {
  if (a === b) {
    return true;
  }
  return false;
};

function isGreaterThan(a, b) {
  if (a > b) {
    return true;
  }
  return false;
};

function isLessThanOrEqualTo(a, b) {
  if (a <= b) {
    return true;
  }
  return false;
};

function isOdd(a) {
  if (a % 2 == 0) {
    return false;
  }
  return true;
}

function isEven(a) {
  if (a % 2 == 0) {
    return true;
  }
  return false;
};

function isSquare(a) {
  return Math.sqrt(a) % 1 === 0;
};

function startsWith(char, string) {
  if (char === string[0]) {
    return true;
  } return false;
  
};

function containsVowels(string) {
  if (string.match(/[a|e|i|o|u]/i, 0)) {
    return true;
  }
  return false;
};

function isLowerCase(string) {
  return string === string.toLowerCase();
};

module.exports = {
  negate,
  both,
  either,
  none,
  one,
  truthiness,
  isEqual,
  isGreaterThan,
  isLessThanOrEqualTo,
  isOdd,
  isEven,
  isSquare,
  startsWith,
  containsVowels,
  isLowerCase
};
