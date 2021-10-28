document.title = `Rent a Self drive Car & avail special offers on booking with Zoomcar in ${localStorage.getItem(
  "SelectedCity"
)}`;

var offerstitlep = document.getElementById("offerstitle");
var promo1 = document.getElementById("promo1");
var promo2 = document.getElementById("promo2");
var promo3 = document.getElementById("promo3");
var promo4 = document.getElementById("promo4");

offerstitlep.innerHTML = `ZOOMCAR OFFERS FOR ${localStorage.getItem(
  "SelectedCity"
)}`;

const months = [
  "Jan",
  "Feb",
  "Mar",
  "Apr",
  "May",
  "Jun",
  "Jul",
  "Aug",
  "Sep",
  "Oct",
  "Nov",
  "Dec",
];

const changeNav = () => {
  let sign_btn = document.getElementById("signup_btn");
  sign_btn.style.display = "none";
  let login_btn = document.getElementById("login_btn");
  login_btn.style.display = "none";
  let parent_ul = document.getElementById("nav_ul");

  let li_img = document.createElement("li");
  li_img.setAttribute("class", "item");

  let divcre = document.createElement("div");

  let image = document.createElement("img");
  image.setAttribute("id", "avtar_logo");

  image.src = "../Landingpage/img/avtar_logo_log.png";

  divcre.append(image);
  li_img.append(divcre);

  parent_ul.append(li_img);
  let logged_user = JSON.parse(localStorage.getItem("loggedinwith"));
  let li_name = document.createElement("li");
  li_name.setAttribute("class", "item");
  li_name.setAttribute("id", "user_left_mar");
  li_name.innerHTML = `<div class="us_name" onclick="show_dr_box()">${logged_user}
<i class="fas fa-caret-down"></i></div>
  <div id="dropdown_5">
  <div class="arrowmiddle55"></div>
       <div class="drop_d_links first_us_box">
          <button onclick="add()">MY ACCOUNT</button>
       <div>
       <div class="drop_d_links">
          <button>MY BOOKINGS</button>
       <div>
       <div class="drop_d_links">
          <button>SUPERMILER CLUB</button>
       <div>
       <div class="drop_d_links">
          <button>MY REFERRALS</button>
       <div>
       <div class="drop_d_links last_bttn">
          <button onclick="logoutFunc()">LOGOUT</button>
       <div>
  </div>`;

  parent_ul.append(li_name);
};

function show_dr_box() {
  var dropdown_5 = document.getElementById("dropdown_5");
  if (dropdown_5.style.display != "none") {
    dropdown_5.style.display = "none";
  } else {
    dropdown_5.style.display = "block";
  }
}

function logoutFunc() {
  window.location.href = "../index.html";
  localStorage.setItem("logindone", JSON.stringify("no"));
}

let check = JSON.parse(localStorage.getItem("logindone"));
if (check == "yes") {
  changeNav();
}

// Setting dynamic dates for promo codes

let temp = new Date();
temp.setDate(temp.getDate() + (Math.random() * (40 - 30 + 1) + 30));
promo1.innerText = `${temp.getDate()} ${
  months[temp.getMonth()]
}, ${temp.getFullYear()}`;

temp.setDate(temp.getDate() + (Math.random() * (40 - 30 + 1) + 30));
promo2.innerText = `${temp.getDate()} ${
  months[temp.getMonth()]
}, ${temp.getFullYear()}`;

temp.setDate(temp.getDate() + (Math.random() * (40 - 30 + 1) + 30));
promo3.innerText = `${temp.getDate()} ${
  months[temp.getMonth()]
}, ${temp.getFullYear()}`;

temp.setDate(temp.getDate() + (Math.random() * (40 - 30 + 1) + 30));
promo4.innerText = `${temp.getDate()} ${
  months[temp.getMonth()]
}, ${temp.getFullYear()}`;
