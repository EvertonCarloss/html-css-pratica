const input = document.getElementById('username');
const button = document.getElementById('searchBtn');
const result = document.getElementById('result');

button.addEventListener('click', fetchUser);

input.addEventListener('keypress', (e) => {
  if (e.key === 'Enter') {
    fetchUser();
  }
});

async function fetchUser() {
  const username = input.value.trim();

  if (username === '') return;

  result.innerHTML = 'Carregando...';

  try {
    const response = await fetch(`https://api.github.com/users/${username}`);

    if (!response.ok) {
      throw new Error(`Usuário não encontrado`);
    }
    const data = await response.json();

    renderUser(data);
  } catch (error) {
    result.innerHTML = `<p>${error.message}<p>`;
  }
}

function renderUser(user) {
  result.innerHTML = `<img src="${user.avatar_url}" alt="Foto">
  <h2>${user.name || user.login}<h2>
  <p>${user.bio || `Sem bio disponivel`}<p>
  <a href="${user.html_url}" target="_blank">Ver perfil</a>`;
}
