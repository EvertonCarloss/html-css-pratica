const input = document.getElementById('city');
const button = document.getElementById('searchBtn');
const result = document.getElementById('result');

const API_KEY = '5f1c9b2be42e204b32b9c065daa9e679';

button.addEventListener('click', getWeather);

input.addEventListener('keypress', (e) => {
  if (e.key === 'Enter') {
    getWeather();
  }
});

async function getWeather() {
  const city = input.value.trim();

  if (city === '') return;

  result.innerHTML = 'Carregando...';

  try {
    const response = await fetch(
      `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_KEY}&units=metric&lang=pt_br`,
    );

    if (!response.ok) {
      throw new Error('Cidade não encontrada');
    }

    const data = await response.json();

    renderWeather(data);
  } catch (error) {
    result.innerHTML = `<p>${error.message}</p>`;
  }
}

function renderWeather(data) {
  const temp = data.main.temp;
  const desc = data.weather[0].description;
  const icon = data.weather[0].icon;

  result.innerHTML = `
    <div class="weather">
      <h2>${data.name}</h2>
      <img src="https://openweathermap.org/img/wn/${icon}.png">
      <p>${temp}°C</p>
      <p>${desc}</p>
    </div>
  `;
}
