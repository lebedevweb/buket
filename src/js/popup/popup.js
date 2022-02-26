import { addClass, removeClass, setListener } from '../wrappers/codeWrappers';

export default function popup() {
  const popup = document.querySelector('.popup__container');
  const close = document.querySelector('.popup__close');
  const call = document.querySelector('.header__call');

  setListener(close, 'click', () => {
    removeClass(popup, 'active');
  });
  setListener(call, 'click', () => {
    addClass(popup, 'active');
  });
}
