document.addEventListener('DOMContentLoaded', function () {
  const toggler = document.querySelector('.navbar-toggler');
  const modalMenu = document.querySelector('.modal-menu');
  const closeModal = document.querySelector('.close-modal');

  toggler.addEventListener('click', function () {
    modalMenu.classList.toggle('active');
  });

  closeModal.addEventListener('click', function () {
    modalMenu.classList.remove('active');
  });

  // Đóng modal khi nhấp ra ngoài modal
  window.addEventListener('click', function (e) {
    if (e.target === modalMenu) {
      modalMenu.classList.remove('active');
    }
  });
});


const slides = [
  {
    background: 'img/slide.png',
    circleImage: 'img/slide.png',
    caption: 'Outsourcing kho hàng'
  },
  {
    background: 'img/slide1.png',
    circleImage: 'img/slide1.png',
    caption: 'Kho bãi và lưu trữ'
  },
  {
    background: 'img/slide2.png',
    circleImage: 'img/slide2.png',
    caption: 'Dịch vụ vận chuyển'
  },
  {
    background: 'img/slide4.png',
    circleImage: 'img/slide4.png',
    caption: 'Dịch vụ vận chuyển'
  },
  {
    background: 'img/slide5.png',
    circleImage: 'img/slide5.png',
    caption: 'Kho bãi và lưu trữ'
  },
];

let currentSlide = 0;

function nextSlide() {
  currentSlide = (currentSlide + 1) % slides.length;
  const background = document.querySelector('.background');
  const circleImage = document.querySelector('.circle-image');
  const caption = document.querySelector('.caption');

  background.style.backgroundImage = `url(${slides[currentSlide].background})`;
  circleImage.src = slides[currentSlide].circleImage;
  caption.textContent = slides[currentSlide].caption;
}


const commentArr = [
  {
    image: './img/female.jpg',
    text: 'Eu odio et cras nisi eu congue faucibus sit. Pretium proin dignissim urna aenean varius nisi amet nullam id.',
    author: 'Ms Taylor',
    role: 'Founder ABC'
  },
  {
    image: './img/male.jpg',
    text: 'Eu odio et cras nisi eu congue faucibus sit. Pretium proin dignissim urna aenean varius nisi amet nullam id.',
    author: 'Mr. Smith',
    role: 'Founder ABC'
  },
  {
    image: './img/male.jpg',
    text: 'Eu odio et cras nisi eu congue faucibus sit. Pretium proin dignissim urna aenean varius nisi amet nullam id.',
    author: 'Mr. Smith',
    role: 'Founder ABC'
  }
];

function renderComments() {
  const container = document.getElementById('comment-container');

  const commentHTML = commentArr.map(comment => `
      <div class="comment">
          <img src="${comment.image}" alt="User">
          <blockquote>
              <p>${comment.text}</p>
              <div class ="footer-cmt">
                  <div>
                      <strong>${comment.author}</strong> | ${comment.role}
                  </div>
                  <svg xmlns="http://www.w3.org/2000/svg" width="48" height="48" viewBox="0 0 48 48" fill="none">
                      <path d="M13 6C19.388 6 24 11.274 24 19.084C23.96 30.43 15.43 38.452 3.12399 39.992C1.98399 40.136 1.54399 38.552 2.59399 38.086C7.31399 35.986 9.69999 33.322 10.008 30.686C10.238 28.716 9.16799 26.99 7.82199 26.666C4.33599 25.828 1.99999 21.486 1.99999 17C1.99999 14.0826 3.15891 11.2847 5.22181 9.22183C7.28471 7.15893 10.0826 6 13 6ZM37 6C43.388 6 48 11.274 48 19.084C47.96 30.43 39.43 38.452 27.124 39.992C25.984 40.136 25.544 38.552 26.594 38.086C31.314 35.986 33.7 33.322 34.008 30.686C34.238 28.716 33.168 26.99 31.822 26.666C28.336 25.828 26 21.486 26 17C26 14.0826 27.1589 11.2847 29.2218 9.22183C31.2847 7.15893 34.0826 6 37 6Z" 
                      fill="#191919" fill-opacity="0.3"/>
                  </svg>
              </div>
          </blockquote>
      </div>
  `).join('');

  container.innerHTML = commentHTML;
}


renderComments();


