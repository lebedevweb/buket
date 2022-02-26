import { setListener } from '../wrappers/codeWrappers';

export default function nolink() {
  const links = document.querySelectorAll('.nolink');

  if (links) {
    links.forEach((element) => {
      setListener(element, 'click', (e) => {
        e.preventDefault();
      });
    });
  }
}
