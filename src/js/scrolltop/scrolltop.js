import { addClass, removeClass, setListener } from '../wrappers/codeWrappers';

export default function scrolltop() {
  const top = document.querySelector('.scrolltop');

  // eslint-disable-next-line no-use-before-define
  setListener(window, 'scroll', () => trackScroll(top));
  // eslint-disable-next-line no-use-before-define
  setListener(top, 'click', () => backToTop());

  function trackScroll(el) {
    const scrolled = window.pageYOffset;
    // const coords = document.documentElement.clientHeight;
    const coords = 300;

    if (scrolled > coords) {
      addClass(el, 'active');
    }
    if (scrolled < coords) {
      removeClass(el, 'active');
    }
  }

  function backToTop() {
    if (window.pageYOffset > 0) {
      window.scroll({
        top: 0,
        behavior: 'smooth',
      });
    }
  }
}
