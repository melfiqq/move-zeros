function move_zeros(arrNum, isRight = true) {
    // Separate zeros from non-zeros
    const zeros = arrNum.filter(n => n === 0);
    const nonZeros = arrNum.filter(n => n !== 0);
  
    // Concatenate based on the direction specified by isRight
    if (isRight) {
      return nonZeros.concat(zeros);
    } else {
      return zeros.concat(nonZeros);
    }
  }