import { setListener, toggleClass } from '../wrappers/codeWrappers';

export default function burger() {
  const burger = document.querySelector('.navbar__burger');
  const sidenav = document.querySelector('.sidenav');

  setListener(burger, 'click', () => {
    toggleClass(burger, 'active');
    toggleClass(sidenav, 'active');
  });
}
