const bigPicture = document.querySelector('.big-picture');
// const bigPictureImg = bigPicture.querySelector('.big-picture__img');
// const likesCount = bigPicture.querySelector('.likes-count');
const commentsLoader = bigPicture.querySelector('.comments-loader');
const socialCommentCount = bigPicture.querySelector('.social__comment-count');
const closeButton = document.querySelector('#picture-cancel');
// const commentsCount = document.querySelector('.comments-count');
// const socialCaption = document.querySelector('.social__caption');
// const socialComments = document.querySelector('.social__comments');
const body = document.querySelector('body');

commentsLoader.classList.add('hidden');
socialCommentCount.classList.add('hidden');

const escKey = (event) => event.key === 'Escape';

const closeModal = (event) => {
  if (escKey(event)) {
    event.preventDefault();
    closeBigPhoto();
  }
};


function closeBigPhoto() {
  bigPicture.classList.add('hidden');
  body.classList.remove('modal-open');
  document.addEventListener('keydown', closeModal);
}

function openBigPhoto () {

  bigPicture.classList.remove('hidden');
  body.classList.add('modal-open');


  // bigPictureImg.src = .url;
  // commentsCount.textContent = .comment.length;
  // likesCount.textContent = .likes;
  // socialCaption.textContent = .description;

  document.addEventListener('keydown', closeModal);
}

openBigPhoto();


closeButton.addEventListener('click', closeBigPhoto);
