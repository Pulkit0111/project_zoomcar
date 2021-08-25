let check = JSON.parse(localStorage.getItem("cultUserName"));
if (check != null) {
  var login = document.getElementById("login-text");
  login.innerHTML = `${check.name}`;

  var user = document.getElementById("fetchUserName");
  user.innerHTML = `${check.name}`;

  let imgSrc = check.img;
  if (imgSrc != undefined) {
    let img = document.getElementById("profile-picture");
    img.src = imgSrc;
  }
}

function userLogOut() {
  let userData = {
    name: "Login",
  };
  localStorage.setItem("cultUserName", JSON.stringify(userData));

  window.location.href = "../Homepage-main.html";
}

function changePassword() {
  let oldPass = document.getElementById("old-password").value;
  let newPass = document.getElementById("new-password").value;
  let conNewPass = document.getElementById("confirm-password").value;

  if (oldPass == "" || newPass == "" || conNewPass == "") {
    alert("Password not changed!");
    return;
  }

  if (newPass != conNewPass) {
    alert("New password and confirm password Should be the same!");
    return;
  } else if (check.password != oldPass) {
    alert("Old password is wrong!");
    return;
  } else {
    alert("Password changed successfully!");
  }

  let data = JSON.parse(localStorage.getItem("cultFitUsers"));

  let userData = data[check.number];
  userData.password = newPass;

  data[check.number] = userData;
  localStorage.setItem("cultUserName", JSON.stringify(userData));
  localStorage.setItem("cultFitUsers", JSON.stringify(data));

  userLogOut();
  // window.location.href = "userAccount.html";
}
