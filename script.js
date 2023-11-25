document.getElementById('loginForm').addEventListener('submit', function (event) {
  event.preventDefault(); // Prevent form submission

  const username = event.target.username.value;
  const password = event.target.password.value;

  // Replace with your preset users
  const presetUsers = [
    { username: 'user1', password: 'password1' },
    { username: 'user2', password: 'password2' },
    // Add more users as needed
  ];

  const user = presetUsers.find(u => u.username === username && u.password === password);

  if (user) {
    window.location.href = 'https://sites.google.com/view/lptc-staff-portal/home';
  } else {
    window.location.href = 'https://discord.com/404';
  }
});
