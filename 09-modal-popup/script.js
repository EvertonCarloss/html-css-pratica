const openBtn = document.querySelector('.open-modal');
const closeBtn = document.querySelector('.close-modal');
const overlay = document.querySelector('.modal-overlay');

openBtn.addEventListener('click', () => {
  overlay.classList.add('active');
});

closeBtn.addEventListener('click', () => {
  overlay.classList.remove('active');
});

overlay.addEventListener('click', (e) => {
  if (e.target === overlay) {
    overlay.classList.remove('active');
  }
});
