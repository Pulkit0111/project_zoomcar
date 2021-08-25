document.title = `Self Drive Car Rentals in ${localStorage.getItem(
  "SelectedCity"
)} | Book Zoomcar for Personal Use`;
// City Value
var cityValue = document.getElementById("cityvalue");
cityValue.innerHTML = localStorage.getItem("SelectedCity");
cityValue.addEventListener("click", function () {
  window.location.href = "./CityPopupPage/CityPopup.html";
});
//LogIn POP
var logIn = document.getElementById("login_btn");
logIn.addEventListener("click", popupCome2);
function popupCome2() {
  var pop_up22 = document.querySelector("#pop2");
  pop_up22.style.display = "flex";
}
//Signup POP
var signIn = document.getElementById("signup_btn");
signIn.addEventListener("click", popupCome);
function popupCome() {
  var pop_up1 = document.querySelector("#pop1");
  pop_up1.style.display = "flex";
}

//cut pop-up""
var cancel1 = document.querySelector(".close1");
cancel1.addEventListener("click", popCancel);
function popCancel() {
  var pop_up_can = document.querySelector("#pop1");
  pop_up_can.style.display = "none";
  var sign_par_1 = document.querySelector(".log_right");
  sign_par_1.innerHTML = `<div class="log_r_top">
              <div class="log_r_top_logo">
                <img src="./img/zoom-logo-color.png" alt="">
              </div>
              <div class="log_r_top_cont">
                <label for="">Continue with</label>
                <a
                  href="https://www.facebook.com/login.php?skip_api_login=1&api_key=194504380711275&kid_directed_site=0&app_id=194504380711275&signed_next=1&next=https%3A%2F%2Fwww.facebook.com%2Fv2.8%2Fdialog%2Foauth%3Fapp_id%3D194504380711275%26cbt%3D1622385494561%26channel_url%3Dhttps%253A%252F%252Fstaticxx.facebook.com%252Fx%252Fconnect%252Fxd_arbiter%252F%253Fversion%253D46%2523cb%253Dfd7eb5e6eafb3%2526domain%253Dwww.zoomcar.com%2526origin%253Dhttps%25253A%25252F%25252Fwww.zoomcar.com%25252Ff2bf161617a4c58%2526relation%253Dopener%26client_id%3D194504380711275%26display%3Dpopup%26domain%3Dwww.zoomcar.com%26e2e%3D%257B%257D%26fallback_redirect_uri%3Dhttps%253A%252F%252Fwww.zoomcar.com%252Fmumbai%252F%26fx_app%3Dfacebook%26locale%3Den_US%26logger_id%3Df27e55aa28e60e4%26origin%3D1%26redirect_uri%3Dhttps%253A%252F%252Fstaticxx.facebook.com%252Fx%252Fconnect%252Fxd_arbiter%252F%253Fversion%253D46%2523cb%253Df52f349df35ed%2526domain%253Dwww.zoomcar.com%2526origin%253Dhttps%25253A%25252F%25252Fwww.zoomcar.com%25252Ff2bf161617a4c58%2526relation%253Dopener%2526frame%253Df1a91b53ea2eb04%26response_type%3Dtoken%252Csigned_request%252Cgraph_domain%26scope%3Dpublic_profile%252Cemail%26sdk%3Djoey%26version%3Dv2.8%26ret%3Dlogin%26fbapp_pres%3D0%26tp%3Dunspecified&cancel_url=https%3A%2F%2Fstaticxx.facebook.com%2Fx%2Fconnect%2Fxd_arbiter%2F%3Fversion%3D46%23cb%3Df52f349df35ed%26domain%3Dwww.zoomcar.com%26origin%3Dhttps%253A%252F%252Fwww.zoomcar.com%252Ff2bf161617a4c58%26relation%3Dopener%26frame%3Df1a91b53ea2eb04%26error%3Daccess_denied%26error_code%3D200%26error_description%3DPermissions%2Berror%26error_reason%3Duser_denied&display=popup&locale=mr_IN&pl_dbl=0">
                  <div class="log_r_top_cont_face">Facebook</div>
                </a>
                <a
                  href="https://accounts.google.com/o/oauth2/auth/oauthchooseaccount?redirect_uri=storagerelay%3A%2F%2Fhttps%2Fwww.zoomcar.com%3Fid%3Dauth976566&response_type=permission%20id_token&scope=email%20profile%20openid&openid.realm&client_id=1022741829589-ms1t8peh8j5iahb23ct46ma8uvicc7lc.apps.googleusercontent.com&ss_domain=https%3A%2F%2Fwww.zoomcar.com&fetch_basic_profile=true&gsiwebsdk=2&flowName=GeneralOAuthFlow">
                  <div class="log_r_top_cont_gmail">Gmail</div>
                </a>
              </div>
            </div>
            <div class="log_r_bot">
              <input type="text" placeholder="Enter your Mobile number" class="log_input_email_mob">
              <div class="log_r_bot_btn">
                <button class="btn_log_sub" onclick="signinacc(event)"></button>
              </div>

            </div>`;
}

var cancel12 = document.querySelector(".close12");
cancel12.addEventListener("click", popCancel2);
function popCancel2() {
  var pop_up_can2 = document.querySelector("#pop2");
  pop_up_can2.style.display = "none";
  var sign_par_2 = document.querySelector(".log_right");
  sign_par_2.innerHTML = `<div class="log_r_top">
              <div class="log_r_top_logo">
                <img src="./img/zoom-logo-color.png" alt="">
              </div>
              <div class="log_r_top_cont">
                <label for="">Continue with</label>
                <a
                  href="https://www.facebook.com/login.php?skip_api_login=1&api_key=194504380711275&kid_directed_site=0&app_id=194504380711275&signed_next=1&next=https%3A%2F%2Fwww.facebook.com%2Fv2.8%2Fdialog%2Foauth%3Fapp_id%3D194504380711275%26cbt%3D1622385494561%26channel_url%3Dhttps%253A%252F%252Fstaticxx.facebook.com%252Fx%252Fconnect%252Fxd_arbiter%252F%253Fversion%253D46%2523cb%253Dfd7eb5e6eafb3%2526domain%253Dwww.zoomcar.com%2526origin%253Dhttps%25253A%25252F%25252Fwww.zoomcar.com%25252Ff2bf161617a4c58%2526relation%253Dopener%26client_id%3D194504380711275%26display%3Dpopup%26domain%3Dwww.zoomcar.com%26e2e%3D%257B%257D%26fallback_redirect_uri%3Dhttps%253A%252F%252Fwww.zoomcar.com%252Fmumbai%252F%26fx_app%3Dfacebook%26locale%3Den_US%26logger_id%3Df27e55aa28e60e4%26origin%3D1%26redirect_uri%3Dhttps%253A%252F%252Fstaticxx.facebook.com%252Fx%252Fconnect%252Fxd_arbiter%252F%253Fversion%253D46%2523cb%253Df52f349df35ed%2526domain%253Dwww.zoomcar.com%2526origin%253Dhttps%25253A%25252F%25252Fwww.zoomcar.com%25252Ff2bf161617a4c58%2526relation%253Dopener%2526frame%253Df1a91b53ea2eb04%26response_type%3Dtoken%252Csigned_request%252Cgraph_domain%26scope%3Dpublic_profile%252Cemail%26sdk%3Djoey%26version%3Dv2.8%26ret%3Dlogin%26fbapp_pres%3D0%26tp%3Dunspecified&cancel_url=https%3A%2F%2Fstaticxx.facebook.com%2Fx%2Fconnect%2Fxd_arbiter%2F%3Fversion%3D46%23cb%3Df52f349df35ed%26domain%3Dwww.zoomcar.com%26origin%3Dhttps%253A%252F%252Fwww.zoomcar.com%252Ff2bf161617a4c58%26relation%3Dopener%26frame%3Df1a91b53ea2eb04%26error%3Daccess_denied%26error_code%3D200%26error_description%3DPermissions%2Berror%26error_reason%3Duser_denied&display=popup&locale=mr_IN&pl_dbl=0">
                  <div class="log_r_top_cont_face">Facebook</div>
                </a>
                <a
                  href="https://accounts.google.com/o/oauth2/auth/oauthchooseaccount?redirect_uri=storagerelay%3A%2F%2Fhttps%2Fwww.zoomcar.com%3Fid%3Dauth976566&response_type=permission%20id_token&scope=email%20profile%20openid&openid.realm&client_id=1022741829589-ms1t8peh8j5iahb23ct46ma8uvicc7lc.apps.googleusercontent.com&ss_domain=https%3A%2F%2Fwww.zoomcar.com&fetch_basic_profile=true&gsiwebsdk=2&flowName=GeneralOAuthFlow">
                  <div class="log_r_top_cont_gmail">Gmail</div>
                </a>
              </div>
            </div>
            <div class="log_r_bot">
              <input type="text" placeholder="Enter your Mobile number" class="log_input_email_mob">
              <div class="log_r_bot_btn">
                <button class="btn_log_sub" onclick="signinacc(event)"></button>
              </div>

            </div>`;
}

//signup things after click

function signinacc(e) {
  let sign_par_box1 = document.querySelector(".log_right");

  let mob_no = document.querySelector(".log_input_email_mob").value;
  if (mob_no == "") {
    alert("Please write your Mob No");
    e.prevent();
  }

  let usermob_check = JSON.parse(localStorage.getItem("logs"));

  // console.log("usermob_check:", usermob_check);

  var havedata = false;
  if (usermob_check != null) {
    for (let i = 0; i < usermob_check.length; i++) {
      if (usermob_check[i].mob_num == mob_no) {
        havedata = true;
      }
    }
  }
  if (havedata) {
    alert("You already register with this Number");
    e.prevent();
  }

  //console.log("sign_par:", sign_par);
  sign_par_box1.innerHTML = `
      <div class="sign_up_topr_box1">
          <div class="log_r_top_logo">
              <img src="./img/zoom-logo-color.png" alt="">
          </div>
      </div>
      <div class="sign_up_botr_box1">
      <form id="signup_form">
        <input type="text" placeholder="Enter your Mobile number" id="mob_num" value=${mob_no}>
        <input type="text" placeholder="Enter your Name" id="name">
        <input type="text" placeholder="Enter your E-mail ID" id="email">
        <input type="password" placeholder="Enter Password" id="password">
      </form>
        <button class="deta_add_btn" onclick="saveData(event)">Submit</button>
      </div>`;
}

function saveData(e) {
  let form = document.getElementById("signup_form");

  let mob_num = form.mob_num.value;

  let name = form.name.value;

  let email = form.email.value;

  let password = form.password.value;

  if (mob_num == "" || name == "" || email == "" || password == "") {
    alert("PLEASE FILL ALL MANDATORY DETAILS");
    e.prevent();
  }

  let userData = {
    mob_num: mob_num,
    name: name,
    email: email,
    password: password,
  };

  let s_arr = localStorage.getItem("logs", userData);

  if (s_arr == null) {
    s_arr = [];
  } else {
    s_arr = JSON.parse(s_arr);
  }
  s_arr.push(userData);

  localStorage.setItem("logs", JSON.stringify(s_arr));

  alert("YOU ARE SUCESSFULLY SIGNUP TO ZOOMCAR");
  window.location.href = "./Homepage-main.html";
}

//LOGIN AFTERCLICK IN POPUP

function loginacc(e) {
  let login_par_box2 = document.querySelector(".log_right2");

  let mob_no = document.querySelector(".log_input_email_mob2").value;
  if (mob_no == "") {
    alert("Please write your Mob No");
    e.prevent();
  }

  var userData = JSON.parse(localStorage.getItem("logs"));

  if (userData == null) {
    alert("Please First SignUp to Zoom Car Website");
  } else {
    var havedata = false;
    for (let i = 0; i < userData.length; i++) {
      if (userData[i].mob_num == mob_no) {
        havedata = true;
      }
    }
    if (havedata) {
      login_par_box2.innerHTML = `
      <div class="login_topr_box1">
          <div class="log_r_top_logo">
              <img src="./img/zoom-logo-color.png" alt="">
          </div>
      </div>
      <div class="login_botr_box1">
      <form id="login_form">
        <input type="text" placeholder="Enter your Mobile number*" id="mob_num2" value=${mob_no}>
        <input type="password" placeholder="Enter Password*" id="password2">
      </form>
        <button class="deta_add_btn" onclick="checkData(event)">Submit</button>
      </div>`;
    } else {
      alert("Please First SignUp to Zoom Car Website");
    }
  }
}

function checkData(e) {
  let form = document.getElementById("login_form");

  let mob_num2 = form.mob_num2.value;

  let password2 = form.password2.value;

  if (mob_num2 == "" || password2 == "") {
    alert("PLEASE FILL ALL MANDATORY DETAILS");
    e.prevent();
  }

  let userData = {
    mob_num2: mob_num2,
    password2: password2,
  };

  var userData2 = JSON.parse(localStorage.getItem("logs"));

  var havedata2 = false;
  for (let i = 0; i < userData2.length; i++) {
    if (
      userData2[i].mob_num == mob_num2 &&
      userData2[i].password == password2
    ) {
      havedata2 = true;
    }
  }
  if (havedata2) {
    //   alert("You are sucessfully Login to Zoom Car");
    changeNav();
    localStorage.setItem("logindone", JSON.stringify("yes"));
  } else {
    alert("Please check your Mobile number or Password");
    localStorage.setItem("logindone", JSON.stringify("no"));
  }
}
var user_name;
function changeNav() {
  let pop_up22 = document.querySelector("#pop2");
  pop_up22.style.display = "none";
  let sign_btn = document.getElementById("signup_btn");
  sign_btn.style.display = "none";
  let login_btn = document.getElementById("login_btn");
  login_btn.style.display = "none";

  let form = document.getElementById("login_form");

  let mob_num2 = form.mob_num2.value;

  let password2 = form.password2.value;
  let userData_name = JSON.parse(localStorage.getItem("logs"));

  let havData = false;
  for (let i = 0; i < userData_name.length; i++) {
    if (
      userData_name[i].mob_num == mob_num2 &&
      userData_name[i].password == password2
    ) {
      havData = true;
      user_name = userData_name[i].name;
    } else {
      havData = false;
    }
  }
  console.log(user_name);

  let parent_ul = document.getElementById("nav_ul");

  let li_img = document.createElement("li");
  li_img.setAttribute("class", "item");

  let divcre = document.createElement("div");

  let image = document.createElement("img");
  image.setAttribute("id", "avtar_logo");

  image.src = "./img/avtar_logo_log.png";

  divcre.append(image);
  li_img.append(divcre);

  parent_ul.append(li_img);

  let li_name = document.createElement("li");
  li_name.setAttribute("class", "item");
  li_name.setAttribute("id", "user_left_mar");
  li_name.innerHTML = `<div class="us_name" onclick="show_dr_box()">${user_name}<i class="fas fa-caret-down"></i></div>
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
}

function show_dr_box() {
  var dropdown_5 = document.getElementById("dropdown_5");
  if (dropdown_5.style.display != "none") {
    dropdown_5.style.display = "none";
  } else {
    dropdown_5.style.display = "block";
  }
}
localStorage.setItem("logindone", JSON.stringify("no"));

function add() {
  window.location.href = "./UserProfile/userProfile.html";
}
function logoutFunc() {
  window.location.href = "./Homepage-main.html";
  localStorage.setItem("logindone", JSON.stringify("no"));
}

//auto_slider
var counterr = 1;
setInterval(function () {
  var cir_div = (document.getElementById("radio" + counterr).checked = true);

  var zPro1 = document.querySelector("#Promo1");
  var zPro2 = document.querySelector("#Promo2");
  var zPro3 = document.querySelector("#Promo3");
  if (counterr == 1) {
    zPro1.style.display = "block";
    zPro2.style.display = "none";
    zPro3.style.display = "none";
  }

  if (counterr == 2) {
    zPro1.style.display = "none";
    zPro2.style.display = "block";
    zPro3.style.display = "none";
  }
  if (counterr == 3) {
    zPro1.style.display = "none";
    zPro2.style.display = "none";
    zPro3.style.display = "block";
  }
  counterr++;
  if (counterr > 3) {
    counterr = 1;
  }
}, 3000);

var counterr2 = 1;
setInterval(function () {
  var cir_div2 = (document.getElementById(
    "radio" + counterr + 2
  ).checked = true);

  var zPro12 = document.querySelector("#Promo12");
  var zPro22 = document.querySelector("#Promo22");
  var zPro32 = document.querySelector("#Promo32");
  if (counterr2 == 1) {
    zPro12.style.display = "block";
    zPro22.style.display = "none";
    zPro32.style.display = "none";
  }

  if (counterr2 == 2) {
    zPro12.style.display = "none";
    zPro22.style.display = "block";
    zPro32.style.display = "none";
  }
  if (counterr2 == 3) {
    zPro12.style.display = "none";
    zPro22.style.display = "none";
    zPro32.style.display = "block";
  }
  counterr2++;
  if (counterr2 > 3) {
    counterr2 = 1;
  }
}, 3000);

function checkCity() {
  // console.log("TEST");
  var city = document.getElementById("city").value;
  // localStorage.setItem("city", JSON.stringify(city));
  window.location.href = "./CityPopupPage/CityPopup.html";
}

//                                      MIDDLE PAGE JS                             //

var slideIndex = 1;
slideview(slideIndex);

// Next/previous controls
function plusMove(n) {
  slideview((slideIndex += n));
}

// Thumbnail image controls

function slideview(n) {
  var i;
  var slides = document.getElementsByClassName("row");

  if (n > slides.length) {
    slideIndex = 1;
  }
  if (n < 1) {
    slideIndex = slides.length;
  }

  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  slides[slideIndex - 1].style.display = "block";
}

//                                                        last part of home page

var index = 1;
showSlides(index);
//Next/previous controls
function plusItems(n) {
  showSlides((index += n));
}

function showSlides(n) {
  var i;
  var slides = document.getElementsByClassName("item2");

  if (n > slides.length) {
    index = 1;
  }
  if (n < 1) {
    index = slides.length;
  }
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }

  slides[index - 1].style.display = "block";
}

// press autoplay Slide

var slideIndex = 1;
function plusSlides(n) {
  showSlides2((slideIndex = n));
}
showSlides2(slideIndex);

function showSlides2(n) {
  var i;
  var slides = document.getElementsByClassName("slides1");
  if (slideIndex > slides.length) {
    slideIndex = 1;
  }
  if (slideIndex < 1) {
    slideIndex = slides.length;
  }
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  slideIndex++;
  if (slideIndex > slides.length) {
    slideIndex = 1;
  }
  slides[slideIndex - 1].style.display = "block";
  setTimeout(showSlides2, 2000); // Change image every 2 seconds
}

//   var chng = document.getElementsByClassName('Button');

function changeColor(id) {
  var mouse = document.getElementById(`${id}`);
  var drag = document.getElementById(`p${id}`);
  var change = "rgb(34,34,41)";
  var newTxt = "green";
  mouse.style.backgroundColor = change;
  drag.style.color = newTxt;
  mouse.removeEventListener("mouseout", changeColor(`${id}`));
}
function initial(id) {
  var mouse = document.getElementById(`${id}`);
  var drag = document.getElementById(`p${id}`);
  mouse.style.backgroundColor = "rgb(51, 65, 79)";
  drag.style.color = "rgb(255, 255, 255)";
}

// mouse.addEventListener('mouseover', changeColor);
// mouse.addEventListener('mouseout', initial);

//click signup
function showlogin() {
  var logarr = JSON.parse(localStorage.getItem("logs"));
  var log = document.getElementById("login_text");
  if (logarr.name == undefined) {
    log.innerHTML = "LOGIN";
  } else {
    log.innerHTML = logarr.name;
  }
}
showlogin();
