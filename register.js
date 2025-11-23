document.getElementById("registerForm").addEventListener("submit", function(e){
  e.preventDefault();

  const userid = document.getElementById("userid").value.trim();
  const password = document.getElementById("password").value;
  const confirm = document.getElementById("confirm").value;
  const msg = document.getElementById("registerMessage");

  if(password !== confirm) {
    msg.style.color = "red";
    msg.textContent = "Passwords do not match ❌";
    return;
  }

  if(userid && password) {
    // Get users from localStorage or initialize empty array
    const users = JSON.parse(localStorage.getItem("users") || "[]");

    // Check if user ID already exists
    const userExists = users.some(u => u.id === userid);
    if(userExists){
      msg.style.color = "red";
      msg.textContent = "User ID already exists ❌";
      return;
    }

    // Add new user (any password allowed)
    users.push({ id: userid, password: password });
    localStorage.setItem("users", JSON.stringify(users));

    msg.style.color = "green";
    msg.textContent = "Registration Successful ✅";

    // Redirect to login page
    setTimeout(() => {
      window.location.href = "login.html";
    }, 1500);
  } else {
    msg.style.color = "red";
    msg.textContent = "Please fill all fields ❌";
  }
});

