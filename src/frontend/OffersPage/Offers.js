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
