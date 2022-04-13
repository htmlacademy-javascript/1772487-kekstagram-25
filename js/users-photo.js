import {getDesscription} from './data.js';

const photosList = document.querySelector('.pictures');
const photoTemplate = document.querySelector('#picture').content.querySelector('.picture');

const photos = Array.from({length:25}, getDesscription);
const photosListFragment = document.createDocumentFragment();

const createPhoto = () => {
  photos.forEach(({url, likes, comments}) => {
    const newPhoto = photoTemplate.cloneNode(true);
    newPhoto.querySelector('.picture__img').src = url;
    newPhoto.querySelector('.picture__likes').textContent = likes;
    newPhoto.querySelector('.picture__comments').textContent = comments.length;
    photosListFragment.appendChild(newPhoto);
  });
  photosList.appendChild(photosListFragment);
};


export {createPhoto};
