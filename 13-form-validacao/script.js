const form = document.querySelector('.form');
const email = document.getElementById('email');
const password = document.getElementById('password');

form.addEventListener('submit', (e) => {
  e.preventDefault();

  validateInputs();
});

function validateInputs() {
  const emailValue = email.value.trim();
  const passwordValue = password.value.trim();

  // EMAIL
  if (emailValue === '') {
    setError(email, 'Email é obrigatório');
  } else if (!isEmailValid(emailValue)) {
    setError(email, 'Email inválido');
  } else {
    setSuccess(email);
  }

  // SENHA
  if (passwordValue === '') {
    setError(password, 'Senha é obrigatória');
  } else if (passwordValue.length < 6) {
    setError(password, 'Mínimo de 6 caracteres');
  } else {
    setSuccess(password);
  }
}

function setError(input, message) {
  const field = input.parentElement;
  const error = field.querySelector('.error');

  error.textContent = message;

  field.classList.add('error');
  field.classList.remove('success');
}

function setSuccess(input) {
  const field = input.parentElement;
  const error = field.querySelector('.error');

  error.textContent = '';

  field.classList.add('success');
  field.classList.remove('error');
}

function isEmailValid(email) {
  const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return regex.test(email);
}
