function fibs(number) {
  const first = 0;
  const second = 1;
  const array = [first, second];

  for (let i = 2; i < number; i++) {
    const currentNumber = array[i - 1] + array[i - 2];
    array[i] = currentNumber;
  }

  return array;
}

// function fibsRec(number) {
//   if (number == 1) return 0;
//   if (number == 2) return 1;

//   return fibsRec(number - 1) + fibsRec(number - 2);
// }

function fibsRec(n) {
  if (n == 0) return [0];
  if (n == 1) return [0, 1];

  const array = fibsRec(n - 1);

  return [...array, array[n - 1] + array[n - 2]];
}

// console.log(fibsRec(8));
