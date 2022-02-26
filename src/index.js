import './style';
import './app';

// eslint-disable-next-line import/no-unresolved
import Swiper from 'swiper/bundle';

const swiper = new Swiper('.slidernews', {
  loop: true,
  autoplay: {
    delay: 5000,
    disableOnInteraction: false,
  },
  pagination: {
    el: '.slidernews__pagination',
  },
  navigation: {
    nextEl: '.slidernews__right',
    prevEl: '.slidernews__left',
  },
});
