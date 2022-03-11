import { addClass } from '../wrappers/codeWrappers';

export default function addClassWoocommerce() {
  const woo = document.querySelector('.woocommerce');

  if (woo) {
    addClass(woo, 'wrapper__content');
  }
}
