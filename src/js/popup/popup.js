import { addClass, removeClass, setListener } from '../wrappers/codeWrappers';

export default function popup() {
  const shadow = document.querySelector('.popup__container');
  const close = document.querySelector('.popup__close');
  const call = document.querySelector('.header__call');
  const popup = document.querySelector('.popup');

  setListener(close, 'click', () => {
    removeClass(shadow, 'active');
  });
  setListener(call, 'click', () => {
    addClass(shadow, 'active');
  });
  setListener(popup, 'click', (e) => {
    e.stopPropagation();
  });
  setListener(shadow, 'click', () => {
    removeClass(shadow, 'active');
  });
}
