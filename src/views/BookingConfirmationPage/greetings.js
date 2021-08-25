let head1 = document.querySelector("h1");
let flag = false;
head1.innerHTML = `Your Booking has been confirmed. <br> Thanks for choosing Zoomcar!`;

function ChangeText() {
  if (flag) {
    head1.innerHTML = `Your Booking has been confirmed. <br> Thanks for choosing Zoomcar!`;
    flag = false;
  } else {
    head1.innerHTML = `Have a Safe, Great Ride!`;
    flag = true;
  }
}

function NavigatePage() {
  clearInterval(texttimer);
  window.location.href = "../Homepage-main.html";
}

let texttimer = setInterval(ChangeText, 2500);
let landingPageTimer = setInterval(NavigatePage, 4900);
