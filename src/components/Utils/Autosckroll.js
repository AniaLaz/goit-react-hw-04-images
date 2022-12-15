function autoscroll() {
  const { height: cardHeight } = document
    .querySelector('.gallary')
    .firstElementChild.getBoundingClientRect();

  window.scrollBy({
    top: cardHeight * 2,
    behavior: 'smooth',
  });
}

export default autoscroll;
