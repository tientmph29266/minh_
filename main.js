function validateSignup() {
  var username = document.getElementById("signupUsername").value;
  var password = document.getElementById("signupPassword").value;

  if (username.trim() === '') {
    document.getElementById("message").innerHTML = "Vui lòng nhập tên !";
  } else if (password.trim() === '') {
    document.getElementById("message").innerHTML = "Vui lòng nhập mật khẩu!";
  } else {
    signup(username, password);
  }
}

function validateLogin() {
  var username = document.getElementById("loginUsername").value;
  var password = document.getElementById("loginPassword").value;

  if (username.trim() === '') {
    document.getElementById("message").innerHTML = "Vui lòng nhập tên đăng nhập!";
  } else if (password.trim() === '') {
    document.getElementById("message").innerHTML = "Vui lòng nhập mật khẩu!";
  } else {
    login(username, password);
  }
}

function signup(username, password) {
  if (localStorage.getItem(username)) {
    document.getElementById("message").innerHTML = "Tên đăng nhập đã tồn tại!";
  } else {
    localStorage.setItem(username, password);
    document.getElementById("message").innerHTML = "Đăng ký thành công!";
  }
}

function login(username, password) {
  if (localStorage.getItem(username) === password) {
    document.getElementById("message").innerHTML = "Đăng nhập thành công!";
  } else {
    document.getElementById("message").innerHTML = "Sai tên đăng nhập hoặc mật khẩu!";
  }
}