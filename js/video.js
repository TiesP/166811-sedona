var video_slider = document.querySelector('.video__slider'),
  video_slider_button = document.querySelector('.video__slider-button');

video_slider_button.onmousedown = function (e) {

  var min_x = video_slider.getBoundingClientRect().left,
    max_x = min_x + video_slider.offsetWidth,
    shiftX = e.pageX - video_slider_button.offsetLeft;

  moveAt(e);

  function moveAt(e) {
    if (e.pageX > min_x && e.pageX < max_x) {
      video_slider_button.style.left = e.pageX - shiftX + 'px';
    }
  }

  document.onmousemove = function (e) {
    moveAt(e);
  };

  document.onmouseup = function () {
    document.onmousemove = null;
    video_slider_button.onmouseup = null;
    video_slider.onmouseup = null;
  };

};
