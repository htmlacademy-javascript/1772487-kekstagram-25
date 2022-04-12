

const bigPicture = document.querySelector('.big-picture');
// const bigPictureImg = bigPicture.querySelector('.big-picture__img');
const body = document.querySelector('body');
const commentsLoader = bigPicture.querySelector('.comments-loader');
// const likesCount = bigPicture.querySelector('.likes-count');
const socialCommentCount = bigPicture.querySelector('.social__comment-count');
const closeButton = document.querySelector('#picture-cancel');
// const commentsCount = document.querySelector('.comments-count');
// const socialCaption = document.querySelector('.social__caption');


const escKey = (evt) => evt.key === 'Escape';

const closeBigSize = (evt) => {
  if (escKey(evt)) {
    evt.preventDefault();
    closeBigPhoto();
  }
};

function closeBigPhoto () {
  bigPicture.classList.add('hidden');
  body.classList.remove('modal-open');
  document.addEventListener('keydown', closeBigSize);
}


function showBigPhoto () {
  bigPicture.classList.remove ('hidden');
  body.classList.add('modal-open');
  commentsLoader.classList.add('hidden');
  socialCommentCount.classList.add('hidden');

  // bigPictureImg.src =
  // commentsCount.textContent =
  // likesCount.textContent =
  // socialCaption.textContent =

  document.addEventListener('keydown', closeBigSize);
}

closeButton.addEventListener('click', closeBigPhoto);

showBigPhoto();

