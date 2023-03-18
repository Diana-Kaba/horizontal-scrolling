$(document).ready(function () {
  $('a[href^="#"]').click(function () {
    // если в href начинается с #, то обрабатываем клик
    let scrollEl = $(this).attr("href"); // возьмем содержимое атрибута href
    if ($(scrollEl).length != 0) {
      // проверим существование элемента чтобы избежать ошибки
      $("html, body").animate({ scrollLeft: $(scrollEl).offset().left }, 500); // анимируем скроолинг к элементу scrollEl
    }
    return false; // выключаем стандартное действие
  });
});
