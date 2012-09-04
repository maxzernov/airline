$(document).ready(function() {

  // Добавляем протезы для ie8

  // Поле поиска
  $('.search-widget__input').focus(function() {
    // $(this).addClass('search-widget__input_focus');
  });
  $('.search-widget__input').blur(function() {
    if ($(this).val() == '') {
      // $(this).removeClass('search-widget__input_focus');
    }
  });

});