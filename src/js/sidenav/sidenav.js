export default function sidenav() {
  const spanArrow = '<span class="sidenav_menu-arrow"></span>';
  const mobileMenu = document.getElementById('mobile_menu');
  const liDropdown = mobileMenu.querySelectorAll('.menu-item-has-children');
  // console.log(liDropdown);

  // Добавляем только что созданый элемент в дерево DOM
  // eslint-disable-next-line no-restricted-syntax
  for (const liDropdownElement of liDropdown) {
    liDropdownElement.insertAdjacentHTML('afterbegin', spanArrow);
  }

  (function arrowRotate() {
    // eslint-disable-next-line no-shadow
    const spanArrow = document.querySelectorAll('.sidenav_menu-arrow');

    // eslint-disable-next-line no-restricted-syntax
    for (const spanArrowElement of spanArrow) {
      spanArrowElement.addEventListener('click', function () {
        this.classList.toggle('active');
      });
    }
  }());
}
