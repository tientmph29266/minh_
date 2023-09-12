function validateSignup() {
  var username = document.getElementById("signupUsername").value;
  var password = document.getElementById("signupPassword").value;


  if (username && password) {

    var userList = JSON.parse(localStorage.getItem("userList")) || [];


    var existingUser = userList.find(function (user) {
      return user.username === username;
    });

    if (existingUser) {
      alert("Tên đăng nhập đã tồn tại!");
    } else {

      userList.push({ username: username, password: password });


      localStorage.setItem("userList", JSON.stringify(userList));

      alert("Đăng ký thành công!");
      displayUserList();
    }
  } else {
    alert("Vui lòng điền đầy đủ thông tin đăng ký!");
  }
}

function validateLogin() {
  var username = document.getElementById("loginUsername").value;
  var password = document.getElementById("loginPassword").value;


  if (username && password) {

    var userList = JSON.parse(localStorage.getItem("userList")) || [];


    var authenticatedUser = userList.find(function (user) {
      return user.username === username && user.password === password;
    });

    if (authenticatedUser) {
      alert("Đăng nhập thành công!");
    } else {
      alert("Tên đăng nhập hoặc mật khẩu không chính xác!");
    }
  } else {
    alert("Vui lòng điền đầy đủ thông tin đăng nhập!");
  }
}

function displayUserList() {
  var userListElement = document.getElementById("userList");


  userListElement.innerHTML = "";


  var userList = JSON.parse(localStorage.getItem("userList")) || [];

  if (userList.length > 0) {

    userList.forEach(function (user) {
      var listItem = document.createElement("li");
      listItem.textContent = "Tên đăng nhập: " + user.username + ", Mật khẩu: " + user.password;
      userListElement.appendChild(listItem);
    });
  } else {
    var listItem = document.createElement("li");
    listItem.textContent = "Không có người dùng nào trong danh sách";
    userListElement.appendChild(listItem);
  }
}


displayUserList();
