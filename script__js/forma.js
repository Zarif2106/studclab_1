document.querySelector('.register-form').addEventListener('submit', function (e) {
  const password = document.getElementById('password').value;
  const confirmPassword = document.getElementById('confirm-password').value;

  if (password !== confirmPassword) {
    e.preventDefault();
    alert('Пароли не совпадают!');
  }
});