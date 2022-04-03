//Функция, возвращающая случайное целое число из переданного диапазона включительно.
function getRandomInt(min, max) {
  if (min >= 0 && max > min) {
    return Math.floor(Math.random() * (max - min + 1) + min);
  }
  throw new RangeError('Число не соответствует заданому диапазону!');

}


getRandomInt(1, 100);

//Функция для проверки максимальной длины строки.

const checkLength = (string, maxLength) => string.length <= maxLength;

checkLength('какой-то текст', 100);

export {getRandomInt, checkLength};
