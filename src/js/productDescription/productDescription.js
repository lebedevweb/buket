import { setListener, toggleClass } from '../wrappers/codeWrappers';

export default function productDescription() {
  const description = document.querySelector('.product__description');

  if (description) {
    const title = description.querySelector('h2');
    const content = description.querySelector('div');

    setListener(title, 'click', () => {
      toggleClass(title, 'active');
      toggleClass(content, 'active');
    });
  }
}
