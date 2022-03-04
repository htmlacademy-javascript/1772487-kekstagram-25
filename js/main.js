//Функция, возвращающая случайное целое число из переданного диапазона включительно.
function getRandomInt(min, max) {
  return Math.floor(Math.random() * (max - min + 1) + min);
}

getRandomInt(10, 100);

//Функция для проверки максимальной длины строки.

function checkLength(string, maxLenght) {
  return string <= maxLenght;
}

checkLength('какой-то текст', 140);
