var DetailsOfBookingCar = JSON.parse(
  localStorage.getItem("SelectedCarDetails")
);
// console.log("DetailsOfBookingCar:", DetailsOfBookingCar);
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
                <img src="../img/zoom-logo-color.png" alt="">
              </div>
              <div class="log_r_top_cont">
                <label for="">Continue with</label>
              </div>
            </div>
            <div class="log_r_bot">
              <input type="text" placeholder="Enter your E-mail or Mobile number" class="log_input_email_mob">
              <div class="log_r_bot_btn">
                <button class="btn_log_sub"></button>
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
                <img src="../img/zoom-logo-color.png" alt="">
              </div>
              <div class="log_r_top_cont">
                <label for="">Continue with</label>
              </div>
            </div>
            <div class="log_r_bot">
              <input type="text" placeholder="Enter your E-mail or Mobile number" class="log_input_email_mob">
              <div class="log_r_bot_btn">
                <button class="btn_log_sub"></button>
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

  let usermob_check = JSON.parse(localStorage.getItem("users"));

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

  sign_par_box1.innerHTML = `
      <div class="sign_up_topr_box1">
          <div class="log_r_top_logo">
              <img src="../img/zoom-logo-color.png" alt="">
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

  let s_arr = localStorage.getItem("users", userData);

  if (s_arr == null) {
    s_arr = [];
  } else {
    s_arr = JSON.parse(s_arr);
  }
  s_arr.push(userData);

  localStorage.setItem("users", JSON.stringify(s_arr));

  alert("YOU ARE SUCESSFULLY SIGNUP TO ZOOMCAR");
  window.location.href = "../Homepage-main.html";
}

//LOGIN AFTERCLICK IN POPUP

function loginacc(e) {
  let login_par_box2 = document.querySelector(".log_right2");

  let mob_no = document.querySelector(".log_input_email_mob2").value;
  if (mob_no == "") {
    alert("Please write your Mob No");
    e.prevent();
  }

  var userData = JSON.parse(localStorage.getItem("users"));

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
              <img src="../img/zoom-logo-color.png" alt="">
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

  var userData2 = JSON.parse(localStorage.getItem("users"));

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
    alert("You are sucessfully Login to Zoom Car");
    changeNav();
  } else {
    alert("Please check your Mobile number or Password");
  }
}
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
  let userData_name = JSON.parse(localStorage.getItem("users"));
  let user_name;

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

  image.src = "img/avtar_logo_log.png";

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
          <button>MY ACCOUNT</button>
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

function logoutFunc() {
  window.location.href = "./summarypg.html";
}

//auto_slider
var counterr = 1;
setInterval(function () {
  var cir_div = (document.getElementById("radio" + counterr).checked = true);

  var zPro1 = document.querySelector("#zoomPromo1");
  var zPro2 = document.querySelector("#zoomPromo2");
  var zPro3 = document.querySelector("#zoomPromo3");
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

  var zPro12 = document.querySelector("#zoomPromo12");
  var zPro22 = document.querySelector("#zoomPromo22");
  var zPro32 = document.querySelector("#zoomPromo32");
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
  var city = document.getElementById("city").value;
  localStorage.setItem("city", JSON.stringify(city));
}

//LAST PART

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
/*starting date and time get from local storage*/
/*let get_pi_tm = JSON.parse(localStorage.getItem("pick_up_time"));
let get_pi_dt = JSON.parse(localStorage.getItem("pick_up_date"));
get_pi_dt = get_pi_dt.split(" ");
get_pi_dt = get_pi_dt[0];

let time_parent = document.getElementById("pi_ti");
let date_parent = document.getElementById("pi_dt");
time_parent.innerText = get_pi_tm;
date_parent.innerText = get_pi_dt;*/

/*getting drop time and date from LS*/

/*let get_dr_tm = JSON.parse(localStorage.getItem("drop_time"));
let get_dr_dt = JSON.parse(localStorage.getItem("drop_date"));
get_dr_dt = get_dr_dt.split(" ");
get_dr_dt = get_dr_dt[0];

let time_parent2 = document.getElementById("dr_ti");
let date_parent2 = document.getElementById("dr_dt");
time_parent2.innerText = get_dr_tm;
date_parent2.innerText = get_dr_dt;

let bookingPrice = JSON.parse(localStorage.getItem("booking_pr"));
let book_parent = document.getElementById("bkn_amount");
book_parent.innerText = bookingPrice;

let carName = JSON.parse(localStorage.getItem("car_name"));
let carNm_parent = document.getElementById("car_name");
carNm_parent.innerText = carName;

let carImg = JSON.parse(localStorage.getItem("car_img_src"));
let carImg_parent = document.getElementById("right_car");
carImg_parent.src = carImg;

let bk_amt = document.getElementById("bkn_amount").innerText;
bk_amt = Number(bk_amt);

let ref_amt = document.getElementById("ref_amount").innerText;
ref_amt = Number(ref_amt);

let tt_amt = document.getElementById("total_amount");
tt_amt.innerText = bk_amt + ref_amt;

let res = tt_amt.innerText;
console.log("res:", res);*/

function gotopaypg() {
  //localStorage.setItem("payable_amt", JSON.stringify(res));
  window.location.href = "../payment/payment.html";
}

function FillSummaryDetailsFromLocalStorage() {
  let carImg_parent = document.getElementById("right_car");
  carImg_parent.src = DetailsOfBookingCar.carImage;
  // console.log("carImage:", DetailsOfBookingCar.carImage);

  let carNm_parent = document.getElementById("car_name");
  carNm_parent.innerText = DetailsOfBookingCar.carname;

  let carseat_parent = document.getElementById("seating_cap");
  carseat_parent.innerText = `( ${DetailsOfBookingCar.carseater} )`;

  let time_parent = document.getElementById("pi_ti");
  let date_parent = document.getElementById("pi_dt");
  time_parent.innerText = DetailsOfBookingCar.bookingStartTime;
  date_parent.innerText = `${DetailsOfBookingCar.bookingStartDate} ${DetailsOfBookingCar.bookingStartMonth}`;

  let time_parent2 = document.getElementById("dr_ti");
  let date_parent2 = document.getElementById("dr_dt");
  time_parent2.innerText = DetailsOfBookingCar.bookingEndTime;
  date_parent2.innerText = `${DetailsOfBookingCar.bookingEndDate} ${DetailsOfBookingCar.bookingEndMonth}`;

  let freekms = document.getElementById("freekmsvalue");
  freekms.innerHTML = DetailsOfBookingCar.freekms;

  let excesskms = document.getElementById("excesskmsvalue");
  let tempstore = DetailsOfBookingCar.excessKmsDetails.split("");
  // console.log("tempstore:", tempstore);
  let cropped = tempstore.splice(0, 7);
  // console.log("cropped:", cropped);
  // console.log("tempstore:", tempstore);
  excesskms.innerHTML = tempstore.join("");

  let book_parent = document.getElementById("bkn_amount");
  book_parent.innerHTML = DetailsOfBookingCar.bookingFee;

  let ref_amt = document.getElementById("ref_amount");
  ref_amt.innerHTML = `${ThousandsSeparatorForAmount(1499)}`;

  let tt_amt = document.getElementById("total_amount");
  let tempbookvalue = book_parent.innerHTML.split("");
  // console.log("tempbookvalue:", tempbookvalue);
  let comma1index = tempbookvalue.indexOf(",");
  // console.log("comma1index:", comma1index);
  let comma1 = tempbookvalue.splice(comma1index, 1);
  // console.log("comma1:", comma1);
  let temprefvalue = ref_amt.innerHTML.split("");
  // console.log("temprefvalue:", temprefvalue);
  let comma2index = temprefvalue.indexOf(",");
  // console.log("comma1index:", comma1index);
  let comma2 = temprefvalue.splice(comma2index, 1);
  // console.log("comma1:", comma1);
  tt_amt.innerHTML = ThousandsSeparatorForAmount(
    Number(tempbookvalue.join("")) + Number(temprefvalue.join(""))
  );
  localStorage.setItem("CheckoutPaymentTotal", tt_amt.innerHTML);
}

function ThousandsSeparatorForAmount(num) {
  var num_parts = num.toString().split(".");
  num_parts[0] = num_parts[0].replace(/\B(?=(\d{3})+(?!\d))/g, ",");
  return num_parts.join(".");
}

function ValidatePromoCode(e) {
  if (e.code == "Enter") {
    let promoCodeEntered = document.getElementById("promocode");
    let discountp = document.getElementById("discountAmount");
    let tempbookvalue1 = DetailsOfBookingCar.bookingFee.split("");
    // console.log("tempbookvalue:", tempbookvalue);
    let comma1index1 = tempbookvalue1.indexOf(",");
    // console.log("comma1index:", comma1index);
    let comma1_1 = tempbookvalue1.splice(comma1index1, 1);
    // console.log("comma1:", comma1);
    if (promoCodeEntered.value == "MASAI25") {
      let discount_Price = (Number(tempbookvalue1.join("")) * 25) / 100;
      discountp.innerHTML = `Discount Applicable: ₹ ${discount_Price}`;
      let book_parent = document.getElementById("bkn_amount");
      book_parent.innerHTML = DetailsOfBookingCar.bookingFee;

      let ref_amt = document.getElementById("ref_amount");
      ref_amt.innerHTML = `${ThousandsSeparatorForAmount(1499)}`;

      let tt_amt = document.getElementById("total_amount");
      let tempbookvalue = book_parent.innerHTML.split("");
      // console.log("tempbookvalue:", tempbookvalue);
      let comma1index = tempbookvalue.indexOf(",");
      // console.log("comma1index:", comma1index);
      let comma1 = tempbookvalue.splice(comma1index, 1);
      // console.log("comma1:", comma1);
      let temprefvalue = ref_amt.innerHTML.split("");
      // console.log("temprefvalue:", temprefvalue);
      let comma2index = temprefvalue.indexOf(",");
      // console.log("comma1index:", comma1index);
      let comma2 = temprefvalue.splice(comma2index, 1);
      // console.log("comma1:", comma1);
      tt_amt.innerHTML = ThousandsSeparatorForAmount(
        Number(tempbookvalue.join("")) +
          Number(temprefvalue.join("")) -
          discount_Price
      );
      promoCodeEntered.value = "";
      localStorage.setItem("CheckoutPaymentTotal", tt_amt.innerHTML);
    } else if (promoCodeEntered.value == "FTWEB10") {
      let discount_Price = (Number(tempbookvalue1.join("")) * 60) / 100;
      discountp.innerHTML = `Discount Applicable: ₹ ${discount_Price}`;
      let book_parent = document.getElementById("bkn_amount");
      book_parent.innerHTML = DetailsOfBookingCar.bookingFee;

      let ref_amt = document.getElementById("ref_amount");
      ref_amt.innerHTML = `${ThousandsSeparatorForAmount(1499)}`;

      let tt_amt = document.getElementById("total_amount");
      let tempbookvalue = book_parent.innerHTML.split("");
      // console.log("tempbookvalue:", tempbookvalue);
      let comma1index = tempbookvalue.indexOf(",");
      // console.log("comma1index:", comma1index);
      let comma1 = tempbookvalue.splice(comma1index, 1);
      // console.log("comma1:", comma1);
      let temprefvalue = ref_amt.innerHTML.split("");
      // console.log("temprefvalue:", temprefvalue);
      let comma2index = temprefvalue.indexOf(",");
      // console.log("comma1index:", comma1index);
      let comma2 = temprefvalue.splice(comma2index, 1);
      // console.log("comma1:", comma1);
      tt_amt.innerHTML = ThousandsSeparatorForAmount(
        Number(tempbookvalue.join("")) +
          Number(temprefvalue.join("")) -
          discount_Price
      );
      promoCodeEntered.value = "";
      localStorage.setItem("CheckoutPaymentTotal", tt_amt.innerHTML);
    } else {
      alert("Please enter a valid promo code");
      promoCodeEntered.value = "";
    }
  }
}

FillSummaryDetailsFromLocalStorage();
