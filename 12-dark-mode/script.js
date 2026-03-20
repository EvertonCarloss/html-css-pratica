const button = document.getElementById('toggle');

if (localStorage.getItem('theme') === 'dark') {
  document.body.classList.add('dark');
}

button.addEventListener('click', () => {
  document.body.classList.toggle('dark');

  if (document.body.classList.contains('dark')) {
    localStorage.setItem('theme', 'dark');
  } else {
    localStorage.setItem('theme', 'light');
  }
});
