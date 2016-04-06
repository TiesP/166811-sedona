function run() {
  var search = document.querySelectorAll('.search-hotel__button');
  if(!search[0].classList.contains('search-hotel__button--in-progress')) {
    search[0].classList.add('search-hotel__button--in-progress');
  }
}
