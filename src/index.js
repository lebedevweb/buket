import './style';
import './app';

// eslint-disable-next-line import/no-unresolved
import Swiper from 'swiper/bundle';

const sliderNews = new Swiper('.slidernews', {
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

const productSliderNav = new Swiper('.product__slider__nav', {
  spaceBetween: 10,
  slidesPerView: 4,
  freeMode: true,
  watchSlidesProgress: true,
});

const productSliderMain = new Swiper('.product__slider__main', {
  loop: true,
  autoplay: {
    delay: 5000,
    disableOnInteraction: false,
  },
  navigation: {
    nextEl: '.product__slider__right',
    prevEl: '.product__slider__left',
  },
  thumbs: {
    // eslint-disable-next-line no-use-before-define
    swiper: productSliderNav,
  },
});

const related = new Swiper('.related__slider', {
  loop: true,
  spaceBetween: 20,
  autoplay: {
    delay: 5000,
    disableOnInteraction: false,
  },
  breakpoints: {
    320: {
      slidesPerView: 1,
    },
    640: {
      slidesPerView: 2,
    },
    1000: {
      slidesPerView: 3,
    },
    1300: {
      slidesPerView: 4,
    },
  },
});

const photoslider = new Swiper('.photoslider__wrapper', {
  loop: true,
  spaceBetween: 20,
  breakpoints: {
    320: {
      slidesPerView: 1,
    },
    640: {
      slidesPerView: 2,
    },
    1000: {
      slidesPerView: 3,
    },
    1300: {
      slidesPerView: 4,
    },
  },
  navigation: {
    nextEl: '.photoslider__wrapper__right',
    prevEl: '.photoslider__wrapper__left',
  },
});

// eslint-disable-next-line no-unused-vars
const hotproduct = new Swiper('.hotproduct__slider', {
  loop: true,
  spaceBetween: 20,
  breakpoints: {
    320: {
      slidesPerView: 1,
    },
    640: {
      slidesPerView: 2,
    },
    1000: {
      slidesPerView: 3,
    },
    1300: {
      slidesPerView: 4,
    },
  },
});

// eslint-disable-next-line no-unused-vars
const cheapProduct = new Swiper('.cheapproduct__slider', {
  loop: true,
  spaceBetween: 20,
  breakpoints: {
    320: {
      slidesPerView: 1,
    },
    640: {
      slidesPerView: 2,
    },
    1000: {
      slidesPerView: 3,
    },
    1300: {
      slidesPerView: 4,
    },
  },
});

