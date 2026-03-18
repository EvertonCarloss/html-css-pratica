const items = document.querySelectorAll('.item');

items.forEach((item) => {
  const question = item.querySelector('.question');

  question.addEventListener('click', () => {
    const isActive = item.classList.contains('active');

    items.forEach((i) => i.classList.remove('active'));

    if (!isActive) {
      item.classList.add('active');
    }
  });
});
