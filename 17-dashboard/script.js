const API_KEY = '5f1c9b2be42e204b32b9c065daa9e679';

// -------- GITHUB --------
async function getUser() {
  const username = document.getElementById('username').value;
  const result = document.getElementById('userResult');

  if (!username) return;

  result.innerHTML = 'Carregando...';

  try {
    const response = await fetch(`https://api.github.com/users/${username}`);

    if (!response.ok) throw new Error('Usuário não encontrado');

    const data = await response.json();

    result.innerHTML = `
      <img src="${data.avatar_url}">
      <p>${data.name || data.login}</p>
    `;
  } catch (error) {
    result.innerHTML = `<p>${error.message}</p>`;
  }
}

// -------- CLIMA --------
async function getWeather() {
  const city = document.getElementById('city').value;
  const result = document.getElementById('weatherResult');

  if (!city) return;

  result.innerHTML = 'Carregando...';

  try {
    const response = await fetch(
      `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_KEY}&units=metric&lang=pt_br`,
    );

    if (!response.ok) throw new Error('Cidade não encontrada');

    const data = await response.json();

    result.innerHTML = `
      <p>${data.name}</p>
      <p>${data.main.temp}°C</p>
    `;
  } catch (error) {
    result.innerHTML = `<p>${error.message}</p>`;
  }
}

// -------- HORA --------
function updateTime() {
  const now = new Date();
  const time = now.toLocaleTimeString();

  document.getElementById('time').textContent = time;
}

setInterval(updateTime, 1000);
updateTime();
