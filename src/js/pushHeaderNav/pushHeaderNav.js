import { addClass } from '../wrappers/codeWrappers';

export default function pushHeaderNav() {
  const headerNav = document.querySelector('.header__navigation__list').children;

  if (headerNav) {
    // eslint-disable-next-line no-plusplus
    for (let i = 0; i < headerNav.length; i++) {
      const submenu = headerNav[i].children[1];
      if (submenu !== undefined) {
        const list = document.createElement('li');
        addClass(list, 'js__menu__guarantees');
        submenu.appendChild(list);
        list.innerHTML = `<div>
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 24"><path d="M10,24A5.25,5.25,0,0,1,6.77,23l-4.6-3.58A6.34,6.34,0,0,1,0,14.86V6.56A4.7,4.7,0,0,1,2.76,2.41L8.09.32h0a6,6,0,0,1,3.81,0L17.24,2.4A4.71,4.71,0,0,1,20,6.56v8.3a6.34,6.34,0,0,1-2.17,4.51L13.23,23A5.25,5.25,0,0,1,10,24ZM8.66,1.88,3.32,4A3,3,0,0,0,1.6,6.56v8.3A4.72,4.72,0,0,0,3.13,18l4.6,3.58a3.92,3.92,0,0,0,4.54,0L16.87,18a4.72,4.72,0,0,0,1.53-3.17V6.56A3.08,3.08,0,0,0,16.68,4L11.34,1.88A4.53,4.53,0,0,0,8.66,1.88Zm.46,12.37,4.6-4.8a.85.85,0,0,0,0-1.18.77.77,0,0,0-1.13,0l-4,4.21L7.4,11.27a.77.77,0,0,0-1.13,0,.86.86,0,0,0,0,1.19L8,14.25a.77.77,0,0,0,.57.25A.75.75,0,0,0,9.12,14.25Z"/></svg>
            <p><strong>Гарантия качества:</strong> Что-то не так? Поменяем букет или вернем деньги.</p>
          </div>
          <div>
           <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M15.35,0H8.65C2.59,0,0,2.59,0,8.65v6.7C0,21.41,2.59,24,8.65,24h6.7C21.41,24,24,21.41,24,15.35V8.65C24,2.59,21.41,0,15.35,0ZM8.65,1.67h6.7c5.15,0,7,1.83,7,7v3.62H19A3.05,3.05,0,0,0,16.22,14l-1,2a1.37,1.37,0,0,1-1.24.77H10A1.28,1.28,0,0,1,8.78,16l-1-2A3.05,3.05,0,0,0,5,12.28H1.67V8.65C1.67,3.5,3.5,1.67,8.65,1.67Zm6.7,20.66H8.65c-5.15,0-7-1.83-7-7V14H5a1.38,1.38,0,0,1,1.25.78l1,2A3,3,0,0,0,10,18.42H14a3,3,0,0,0,2.74-1.71l1-2A1.38,1.38,0,0,1,19,13.94h3.36v1.41C22.33,20.5,20.5,22.33,15.35,22.33ZM13.86,7.26H10.15a.84.84,0,0,1,0-1.68h3.71a.84.84,0,0,1,0,1.68Zm.93,3.34H9.21a.84.84,0,0,1-.84-.83.85.85,0,0,1,.84-.84h5.58a.85.85,0,0,1,.84.84A.84.84,0,0,1,14.79,10.6Z"/></svg>
            <p><strong>Бесплатная открытка.</strong> Дарим фирменную открытку и конверт из крафта.</p>
          </div>
          <div>
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M18,24H6C2.81,24,.79,22.14.6,19L0,9.81A4.9,4.9,0,0,1,1.39,6.06,5.19,5.19,0,0,1,5.15,4.47,1,1,0,0,0,6,3.92l.82-1.6A4.67,4.67,0,0,1,10.7,0h2.61a4.66,4.66,0,0,1,3.83,2.31L18,3.94a1,1,0,0,0,.89.53,5.19,5.19,0,0,1,3.76,1.59A4.9,4.9,0,0,1,24,9.81L23.4,19C23.19,22.19,21.22,24,18,24ZM10.7,1.67a2.94,2.94,0,0,0-2.31,1.4L7.57,4.68A2.71,2.71,0,0,1,5.15,6.14,3.47,3.47,0,0,0,2.64,7.2a3.28,3.28,0,0,0-.92,2.5l.59,9.22c.14,2.26,1.38,3.41,3.71,3.41H18c2.31,0,3.56-1.15,3.71-3.41l.59-9.22a3.28,3.28,0,0,0-.92-2.5,3.47,3.47,0,0,0-2.51-1.06A2.72,2.72,0,0,1,16.44,4.7l-.83-1.64a3,3,0,0,0-2.3-1.39Zm3.87,5.86a.84.84,0,0,0-.86-.83H10.29a.84.84,0,1,0,0,1.67h3.42A.84.84,0,0,0,14.57,7.53ZM12,19.53a4.47,4.47,0,1,1,4.57-4.46A4.52,4.52,0,0,1,12,19.53Zm0-7.25a2.79,2.79,0,1,0,2.86,2.79A2.82,2.82,0,0,0,12,12.28Z"/></svg>
            <p><strong>Фотоконтроль.</strong> Фото заказа перед доставкой по Viber, WhatsApp, Telegram.</p>
          </div>`;
      }
    }
  }
}
