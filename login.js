const loginForm = document.getElementById("loginForm");
const loginMessage = document.getElementById("loginMessage");

loginForm.addEventListener("submit", function (e) {
  e.preventDefault();

  const userId = document.getElementById("userid").value.trim();
  const password = document.getElementById("password").value.trim();

  // Get registered users from localStorage
  const users = JSON.parse(localStorage.getItem("users") || "[]");

  const user = users.find(u => u.id === userId && u.password === password);

  if (user) {
    loginMessage.style.color = "green";
    loginMessage.textContent = "Login successful! Redirecting...";
    setTimeout(() => {
      window.location.href = "chatbot.html"; 
    }, 1000);
  } else {
    loginMessage.style.color = "red";
    loginMessage.textContent = "Incorrect User ID or Password!";
  }
});
// Add this at the end of your login.js

const forgotLink = document.getElementById("forgotLink");

forgotLink.addEventListener("click", () => {
  loginMessage.style.color = "orange";
  loginMessage.textContent = "Forgot password? Contact the owner to reset it 😊";
});

