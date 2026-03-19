const tabs = document.querySelectorAll('.tab');
const contents = document.querySelectorAll('.content');

tabs.forEach((tab) => {
  tab.addEventListener('click', () => {
    const id = tab.getAttribute('data-tab');

    tabs.forEach((t) => t.classList.remove('active'));
    contents.forEach((c) => c.classList.remove('active'));

    tab.classList.add('active');

    document.querySelector(`[data-content="${id}"]`).classList.add('active');
  });
});
