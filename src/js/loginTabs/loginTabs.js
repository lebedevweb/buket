import { addClass, removeClass, setListener } from '../wrappers/codeWrappers';

export default function loginTabs() {
  const loginTabs = document.querySelectorAll('.login__tab');
  const content = document.querySelectorAll('.login__content');
  if (loginTabs[0]) {
    for (let i = 0; i < loginTabs.length; i++) {
      setListener(loginTabs[i], 'click', () => {
        for (let j = 0; j < loginTabs.length; j++) {
          removeClass(loginTabs[j], 'active');
          removeClass(content[j], 'active');
        }
        addClass(loginTabs[i], 'active');
        addClass(content[i], 'active');
      });
    }
  }
}
