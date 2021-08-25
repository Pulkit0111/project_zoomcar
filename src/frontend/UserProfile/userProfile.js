let check = JSON.parse(localStorage.getItem("username"));
if (check == undefined) {
  var login = document.getElementById("login-text");
  login.innerHTML = check.name;

  var user = document.getElementById("fetchUserName");
  user.innerHTML = check.name;

  user = document.getElementById("user-name");
  user.value = check.name;

  user = document.getElementById("user-phone");
  user.value = `+91 ${check.number}`;

  user = document.getElementById("user-gender");
  if (check.gender == undefined) {
    user.value = "Select your gender";
  } else {
    user.value = check.gender;
    changeIconColor(user.value);
  }

  user = document.getElementById("user-email");
  user.value = check.email;

  let imgSrc = check.img;
  if (imgSrc != undefined) {
    let img = document.getElementById("profile-picture");
    let img1 = document.getElementById("profile-picture1");
    img.src = imgSrc;
    img1.src = imgSrc;
  }
}

function updateProfilePicture() {
  var imgSrc = prompt(" Enter link for your profile picture ");
  if (imgSrc == "") {
    alert("Profile not changed!");
    return;
  }

  let data = JSON.parse(localStorage.getItem("cultFitUsers"));
  let userData = data[check.number];
  userData.img = imgSrc;

  localStorage.setItem("username", JSON.stringify(userData));

  data[check.number] = userData;
  localStorage.setItem("cultFitUsers", JSON.stringify(data));

  window.location.href = "userProfile.html";
}

function changeGender(value) {
  let user = document.getElementById("user-gender");
  user.value = value;

  changeIconColor(value);
  manageSaveDiscardButton();
}

function changeIconColor(value) {
  var male = document.getElementById("male-icon");
  var female = document.getElementById("female-icon");
  var other = document.getElementById("transgender-icon");

  if (value == "Male") {
    male.style.color = "rgb(255, 46, 115)";
    female.style.color = "black";
    other.style.color = "black";
  } else if (value == "Female") {
    female.style.color = "rgb(255, 46, 115)";
    male.style.color = "black";
    other.style.color = "black";
  } else {
    other.style.color = "rgb(255, 46, 115)";
    female.style.color = "black";
    male.style.color = "black";
  }
}

function manageSaveDiscardButton() {
  let btn1 = document.getElementById("discard");
  let btn2 = document.getElementById("save");

  btn1.style.display = "inline";
  btn2.style.display = "inline";
}

function editUser() {
  let data = JSON.parse(localStorage.getItem("cultFitUsers"));

  let userData = data[check.number];
  let gender = document.getElementById("user-gender");
  if (gender.value != "Select your gender") {
    userData.gender = gender.value;
  }

  let email = document.getElementById("user-email");
  if (email.value != userData.email) {
    userData.email = email.value;
  }

  localStorage.setItem("username", JSON.stringify(userData));

  data[check.number] = userData;

  localStorage.setItem("cultFitUsers", JSON.stringify(data));

  window.location.href = "userProfile.html";
}

function userLogOut() {
  let userData = {
    name: "Login",
  };
  localStorage.setItem("username", JSON.stringify(userData));

  window.location.href = "../Homepage-main.html";
}

/* function showlogin() {
        var logarr = JSON.parse(localStorage.getItem("logs")); 
        console.log(logarr);
        var log = document.getElementById("login_text1");
        if (logarr.name == undefined) {
          log.innerHTML = "LOGIN"
        }
        else {
          log.innerHTML = logarr.name;
        }
      }
      showlogin(); */
