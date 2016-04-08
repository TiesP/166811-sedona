function search(btn) {
    if(!btn.classList.contains('search-hotel__button--in-progress')) {
        btn.classList.add('search-hotel__button--in-progress');
    } else {
        btn.classList.remove('search-hotel__button--in-progress');
    }
}
