// Few default values and setting up local storage
localStorage.setItem("endMonth", "");
localStorage.setItem("endDate", "");
localStorage.setItem("endTime", "");
localStorage.setItem("endweekDay", "");

document.title = `Book a car in ${localStorage.getItem(
  "SelectedCity"
)} | Rent Cars @ Most Affordable Rates - ZoomCar`;

// Displaying the pickup location and start time details in the footer
function setAddressandStartDetails() {
  var addressDisplayDiv = document.getElementById("addressDisplay");
  addressDisplayDiv.innerHTML = `${localStorage.getItem("address")}`;
  var startDetailsDisplayDiv = document.getElementById("startDetailsDisplay");
  startDetailsDisplayDiv.innerHTML = `${localStorage.getItem(
    "weekDay"
  )} ${localStorage.getItem("startDate")} ${localStorage.getItem(
    "startMonth"
  )}, 2021 ${localStorage.getItem("startTime")}`;
}

document.title = `Book a car in ${localStorage.getItem(
  "SelectedCity"
)} | Rent Cars @ Most Affordable Rates - ZoomCar`;

// Standard values in global context for references at multiple functions
var todayDate = new Date();
const referencedate = new Date();
var months = [
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
var days = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
todayDate.setDate(localStorage.getItem("startDate"));
todayDate.setMonth(months.indexOf(localStorage.getItem("startMonth")));
let hoursset = localStorage.getItem("startTime");
hoursset = hoursset[0] + hoursset[1];
todayDate.setHours(hoursset);

// Function to display the values chosen in the footer
function setDateToBottom() {
  var endDetailsDisplayDiv = document.getElementById("endDetailsDisplay");
  endDetailsDisplayDiv.innerHTML = `${localStorage.getItem(
    "endweekDay"
  )} ${localStorage.getItem("endDate")} ${localStorage.getItem(
    "endMonth"
  )}, ${todayDate.getFullYear()} ${localStorage.getItem("endTime")}`;
}

// Function to populate months in the div - calculated based on current date
function PopulateMonths() {
  let monthparent = document.getElementById("monthsdiv");
  monthparent.innerHTML = null;
  for (let i = 0; i < 7; i++) {
    let div1 = document.createElement("div");
    div1.innerHTML = months[(todayDate.getMonth() + i) % 12];
    div1.setAttribute("class", "month");

    div1.addEventListener("click", () => {
      HighlightSelection();
      // If future months are selected, dates and years are updated accordingly
      if (div1.innerHTML !== months[referencedate.getMonth()]) {
        todayDate.setMonth(months.indexOf(div1.innerHTML));
        todayDate.setDate(1);
        if (todayDate.getMonth() < referencedate.getMonth()) {
          todayDate.setFullYear(referencedate.getFullYear() + 1);
        }
        localStorage.setItem("endDate", 1);
        localStorage.setItem("endweekDay", days[todayDate.getDay()]);
        localStorage.setItem("endTime", "00:00");
      } else {
        todayDate = new Date();
        todayDate.setDate(localStorage.getItem("startDate"));
        todayDate.setMonth(months.indexOf(localStorage.getItem("startMonth")));
        let hoursset = localStorage.getItem("startTime");
        hoursset = hoursset[0] + hoursset[1];
        todayDate.setHours(hoursset);
        localStorage.setItem("endDate", todayDate.getDate());
        localStorage.setItem("endweekDay", days[todayDate.getDay()]);
        localStorage.setItem("endTime", "");
      }
      // Setting up chosen values in localstorage
      localStorage.setItem("endMonth", div1.innerHTML);
      setDateToBottom();
      PopulateDates();
      HighlightSelection();
      PopulateTimes();
    });
    monthparent.append(div1);
  }
  PopulateTimes();
}

function setDefaultDate() {
  localStorage.setItem("endDate", todayDate.getDate());
  localStorage.setItem("endweekDay", days[todayDate.getDay()]);
  localStorage.setItem("endMonth", months[todayDate.getMonth()]);
  setDateToBottom();
}

// Populates the next 7 days based on current date
function PopulateDates() {
  let dayparent = document.getElementById("daysdiv");
  dayparent.innerHTML = null;

  for (let j = 0; j < 7; j++) {
    let div1 = document.createElement("div");
    let div2 = document.createElement("div");
    let div3 = document.createElement("div");

    // Adding day name and date value dynamically
    div2.innerHTML = days[todayDate.getDay()];
    div3.innerHTML = todayDate.getDate();
    todayDate.setDate(todayDate.getDate() + 1);
    div2.setAttribute("class", "text");

    div1.className = "day low-price";
    div1.append(div2, div3);
    div1.addEventListener("click", () => {
      // Highlighting the selected date
      HighlightSelection();

      todayDate.setDate(div3.innerHTML);
      todayDate.setMonth(todayDate.getMonth());

      // Setting up chosen values in localstorage
      localStorage.setItem("endDate", div3.innerHTML);
      localStorage.setItem("endweekDay", div2.innerHTML);
      localStorage.setItem("endTime", "00:00");
      setDateToBottom();
      HighlightSelection();
      PopulateTimes();
    });
    dayparent.append(div1);
  }
  let div1 = document.createElement("div");
  div1.innerHTML = "show more";
  div1.setAttribute("class", "show-more");
  dayparent.append(div1);
  PopulateTimes();
  todayDate = new Date();
  todayDate.setDate(localStorage.getItem("startDate"));
  todayDate.setMonth(months.indexOf(localStorage.getItem("startMonth")));
  let hoursset = localStorage.getItem("startTime");
  hoursset = hoursset[0] + hoursset[1];
  todayDate.setHours(hoursset);
}

// Function to populate the times
function PopulateTimes() {
  let timesdiv = document.getElementById("timesdiv");
  timesdiv.innerHTML = null;
  let i = 00;
  let counter = "00";
  while (i <= 22) {
    let div1 = document.createElement("div");
    if (String(i).length == 1) {
      let num = `0${i}`;
      div1.innerHTML = `${num}:${counter}`;
    } else {
      div1.innerHTML = `${String(i)}:${counter}`;
    }
    div1.setAttribute("class", "select_time");
    // If the date selected is today, all the times previous to current time are disabled
    // Helps in not choosing a time from the past

    if (
      todayDate.getDate() == localStorage.getItem("startDate") &&
      localStorage.getItem("endMonth") == localStorage.getItem("startMonth")
    ) {
      let hours = localStorage.getItem("startTime");
      hours = hours[0] + hours[1];
      hours = Number(hours);
      let check = div1.innerHTML[0] + div1.innerHTML[1];
      check = Number(check);
      if (check <= hours) {
        div1.disabled = true;
        div1.style.cursor = "default";
        div1.style.opacity = "0.1";
      }
    } else {
      div1.disabled = false;
      div1.style.cursor = "pointer";
      div1.style.opacity = "1";
    }
    div1.addEventListener("click", () => {
      localStorage.setItem("endTime", div1.innerHTML);
      setDateToBottom();
      HighlightSelection();
    });
    i += 2;
    timesdiv.append(div1);
    HighlightSelection();
  }
}

// Function to keep the chosen month,date and time always highlighted in custom green color
function HighlightSelection() {
  // Highlights the month chosen
  let monthdivs = document.querySelectorAll(".months > div");
  monthdivs.forEach((el) => {
    if (el.innerHTML == localStorage.getItem("endMonth")) {
      el.style.border = "2px solid rgb(112, 173, 77)";
      el.style.boxShadow = "0 4px 12px rgb(0 0 0 / 18%)";
    } else {
      el.style.border = "1px solid rgb(50, 58, 68)";
      el.style.boxShadow = "none";
    }
  });

  // Highlights the date chosen
  let daysdivs = document.querySelectorAll(".days > div");
  daysdivs.forEach((el1) => {
    if (el1.innerHTML !== "show more") {
      let check = el1.innerText.split("\n");
      if (
        check[1] == localStorage.getItem("endDate") &&
        check[0] == localStorage.getItem("endweekDay").toUpperCase()
      ) {
        el1.style.border = "2px solid rgb(112, 173, 77)";
        el1.style.boxShadow = "0 4px 12px rgb(0 0 0 / 18%)";
      } else {
        el1.style.border = "1px solid rgb(50, 58, 68)";
        el1.style.boxShadow = "none";
      }
    }
  });

  // Highlights the time chosen
  let timedivs = document.querySelectorAll(".time > div");
  timedivs.forEach((el2) => {
    if (el2.innerHTML === localStorage.getItem("endTime")) {
      el2.style.border = "2px solid rgb(112, 173, 77)";
      el2.style.boxShadow = "0 4px 12px rgb(0 0 0 / 18%)";
    } else {
      el2.style.border = "1px solid rgb(50, 58, 68)";
      el2.style.boxShadow = "none";
    }
  });
}

function drive1() {
  window.location.href = "../PickuplocationSelection/PickUpLocation.html";
}
function drive2() {
  window.location.href = "../StartTimeSelection/PickUpTimeSelection.html";
}

async function SendData() {
  let body = {
    location: `${localStorage.getItem("address")}`,
    startdate: `${localStorage.getItem("startDate")}`,
    enddate: `${localStorage.getItem("endDate")}`,
    startmonth: `${localStorage.getItem("startMonth")}`,
    endmonth: `${localStorage.getItem("endMonth")}`,
    starttime: `${localStorage.getItem("startTime")}`,
    endtime: `${localStorage.getItem("endTime")}`,
  };

  body = JSON.stringify(body);
  console.log("body:", body);

  let senddetails = await fetch("http://localhost:4321/details", {
    method: "POST",
    body: body,
    headers: {
      "Content-Type": "application/json",
    },
  });
  let details = await senddetails.json();
  console.log("details:", details);
  console.log("test");
  window.location.href = "../CarsAvailabilityPage/carsAvailability.html";
}

setAddressandStartDetails();
setDefaultDate();
PopulateDates();
PopulateMonths();
PopulateTimes();
HighlightSelection();
setDateToBottom();
