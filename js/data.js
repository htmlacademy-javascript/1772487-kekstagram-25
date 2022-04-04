import {getRandomInt} from './util.js';

const DESCRIPTIONS = [
  'Эх работа',
  'На диване',
  'Пора домой!',
  'FOR THE HORDE!',
  'На даче',
  'Вкусняшки!',
  'Котлетка с пюрешкой',
  'Выходной!',
  'Снова проверка!',
];

const NAMES = [
  'Эдуард',
  'Инакентий',
  'Туча',
  'Анна',
  'Максимус',
  'Маша',
  'Лариса',
  'Алиса',
  'Анатолий',
];

const COMMENTS = [
  'Всё отлично!',
  'В целом всё неплохо. Но не всё',
  'Когда вы делаете фотографию, хорошо бы убирать палец из кадра. В конце концов это просто непрофессионально.',
  'Моя бабушка случайно чихнула с фотоаппаратом в руках и у неё получилась фотография лучше.',
  'Я поскользнулся на банановой кожуре и уронил фотоаппарат на кота и у меня получилась фотография лучше.',
  'Лица у людей на фотке перекошены, как будто их избивают. Как можно было поймать такой неудачный момент?!',
];

const LIKES = {MIN: 15, MAX: 200};
const USER_AVATAR = {MIN:1, MAX: 6};
const PIC_URL = {MIN:1, MAX: 25};


const getComment = () => ({
  id: getRandomInt(1, 100),
  avatar: `img/avatar-${getRandomInt(USER_AVATAR.MIN, USER_AVATAR.MAX)}.svg`,
  message: COMMENTS[getRandomInt(0,COMMENTS.length-1)],
  name: NAMES[getRandomInt(0,NAMES.length-1)],
});

const getDesscription = () => ({
  id: getRandomInt(1, 25),
  url: `photos/${getRandomInt(PIC_URL.MIN ,PIC_URL.MAX)}.jpg`,
  likes: getRandomInt(LIKES.MIN ,LIKES.MAX),
  desscription: DESCRIPTIONS[getRandomInt(0,DESCRIPTIONS.length-1)],
  comments: Array.from({length: getRandomInt(1, 15)}, getComment)
});


// eslint-disable-next-line no-unused-vars
const Desscription = () => Array.from({length:25}, getDesscription);

export {getDesscription};

