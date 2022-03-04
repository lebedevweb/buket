export default function deliveryDate() {
  const productTime = document.querySelector('.product__time');

  if (productTime) {
    const date = new Date();
    const hour = date.getHours();
    const minutes = date.getMinutes();
    const time = document.createElement('time');

    if (hour > 10 && hour <= 20) {
      time.innerText = `сегодня в ${(hour + 1)}:${minutes}`;
    } else if (hour >= 9 && hour <= 10) {
      time.innerText = `сегодня в ${(hour + 2)}:${minutes}`;
    } else {
      time.innerText = 'завтра в 11:00';
    }

    productTime.append(time);
  }
}
