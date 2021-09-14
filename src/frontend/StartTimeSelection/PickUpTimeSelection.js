// Few default values and setting up local storage
var addressDisplayDiv = document.getElementById("addressDisplay");
addressDisplayDiv.innerHTML = `${localStorage.getItem("address")}`;
var startDetailsDisplayDiv = document.getElementById("startDetailsDisplay");
localStorage.setItem("startMonth", "");
localStorage.setItem("startDate", "");
localStorage.setItem("startTime", "");
localStorage.setItem("weekDay", "");

document.title = `Book a car in ${localStorage.getItem(
  "SelectedCity"
)} | Rent Cars @ Most Affordable Rates - ZoomCar`;

// Navigation to next page
function drive1() {
  window.location.href = "../PickuplocationSelection/PickUpLocation.html";
}

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
        localStorage.setItem("startDate", 1);
        localStorage.setItem("weekDay", days[todayDate.getDay()]);
        localStorage.setItem("startTime", "00:00");
      } else {
        todayDate = new Date();
        localStorage.setItem("startDate", referencedate.getDate());
        localStorage.setItem("weekDay", days[referencedate.getDay()]);
      }
      // Setting up chosen values in localstorage
      localStorage.setItem("startMonth", div1.innerHTML);
      setDateToBottom();
      PopulateDates();
      HighlightSelection();
      PopulateTimes();
    });
    monthparent.append(div1);
  }
  PopulateTimes();
}

// Function to keep the chosen month,date and time always highlighted in custom green color
function HighlightSelection() {
  // Highlights the month chosen
  let monthdivs = document.querySelectorAll(".months > div");
  monthdivs.forEach((el) => {
    if (el.innerHTML == localStorage.getItem("startMonth")) {
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
        check[1] == localStorage.getItem("startDate") &&
        check[0] == localStorage.getItem("weekDay").toUpperCase()
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
    if (el2.innerHTML === localStorage.getItem("startTime")) {
      el2.style.border = "2px solid rgb(112, 173, 77)";
      el2.style.boxShadow = "0 4px 12px rgb(0 0 0 / 18%)";
    } else {
      el2.style.border = "1px solid rgb(50, 58, 68)";
      el2.style.boxShadow = "none";
    }
  });
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
      localStorage.setItem("startDate", div3.innerHTML);
      localStorage.setItem("weekDay", div2.innerHTML);
      localStorage.setItem("startTime", "00:00");
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
}

// Default date is set to current date in the localstorage
function setDefaultDate() {
  localStorage.setItem("startDate", referencedate.getDate());
  localStorage.setItem("weekDay", days[referencedate.getDay()]);
  localStorage.setItem("startMonth", months[referencedate.getMonth()]);
  setDateToBottom();
}

// Function to display the values chosen in the footer
function setDateToBottom() {
  startDetailsDisplayDiv.innerHTML = `${localStorage.getItem(
    "weekDay"
  )} ${localStorage.getItem("startDate")} ${localStorage.getItem(
    "startMonth"
  )}, ${todayDate.getFullYear()} ${localStorage.getItem("startTime")}`;
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
    if (Number(localStorage.getItem("startDate")) === referencedate.getDate()) {
      let hours = Number(referencedate.getHours());
      let check = div1.innerHTML[0] + div1.innerHTML[1];
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
      localStorage.setItem("startTime", div1.innerHTML);
      setDateToBottom();
      HighlightSelection();
    });
    i += 2;
    timesdiv.append(div1);
    HighlightSelection();
  }
}

setDefaultDate();
PopulateDates();
PopulateMonths();
PopulateTimes();
HighlightSelection();
setDateToBottom();
