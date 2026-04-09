module.exports = function toReadable(number) {
  const arr1 = [
    'one',
    'two',
    'three',
    'four',
    'five',
    'six',
    'seven',
    'eight',
    'nine',
  ];
  const arr2 = [
    'ten',
    'eleven',
    'twelve',
    'thirteen',
    'fourteen',
    'fifteen',
    'sixteen',
    'seventeen',
    'eighteen',
    'nineteen',
  ];
  const arr3 = [
    'twenty',
    'thirty',
    'forty',
    'fifty',
    'sixty',
    'seventy',
    'eighty',
    'ninety',
  ];

  const num1 = Math.floor(number / 100);
  const num2 = number % 100;
  let result = '';

  if (num1 > 0) {
    result = `${result + arr1[num1 - 1]} hundred`;
  }
  if (num2 > 0) {
    if (result) result += ' ';
    if (num2 < 10) {
      result += arr1[num2 - 1];
    } else if (num2 < 20) {
      result += arr2[num2 - 10];
    } else {
      const num3 = Math.floor(num2 / 10);
      const num4 = num2 % 10;
      result += arr3[num3 - 2];
      if (num4 > 0) result += ` ${arr1[num4 - 1]}`;
    }
  }

  if (number === 0) result = 'zero';

  return result;
};
