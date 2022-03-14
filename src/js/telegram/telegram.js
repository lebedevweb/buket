export default function telegram() {
  const form = document.querySelector('.popup__form');
  const result = document.querySelector('.popup__form__result');
  const location = `${window.location.protocol}//${window.location.hostname}/telegram/`;

  if (form) {
    form.addEventListener('submit', (event) => {
      event.preventDefault();
      const data = new FormData(form);
      // console.log(JSON.parse(data))
      const xhr = new XMLHttpRequest();
      xhr.open('POST', location, true);
      xhr.onload = function (oEvent) {
        if (xhr.status === 200) {
          result.innerHTML = '<span style="color: #02a0da">* Данные успешно отправлены!</span>';
          form.reset();
          // eslint-disable-next-line no-use-before-define
          notification();
        }

        if (xhr.status !== 200) {
          result.innerHTML = '<span style="color: #d73d6c">* Ошибка отправки формы!</span>';
          // eslint-disable-next-line no-use-before-define
          notification();
        }
      };

      xhr.send(data);

      // xhr.onreadystatechange = function () {
      // 	if (xhr.readyState === 4 && xhr.status === 200) {
      // 		result.innerHTML = this.responseText;
      // 	}
      // }

      function notification() {
        const notify = setTimeout(() => {
          result.innerText = '';
          clearTimeout(notify);
        }, 5000);
      }
    });
  }
}
