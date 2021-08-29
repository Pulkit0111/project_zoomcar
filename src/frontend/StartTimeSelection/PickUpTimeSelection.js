var addressDisplayDiv = document.getElementById("addressDisplay");
addressDisplayDiv.innerHTML = `${localStorage.getItem("address")}`;
var startDetailsDisplayDiv = document.getElementById("startDetailsDisplay");
localStorage.setItem("startMonth", "");
localStorage.setItem("startDate", "");
localStorage.setItem("startMonth", "");
localStorage.setItem("startTime", "");
localStorage.setItem("weekDay", "");

function setStartMonth1() {
  let month1 = document.getElementById("month1");
  let month2 = document.getElementById("month2");
  let month3 = document.getElementById("month3");
  let month4 = document.getElementById("month4");
  let month5 = document.getElementById("month5");
  let month6 = document.getElementById("month6");
  let month7 = document.getElementById("month7");

  month1.style.border = "2px solid rgb(112, 173, 77)";
  month1.style.boxShadow = "0 4px 12px rgb(0 0 0 / 18%)";

  month2.style.border = "1px solid rgb(50, 58, 68)";
  month2.style.boxShadow = "none";

  month3.style.border = "1px solid rgb(50, 58, 68)";
  month3.style.boxShadow = "none";

  month4.style.border = "1px solid rgb(50, 58, 68)";
  month4.style.boxShadow = "none";

  month5.style.border = "1px solid rgb(50, 58, 68)";
  month5.style.boxShadow = "none";

  month6.style.border = "1px solid rgb(50, 58, 68)";
  month6.style.boxShadow = "none";

  month7.style.border = "1px solid rgb(50, 58, 68)";
  month7.style.boxShadow = "none";
  localStorage.setItem("startMonth", month1.innerHTML);
  startDetailsDisplayDiv.innerHTML = `${localStorage.getItem(
    "weekDay"
  )} ${localStorage.getItem("startDate")} ${localStorage.getItem(
    "startMonth"
  )}, 2021 ${localStorage.getItem("startTime")}`;
}
function setStartMonth2() {
  let month1 = document.getElementById("month1");
  let month2 = document.getElementById("month2");
  let month3 = document.getElementById("month3");
  let month4 = document.getElementById("month4");
  let month5 = document.getElementById("month5");
  let month6 = document.getElementById("month6");
  let month7 = document.getElementById("month7");

  month2.style.border = "2px solid rgb(112, 173, 77)";
  month2.style.boxShadow = "0 4px 12px rgb(0 0 0 / 18%)";

  month1.style.border = "1px solid rgb(50, 58, 68)";
  month1.style.boxShadow = "none";

  month3.style.border = "1px solid rgb(50, 58, 68)";
  month3.style.boxShadow = "none";

  month4.style.border = "1px solid rgb(50, 58, 68)";
  month4.style.boxShadow = "none";

  month5.style.border = "1px solid rgb(50, 58, 68)";
  month5.style.boxShadow = "none";

  month6.style.border = "1px solid rgb(50, 58, 68)";
  month6.style.boxShadow = "none";

  month7.style.border = "1px solid rgb(50, 58, 68)";
  month7.style.boxShadow = "none";
  localStorage.setItem("startMonth", month2.innerHTML);
  startDetailsDisplayDiv.innerHTML = `${localStorage.getItem(
    "weekDay"
  )} ${localStorage.getItem("startDate")} ${localStorage.getItem(
    "startMonth"
  )}, 2021 ${localStorage.getItem("startTime")}`;
}
function setStartMonth3() {
  let month1 = document.getElementById("month1");
  let month2 = document.getElementById("month2");
  let month3 = document.getElementById("month3");
  let month4 = document.getElementById("month4");
  let month5 = document.getElementById("month5");
  let month6 = document.getElementById("month6");
  let month7 = document.getElementById("month7");

  month3.style.border = "2px solid rgb(112, 173, 77)";
  month3.style.boxShadow = "0 4px 12px rgb(0 0 0 / 18%)";

  month1.style.border = "1px solid rgb(50, 58, 68)";
  month1.style.boxShadow = "none";

  month2.style.border = "1px solid rgb(50, 58, 68)";
  month2.style.boxShadow = "none";

  month4.style.border = "1px solid rgb(50, 58, 68)";
  month4.style.boxShadow = "none";

  month5.style.border = "1px solid rgb(50, 58, 68)";
  month5.style.boxShadow = "none";

  month6.style.border = "1px solid rgb(50, 58, 68)";
  month6.style.boxShadow = "none";

  month7.style.border = "1px solid rgb(50, 58, 68)";
  month7.style.boxShadow = "none";
  localStorage.setItem("startMonth", month3.innerHTML);
  startDetailsDisplayDiv.innerHTML = `${localStorage.getItem(
    "weekDay"
  )} ${localStorage.getItem("startDate")} ${localStorage.getItem(
    "startMonth"
  )}, 2021 ${localStorage.getItem("startTime")}`;
}
function setStartMonth4() {
  let month1 = document.getElementById("month1");
  let month2 = document.getElementById("month2");
  let month3 = document.getElementById("month3");
  let month4 = document.getElementById("month4");
  let month5 = document.getElementById("month5");
  let month6 = document.getElementById("month6");
  let month7 = document.getElementById("month7");

  month4.style.border = "2px solid rgb(112, 173, 77)";
  month4.style.boxShadow = "0 4px 12px rgb(0 0 0 / 18%)";

  month1.style.border = "1px solid rgb(50, 58, 68)";
  month1.style.boxShadow = "none";

  month2.style.border = "1px solid rgb(50, 58, 68)";
  month2.style.boxShadow = "none";

  month3.style.border = "1px solid rgb(50, 58, 68)";
  month3.style.boxShadow = "none";

  month5.style.border = "1px solid rgb(50, 58, 68)";
  month5.style.boxShadow = "none";

  month6.style.border = "1px solid rgb(50, 58, 68)";
  month6.style.boxShadow = "none";

  month7.style.border = "1px solid rgb(50, 58, 68)";
  month7.style.boxShadow = "none";
  localStorage.setItem("startMonth", month4.innerHTML);
  startDetailsDisplayDiv.innerHTML = `${localStorage.getItem(
    "weekDay"
  )} ${localStorage.getItem("startDate")} ${localStorage.getItem(
    "startMonth"
  )}, 2021 ${localStorage.getItem("startTime")}`;
}
function setStartMonth5() {
  let month1 = document.getElementById("month1");
  let month2 = document.getElementById("month2");
  let month3 = document.getElementById("month3");
  let month4 = document.getElementById("month4");
  let month5 = document.getElementById("month5");
  let month6 = document.getElementById("month6");
  let month7 = document.getElementById("month7");

  month5.style.border = "2px solid rgb(112, 173, 77)";
  month5.style.boxShadow = "0 4px 12px rgb(0 0 0 / 18%)";

  month1.style.border = "1px solid rgb(50, 58, 68)";
  month1.style.boxShadow = "none";

  month2.style.border = "1px solid rgb(50, 58, 68)";
  month2.style.boxShadow = "none";

  month3.style.border = "1px solid rgb(50, 58, 68)";
  month3.style.boxShadow = "none";

  month4.style.border = "1px solid rgb(50, 58, 68)";
  month4.style.boxShadow = "none";

  month6.style.border = "1px solid rgb(50, 58, 68)";
  month6.style.boxShadow = "none";

  month7.style.border = "1px solid rgb(50, 58, 68)";
  month7.style.boxShadow = "none";
  localStorage.setItem("startMonth", month5.innerHTML);
  startDetailsDisplayDiv.innerHTML = `${localStorage.getItem(
    "weekDay"
  )} ${localStorage.getItem("startDate")} ${localStorage.getItem(
    "startMonth"
  )}, 2021 ${localStorage.getItem("startTime")}`;
}
function setStartMonth6() {
  let month1 = document.getElementById("month1");
  let month2 = document.getElementById("month2");
  let month3 = document.getElementById("month3");
  let month4 = document.getElementById("month4");
  let month5 = document.getElementById("month5");
  let month6 = document.getElementById("month6");
  let month7 = document.getElementById("month7");

  month6.style.border = "2px solid rgb(112, 173, 77)";
  month6.style.boxShadow = "0 4px 12px rgb(0 0 0 / 18%)";

  month1.style.border = "1px solid rgb(50, 58, 68)";
  month1.style.boxShadow = "none";

  month2.style.border = "1px solid rgb(50, 58, 68)";
  month2.style.boxShadow = "none";

  month3.style.border = "1px solid rgb(50, 58, 68)";
  month3.style.boxShadow = "none";

  month4.style.border = "1px solid rgb(50, 58, 68)";
  month4.style.boxShadow = "none";

  month5.style.border = "1px solid rgb(50, 58, 68)";
  month5.style.boxShadow = "none";

  month7.style.border = "1px solid rgb(50, 58, 68)";
  month7.style.boxShadow = "none";
  localStorage.setItem("startMonth", month6.innerHTML);
  startDetailsDisplayDiv.innerHTML = `${localStorage.getItem(
    "weekDay"
  )} ${localStorage.getItem("startDate")} ${localStorage.getItem(
    "startMonth"
  )}, 2021 ${localStorage.getItem("startTime")}`;
}
function setStartMonth7() {
  let month1 = document.getElementById("month1");
  let month2 = document.getElementById("month2");
  let month3 = document.getElementById("month3");
  let month4 = document.getElementById("month4");
  let month5 = document.getElementById("month5");
  let month6 = document.getElementById("month6");
  let month7 = document.getElementById("month7");

  month7.style.border = "2px solid rgb(112, 173, 77)";
  month7.style.boxShadow = "0 4px 12px rgb(0 0 0 / 18%)";

  month1.style.border = "1px solid rgb(50, 58, 68)";
  month1.style.boxShadow = "none";

  month2.style.border = "1px solid rgb(50, 58, 68)";
  month2.style.boxShadow = "none";

  month3.style.border = "1px solid rgb(50, 58, 68)";
  month3.style.boxShadow = "none";

  month4.style.border = "1px solid rgb(50, 58, 68)";
  month4.style.boxShadow = "none";

  month5.style.border = "1px solid rgb(50, 58, 68)";
  month5.style.boxShadow = "none";

  month6.style.border = "1px solid rgb(50, 58, 68)";
  month6.style.boxShadow = "none";
  localStorage.setItem("startMonth", month7.innerHTML);
  startDetailsDisplayDiv.innerHTML = `${localStorage.getItem(
    "weekDay"
  )} ${localStorage.getItem("startDate")} ${localStorage.getItem(
    "startMonth"
  )}, 2021 ${localStorage.getItem("startTime")}`;
}

function setStartDate1() {
  let startDate1 = document.getElementById("day1");
  let startDate2 = document.getElementById("day2");
  let startDate3 = document.getElementById("day3");
  let startDate4 = document.getElementById("day4");
  let startDate5 = document.getElementById("day5");
  let startDate6 = document.getElementById("day6");
  let startDate7 = document.getElementById("day7");

  let weekday1 = document.getElementById("weekday1");
  let weekday2 = document.getElementById("weekday2");
  let weekday3 = document.getElementById("weekday3");
  let weekday4 = document.getElementById("weekday4");
  let weekday5 = document.getElementById("weekday5");
  let weekday6 = document.getElementById("weekday6");
  let weekday7 = document.getElementById("weekday7");

  let date1 = document.getElementById("date1");
  let date2 = document.getElementById("date2");
  let date3 = document.getElementById("date3");
  let date4 = document.getElementById("date4");
  let date5 = document.getElementById("date5");
  let date6 = document.getElementById("date6");
  let date7 = document.getElementById("date7");

  startDate1.style.border = "2px solid rgb(112, 173, 77)";
  startDate1.style.boxShadow = "0 4px 12px rgb(0 0 0 / 18%)";

  startDate2.style.border = "1px solid rgb(50, 58, 68)";
  startDate2.style.boxShadow = "none";

  startDate3.style.border = "1px solid rgb(50, 58, 68)";
  startDate3.style.boxShadow = "none";

  startDate4.style.border = "1px solid rgb(50, 58, 68)";
  startDate4.style.boxShadow = "none";

  startDate5.style.border = "1px solid rgb(50, 58, 68)";
  startDate5.style.boxShadow = "none";

  startDate6.style.border = "1px solid rgb(50, 58, 68)";
  startDate6.style.boxShadow = "none";

  startDate7.style.border = "1px solid rgb(50, 58, 68)";
  startDate7.style.boxShadow = "none";
  localStorage.setItem("startDate", date1.innerHTML);
  localStorage.setItem("weekDay", weekday1.innerHTML);
  startDetailsDisplayDiv.innerHTML = `${localStorage.getItem(
    "weekDay"
  )} ${localStorage.getItem("startDate")} ${localStorage.getItem(
    "startMonth"
  )}, 2021 ${localStorage.getItem("startTime")}`;
  setStartMonth1();
}
function setStartDate2() {
  let startDate1 = document.getElementById("day1");
  let startDate2 = document.getElementById("day2");
  let startDate3 = document.getElementById("day3");
  let startDate4 = document.getElementById("day4");
  let startDate5 = document.getElementById("day5");
  let startDate6 = document.getElementById("day6");
  let startDate7 = document.getElementById("day7");

  let weekday1 = document.getElementById("weekday1");
  let weekday2 = document.getElementById("weekday2");
  let weekday3 = document.getElementById("weekday3");
  let weekday4 = document.getElementById("weekday4");
  let weekday5 = document.getElementById("weekday5");
  let weekday6 = document.getElementById("weekday6");
  let weekday7 = document.getElementById("weekday7");

  let date1 = document.getElementById("date1");
  let date2 = document.getElementById("date2");
  let date3 = document.getElementById("date3");
  let date4 = document.getElementById("date4");
  let date5 = document.getElementById("date5");
  let date6 = document.getElementById("date6");
  let date7 = document.getElementById("date7");

  startDate2.style.border = "2px solid rgb(112, 173, 77)";
  startDate2.style.boxShadow = "0 4px 12px rgb(0 0 0 / 18%)";

  startDate1.style.border = "1px solid rgb(50, 58, 68)";
  startDate1.style.boxShadow = "none";

  startDate3.style.border = "1px solid rgb(50, 58, 68)";
  startDate3.style.boxShadow = "none";

  startDate4.style.border = "1px solid rgb(50, 58, 68)";
  startDate4.style.boxShadow = "none";

  startDate5.style.border = "1px solid rgb(50, 58, 68)";
  startDate5.style.boxShadow = "none";

  startDate6.style.border = "1px solid rgb(50, 58, 68)";
  startDate6.style.boxShadow = "none";

  startDate7.style.border = "1px solid rgb(50, 58, 68)";
  startDate7.style.boxShadow = "none";
  localStorage.setItem("startDate", date2.innerHTML);
  localStorage.setItem("weekDay", weekday2.innerHTML);
  startDetailsDisplayDiv.innerHTML = `${localStorage.getItem(
    "weekDay"
  )} ${localStorage.getItem("startDate")} ${localStorage.getItem(
    "startMonth"
  )}, 2021 ${localStorage.getItem("startTime")}`;
  setStartMonth1();
}
function setStartDate3() {
  let startDate1 = document.getElementById("day1");
  let startDate2 = document.getElementById("day2");
  let startDate3 = document.getElementById("day3");
  let startDate4 = document.getElementById("day4");
  let startDate5 = document.getElementById("day5");
  let startDate6 = document.getElementById("day6");
  let startDate7 = document.getElementById("day7");

  let weekday1 = document.getElementById("weekday1");
  let weekday2 = document.getElementById("weekday2");
  let weekday3 = document.getElementById("weekday3");
  let weekday4 = document.getElementById("weekday4");
  let weekday5 = document.getElementById("weekday5");
  let weekday6 = document.getElementById("weekday6");
  let weekday7 = document.getElementById("weekday7");

  let date1 = document.getElementById("date1");
  let date2 = document.getElementById("date2");
  let date3 = document.getElementById("date3");
  let date4 = document.getElementById("date4");
  let date5 = document.getElementById("date5");
  let date6 = document.getElementById("date6");
  let date7 = document.getElementById("date7");

  startDate3.style.border = "2px solid rgb(112, 173, 77)";
  startDate3.style.boxShadow = "0 4px 12px rgb(0 0 0 / 18%)";

  startDate1.style.border = "1px solid rgb(50, 58, 68)";
  startDate1.style.boxShadow = "none";

  startDate2.style.border = "1px solid rgb(50, 58, 68)";
  startDate2.style.boxShadow = "none";

  startDate4.style.border = "1px solid rgb(50, 58, 68)";
  startDate4.style.boxShadow = "none";

  startDate5.style.border = "1px solid rgb(50, 58, 68)";
  startDate5.style.boxShadow = "none";

  startDate6.style.border = "1px solid rgb(50, 58, 68)";
  startDate6.style.boxShadow = "none";

  startDate7.style.border = "1px solid rgb(50, 58, 68)";
  startDate7.style.boxShadow = "none";
  localStorage.setItem("startDate", date3.innerHTML);
  localStorage.setItem("weekDay", weekday3.innerHTML);
  startDetailsDisplayDiv.innerHTML = `${localStorage.getItem(
    "weekDay"
  )} ${localStorage.getItem("startDate")} ${localStorage.getItem(
    "startMonth"
  )}, 2021 ${localStorage.getItem("startTime")}`;
  setStartMonth1();
}
function setStartDate4() {
  let startDate1 = document.getElementById("day1");
  let startDate2 = document.getElementById("day2");
  let startDate3 = document.getElementById("day3");
  let startDate4 = document.getElementById("day4");
  let startDate5 = document.getElementById("day5");
  let startDate6 = document.getElementById("day6");
  let startDate7 = document.getElementById("day7");

  let weekday1 = document.getElementById("weekday1");
  let weekday2 = document.getElementById("weekday2");
  let weekday3 = document.getElementById("weekday3");
  let weekday4 = document.getElementById("weekday4");
  let weekday5 = document.getElementById("weekday5");
  let weekday6 = document.getElementById("weekday6");
  let weekday7 = document.getElementById("weekday7");

  let date1 = document.getElementById("date1");
  let date2 = document.getElementById("date2");
  let date3 = document.getElementById("date3");
  let date4 = document.getElementById("date4");
  let date5 = document.getElementById("date5");
  let date6 = document.getElementById("date6");
  let date7 = document.getElementById("date7");

  startDate4.style.border = "2px solid rgb(112, 173, 77)";
  startDate4.style.boxShadow = "0 4px 12px rgb(0 0 0 / 18%)";

  startDate1.style.border = "1px solid rgb(50, 58, 68)";
  startDate1.style.boxShadow = "none";

  startDate2.style.border = "1px solid rgb(50, 58, 68)";
  startDate2.style.boxShadow = "none";

  startDate3.style.border = "1px solid rgb(50, 58, 68)";
  startDate3.style.boxShadow = "none";

  startDate5.style.border = "1px solid rgb(50, 58, 68)";
  startDate5.style.boxShadow = "none";

  startDate6.style.border = "1px solid rgb(50, 58, 68)";
  startDate6.style.boxShadow = "none";

  startDate7.style.border = "1px solid rgb(50, 58, 68)";
  startDate7.style.boxShadow = "none";
  localStorage.setItem("startDate", date4.innerHTML);
  localStorage.setItem("weekDay", weekday4.innerHTML);
  startDetailsDisplayDiv.innerHTML = `${localStorage.getItem(
    "weekDay"
  )} ${localStorage.getItem("startDate")} ${localStorage.getItem(
    "startMonth"
  )}, 2021 ${localStorage.getItem("startTime")}`;
  setStartMonth2();
}
function setStartDate5() {
  let startDate1 = document.getElementById("day1");
  let startDate2 = document.getElementById("day2");
  let startDate3 = document.getElementById("day3");
  let startDate4 = document.getElementById("day4");
  let startDate5 = document.getElementById("day5");
  let startDate6 = document.getElementById("day6");
  let startDate7 = document.getElementById("day7");

  let weekday1 = document.getElementById("weekday1");
  let weekday2 = document.getElementById("weekday2");
  let weekday3 = document.getElementById("weekday3");
  let weekday4 = document.getElementById("weekday4");
  let weekday5 = document.getElementById("weekday5");
  let weekday6 = document.getElementById("weekday6");
  let weekday7 = document.getElementById("weekday7");

  let date1 = document.getElementById("date1");
  let date2 = document.getElementById("date2");
  let date3 = document.getElementById("date3");
  let date4 = document.getElementById("date4");
  let date5 = document.getElementById("date5");
  let date6 = document.getElementById("date6");
  let date7 = document.getElementById("date7");

  startDate5.style.border = "2px solid rgb(112, 173, 77)";
  startDate5.style.boxShadow = "0 4px 12px rgb(0 0 0 / 18%)";

  startDate1.style.border = "1px solid rgb(50, 58, 68)";
  startDate1.style.boxShadow = "none";

  startDate2.style.border = "1px solid rgb(50, 58, 68)";
  startDate2.style.boxShadow = "none";

  startDate3.style.border = "1px solid rgb(50, 58, 68)";
  startDate3.style.boxShadow = "none";

  startDate4.style.border = "1px solid rgb(50, 58, 68)";
  startDate4.style.boxShadow = "none";

  startDate6.style.border = "1px solid rgb(50, 58, 68)";
  startDate6.style.boxShadow = "none";

  startDate7.style.border = "1px solid rgb(50, 58, 68)";
  startDate7.style.boxShadow = "none";
  localStorage.setItem("startDate", date5.innerHTML);
  localStorage.setItem("weekDay", weekday5.innerHTML);
  startDetailsDisplayDiv.innerHTML = `${localStorage.getItem(
    "weekDay"
  )} ${localStorage.getItem("startDate")} ${localStorage.getItem(
    "startMonth"
  )}, 2021 ${localStorage.getItem("startTime")}`;
  setStartMonth2();
}

function setStartDate6() {
  let startDate1 = document.getElementById("day1");
  let startDate2 = document.getElementById("day2");
  let startDate3 = document.getElementById("day3");
  let startDate4 = document.getElementById("day4");
  let startDate5 = document.getElementById("day5");
  let startDate6 = document.getElementById("day6");
  let startDate7 = document.getElementById("day7");

  let weekday1 = document.getElementById("weekday1");
  let weekday2 = document.getElementById("weekday2");
  let weekday3 = document.getElementById("weekday3");
  let weekday4 = document.getElementById("weekday4");
  let weekday5 = document.getElementById("weekday5");
  let weekday6 = document.getElementById("weekday6");
  let weekday7 = document.getElementById("weekday7");

  let date1 = document.getElementById("date1");
  let date2 = document.getElementById("date2");
  let date3 = document.getElementById("date3");
  let date4 = document.getElementById("date4");
  let date5 = document.getElementById("date5");
  let date6 = document.getElementById("date6");
  let date7 = document.getElementById("date7");

  startDate6.style.border = "2px solid rgb(112, 173, 77)";
  startDate6.style.boxShadow = "0 4px 12px rgb(0 0 0 / 18%)";

  startDate1.style.border = "1px solid rgb(50, 58, 68)";
  startDate1.style.boxShadow = "none";

  startDate2.style.border = "1px solid rgb(50, 58, 68)";
  startDate2.style.boxShadow = "none";

  startDate3.style.border = "1px solid rgb(50, 58, 68)";
  startDate3.style.boxShadow = "none";

  startDate4.style.border = "1px solid rgb(50, 58, 68)";
  startDate4.style.boxShadow = "none";

  startDate5.style.border = "1px solid rgb(50, 58, 68)";
  startDate5.style.boxShadow = "none";

  startDate7.style.border = "1px solid rgb(50, 58, 68)";
  startDate7.style.boxShadow = "none";
  localStorage.setItem("startDate", date6.innerHTML);
  localStorage.setItem("weekDay", weekday6.innerHTML);
  startDetailsDisplayDiv.innerHTML = `${localStorage.getItem(
    "weekDay"
  )} ${localStorage.getItem("startDate")} ${localStorage.getItem(
    "startMonth"
  )}, 2021 ${localStorage.getItem("startTime")}`;
  setStartMonth2();
}

function setStartDate7() {
  let startDate1 = document.getElementById("day1");
  let startDate2 = document.getElementById("day2");
  let startDate3 = document.getElementById("day3");
  let startDate4 = document.getElementById("day4");
  let startDate5 = document.getElementById("day5");
  let startDate6 = document.getElementById("day6");
  let startDate7 = document.getElementById("day7");

  let weekday1 = document.getElementById("weekday1");
  let weekday2 = document.getElementById("weekday2");
  let weekday3 = document.getElementById("weekday3");
  let weekday4 = document.getElementById("weekday4");
  let weekday5 = document.getElementById("weekday5");
  let weekday6 = document.getElementById("weekday6");
  let weekday7 = document.getElementById("weekday7");

  let date1 = document.getElementById("date1");
  let date2 = document.getElementById("date2");
  let date3 = document.getElementById("date3");
  let date4 = document.getElementById("date4");
  let date5 = document.getElementById("date5");
  let date6 = document.getElementById("date6");
  let date7 = document.getElementById("date7");

  startDate7.style.border = "2px solid rgb(112, 173, 77)";
  startDate7.style.boxShadow = "0 4px 12px rgb(0 0 0 / 18%)";

  startDate1.style.border = "1px solid rgb(50, 58, 68)";
  startDate1.style.boxShadow = "none";

  startDate2.style.border = "1px solid rgb(50, 58, 68)";
  startDate2.style.boxShadow = "none";

  startDate3.style.border = "1px solid rgb(50, 58, 68)";
  startDate3.style.boxShadow = "none";

  startDate4.style.border = "1px solid rgb(50, 58, 68)";
  startDate4.style.boxShadow = "none";

  startDate5.style.border = "1px solid rgb(50, 58, 68)";
  startDate5.style.boxShadow = "none";

  startDate6.style.border = "1px solid rgb(50, 58, 68)";
  startDate6.style.boxShadow = "none";
  localStorage.setItem("startDate", date7.innerHTML);
  localStorage.setItem("weekDay", weekday7.innerHTML);
  startDetailsDisplayDiv.innerHTML = `${localStorage.getItem(
    "weekDay"
  )} ${localStorage.getItem("startDate")} ${localStorage.getItem(
    "startMonth"
  )}, 2021 ${localStorage.getItem("startTime")}`;
  setStartMonth2();
}

function setStartTime1() {
  let time1 = document.getElementById("time1");
  let time2 = document.getElementById("time2");
  let time3 = document.getElementById("time3");
  let time4 = document.getElementById("time4");
  let time5 = document.getElementById("time5");
  let time6 = document.getElementById("time6");
  let time7 = document.getElementById("time7");
  let time8 = document.getElementById("time8");
  let time9 = document.getElementById("time9");
  let time10 = document.getElementById("time10");
  let time11 = document.getElementById("time11");
  let time12 = document.getElementById("time12");

  time1.style.border = "2px solid rgb(112, 173, 77)";
  time1.style.boxShadow = "0 4px 12px rgb(0 0 0 / 18%)";

  time2.style.border = "1px solid rgb(50, 58, 68)";
  time2.style.boxShadow = "none";

  time3.style.border = "1px solid rgb(50, 58, 68)";
  time3.style.boxShadow = "none";

  time4.style.border = "1px solid rgb(50, 58, 68)";
  time4.style.boxShadow = "none";

  time5.style.border = "1px solid rgb(50, 58, 68)";
  time5.style.boxShadow = "none";

  time6.style.border = "1px solid rgb(50, 58, 68)";
  time6.style.boxShadow = "none";

  time7.style.border = "1px solid rgb(50, 58, 68)";
  time7.style.boxShadow = "none";

  time8.style.border = "1px solid rgb(50, 58, 68)";
  time8.style.boxShadow = "none";

  time9.style.border = "1px solid rgb(50, 58, 68)";
  time9.style.boxShadow = "none";

  time10.style.border = "1px solid rgb(50, 58, 68)";
  time10.style.boxShadow = "none";

  time11.style.border = "1px solid rgb(50, 58, 68)";
  time11.style.boxShadow = "none";

  time12.style.border = "1px solid rgb(50, 58, 68)";
  time12.style.boxShadow = "none";
  localStorage.setItem("startTime", "00:00");
  startDetailsDisplayDiv.innerHTML = `${localStorage.getItem(
    "weekDay"
  )} ${localStorage.getItem("startDate")} ${localStorage.getItem(
    "startMonth"
  )}, 2021 ${localStorage.getItem("startTime")}`;
}
function setStartTime2() {
  let time1 = document.getElementById("time1");
  let time2 = document.getElementById("time2");
  let time3 = document.getElementById("time3");
  let time4 = document.getElementById("time4");
  let time5 = document.getElementById("time5");
  let time6 = document.getElementById("time6");
  let time7 = document.getElementById("time7");
  let time8 = document.getElementById("time8");
  let time9 = document.getElementById("time9");
  let time10 = document.getElementById("time10");
  let time11 = document.getElementById("time11");
  let time12 = document.getElementById("time12");

  time2.style.border = "2px solid rgb(112, 173, 77)";
  time2.style.boxShadow = "0 4px 12px rgb(0 0 0 / 18%)";

  time1.style.border = "1px solid rgb(50, 58, 68)";
  time1.style.boxShadow = "none";

  time3.style.border = "1px solid rgb(50, 58, 68)";
  time3.style.boxShadow = "none";

  time4.style.border = "1px solid rgb(50, 58, 68)";
  time4.style.boxShadow = "none";

  time5.style.border = "1px solid rgb(50, 58, 68)";
  time5.style.boxShadow = "none";

  time6.style.border = "1px solid rgb(50, 58, 68)";
  time6.style.boxShadow = "none";

  time7.style.border = "1px solid rgb(50, 58, 68)";
  time7.style.boxShadow = "none";

  time8.style.border = "1px solid rgb(50, 58, 68)";
  time8.style.boxShadow = "none";

  time9.style.border = "1px solid rgb(50, 58, 68)";
  time9.style.boxShadow = "none";

  time10.style.border = "1px solid rgb(50, 58, 68)";
  time10.style.boxShadow = "none";

  time11.style.border = "1px solid rgb(50, 58, 68)";
  time11.style.boxShadow = "none";

  time12.style.border = "1px solid rgb(50, 58, 68)";
  time12.style.boxShadow = "none";
  localStorage.setItem("startTime", "02:00");
  startDetailsDisplayDiv.innerHTML = `${localStorage.getItem(
    "weekDay"
  )} ${localStorage.getItem("startDate")} ${localStorage.getItem(
    "startMonth"
  )}, 2021 ${localStorage.getItem("startTime")}`;
}
function setStartTime3() {
  let time1 = document.getElementById("time1");
  let time2 = document.getElementById("time2");
  let time3 = document.getElementById("time3");
  let time4 = document.getElementById("time4");
  let time5 = document.getElementById("time5");
  let time6 = document.getElementById("time6");
  let time7 = document.getElementById("time7");
  let time8 = document.getElementById("time8");
  let time9 = document.getElementById("time9");
  let time10 = document.getElementById("time10");
  let time11 = document.getElementById("time11");
  let time12 = document.getElementById("time12");

  time3.style.border = "2px solid rgb(112, 173, 77)";
  time3.style.boxShadow = "0 4px 12px rgb(0 0 0 / 18%)";

  time2.style.border = "1px solid rgb(50, 58, 68)";
  time2.style.boxShadow = "none";

  time1.style.border = "1px solid rgb(50, 58, 68)";
  time1.style.boxShadow = "none";

  time4.style.border = "1px solid rgb(50, 58, 68)";
  time4.style.boxShadow = "none";

  time5.style.border = "1px solid rgb(50, 58, 68)";
  time5.style.boxShadow = "none";

  time6.style.border = "1px solid rgb(50, 58, 68)";
  time6.style.boxShadow = "none";

  time7.style.border = "1px solid rgb(50, 58, 68)";
  time7.style.boxShadow = "none";

  time8.style.border = "1px solid rgb(50, 58, 68)";
  time8.style.boxShadow = "none";

  time9.style.border = "1px solid rgb(50, 58, 68)";
  time9.style.boxShadow = "none";

  time10.style.border = "1px solid rgb(50, 58, 68)";
  time10.style.boxShadow = "none";

  time11.style.border = "1px solid rgb(50, 58, 68)";
  time11.style.boxShadow = "none";

  time12.style.border = "1px solid rgb(50, 58, 68)";
  time12.style.boxShadow = "none";
  localStorage.setItem("startTime", "04:00");
  startDetailsDisplayDiv.innerHTML = `${localStorage.getItem(
    "weekDay"
  )} ${localStorage.getItem("startDate")} ${localStorage.getItem(
    "startMonth"
  )}, 2021 ${localStorage.getItem("startTime")}`;
}
function setStartTime4() {
  let time1 = document.getElementById("time1");
  let time2 = document.getElementById("time2");
  let time3 = document.getElementById("time3");
  let time4 = document.getElementById("time4");
  let time5 = document.getElementById("time5");
  let time6 = document.getElementById("time6");
  let time7 = document.getElementById("time7");
  let time8 = document.getElementById("time8");
  let time9 = document.getElementById("time9");
  let time10 = document.getElementById("time10");
  let time11 = document.getElementById("time11");
  let time12 = document.getElementById("time12");

  time4.style.border = "2px solid rgb(112, 173, 77)";
  time4.style.boxShadow = "0 4px 12px rgb(0 0 0 / 18%)";

  time2.style.border = "1px solid rgb(50, 58, 68)";
  time2.style.boxShadow = "none";

  time3.style.border = "1px solid rgb(50, 58, 68)";
  time3.style.boxShadow = "none";

  time1.style.border = "1px solid rgb(50, 58, 68)";
  time1.style.boxShadow = "none";

  time5.style.border = "1px solid rgb(50, 58, 68)";
  time5.style.boxShadow = "none";

  time6.style.border = "1px solid rgb(50, 58, 68)";
  time6.style.boxShadow = "none";

  time7.style.border = "1px solid rgb(50, 58, 68)";
  time7.style.boxShadow = "none";

  time8.style.border = "1px solid rgb(50, 58, 68)";
  time8.style.boxShadow = "none";

  time9.style.border = "1px solid rgb(50, 58, 68)";
  time9.style.boxShadow = "none";

  time10.style.border = "1px solid rgb(50, 58, 68)";
  time10.style.boxShadow = "none";

  time11.style.border = "1px solid rgb(50, 58, 68)";
  time11.style.boxShadow = "none";

  time12.style.border = "1px solid rgb(50, 58, 68)";
  time12.style.boxShadow = "none";
  localStorage.setItem("startTime", "06:00");
  startDetailsDisplayDiv.innerHTML = `${localStorage.getItem(
    "weekDay"
  )} ${localStorage.getItem("startDate")} ${localStorage.getItem(
    "startMonth"
  )}, 2021 ${localStorage.getItem("startTime")}`;
}
function setStartTime5() {
  let time1 = document.getElementById("time1");
  let time2 = document.getElementById("time2");
  let time3 = document.getElementById("time3");
  let time4 = document.getElementById("time4");
  let time5 = document.getElementById("time5");
  let time6 = document.getElementById("time6");
  let time7 = document.getElementById("time7");
  let time8 = document.getElementById("time8");
  let time9 = document.getElementById("time9");
  let time10 = document.getElementById("time10");
  let time11 = document.getElementById("time11");
  let time12 = document.getElementById("time12");

  time5.style.border = "2px solid rgb(112, 173, 77)";
  time5.style.boxShadow = "0 4px 12px rgb(0 0 0 / 18%)";

  time2.style.border = "1px solid rgb(50, 58, 68)";
  time2.style.boxShadow = "none";

  time3.style.border = "1px solid rgb(50, 58, 68)";
  time3.style.boxShadow = "none";

  time4.style.border = "1px solid rgb(50, 58, 68)";
  time4.style.boxShadow = "none";

  time1.style.border = "1px solid rgb(50, 58, 68)";
  time1.style.boxShadow = "none";

  time6.style.border = "1px solid rgb(50, 58, 68)";
  time6.style.boxShadow = "none";

  time7.style.border = "1px solid rgb(50, 58, 68)";
  time7.style.boxShadow = "none";

  time8.style.border = "1px solid rgb(50, 58, 68)";
  time8.style.boxShadow = "none";

  time9.style.border = "1px solid rgb(50, 58, 68)";
  time9.style.boxShadow = "none";

  time10.style.border = "1px solid rgb(50, 58, 68)";
  time10.style.boxShadow = "none";

  time11.style.border = "1px solid rgb(50, 58, 68)";
  time11.style.boxShadow = "none";

  time12.style.border = "1px solid rgb(50, 58, 68)";
  time12.style.boxShadow = "none";
  localStorage.setItem("startTime", "08:00");
  startDetailsDisplayDiv.innerHTML = `${localStorage.getItem(
    "weekDay"
  )} ${localStorage.getItem("startDate")} ${localStorage.getItem(
    "startMonth"
  )}, 2021 ${localStorage.getItem("startTime")}`;
}
function setStartTime6() {
  let time1 = document.getElementById("time1");
  let time2 = document.getElementById("time2");
  let time3 = document.getElementById("time3");
  let time4 = document.getElementById("time4");
  let time5 = document.getElementById("time5");
  let time6 = document.getElementById("time6");
  let time7 = document.getElementById("time7");
  let time8 = document.getElementById("time8");
  let time9 = document.getElementById("time9");
  let time10 = document.getElementById("time10");
  let time11 = document.getElementById("time11");
  let time12 = document.getElementById("time12");

  time6.style.border = "2px solid rgb(112, 173, 77)";
  time6.style.boxShadow = "0 4px 12px rgb(0 0 0 / 18%)";

  time2.style.border = "1px solid rgb(50, 58, 68)";
  time2.style.boxShadow = "none";

  time3.style.border = "1px solid rgb(50, 58, 68)";
  time3.style.boxShadow = "none";

  time4.style.border = "1px solid rgb(50, 58, 68)";
  time4.style.boxShadow = "none";

  time5.style.border = "1px solid rgb(50, 58, 68)";
  time5.style.boxShadow = "none";

  time1.style.border = "1px solid rgb(50, 58, 68)";
  time1.style.boxShadow = "none";

  time7.style.border = "1px solid rgb(50, 58, 68)";
  time7.style.boxShadow = "none";

  time8.style.border = "1px solid rgb(50, 58, 68)";
  time8.style.boxShadow = "none";

  time9.style.border = "1px solid rgb(50, 58, 68)";
  time9.style.boxShadow = "none";

  time10.style.border = "1px solid rgb(50, 58, 68)";
  time10.style.boxShadow = "none";

  time11.style.border = "1px solid rgb(50, 58, 68)";
  time11.style.boxShadow = "none";

  time12.style.border = "1px solid rgb(50, 58, 68)";
  time12.style.boxShadow = "none";
  localStorage.setItem("startTime", "10:00");
  startDetailsDisplayDiv.innerHTML = `${localStorage.getItem(
    "weekDay"
  )} ${localStorage.getItem("startDate")} ${localStorage.getItem(
    "startMonth"
  )}, 2021 ${localStorage.getItem("startTime")}`;
}
function setStartTime7() {
  let time1 = document.getElementById("time1");
  let time2 = document.getElementById("time2");
  let time3 = document.getElementById("time3");
  let time4 = document.getElementById("time4");
  let time5 = document.getElementById("time5");
  let time6 = document.getElementById("time6");
  let time7 = document.getElementById("time7");
  let time8 = document.getElementById("time8");
  let time9 = document.getElementById("time9");
  let time10 = document.getElementById("time10");
  let time11 = document.getElementById("time11");
  let time12 = document.getElementById("time12");

  time7.style.border = "2px solid rgb(112, 173, 77)";
  time7.style.boxShadow = "0 4px 12px rgb(0 0 0 / 18%)";

  time2.style.border = "1px solid rgb(50, 58, 68)";
  time2.style.boxShadow = "none";

  time3.style.border = "1px solid rgb(50, 58, 68)";
  time3.style.boxShadow = "none";

  time4.style.border = "1px solid rgb(50, 58, 68)";
  time4.style.boxShadow = "none";

  time5.style.border = "1px solid rgb(50, 58, 68)";
  time5.style.boxShadow = "none";

  time6.style.border = "1px solid rgb(50, 58, 68)";
  time6.style.boxShadow = "none";

  time1.style.border = "1px solid rgb(50, 58, 68)";
  time1.style.boxShadow = "none";

  time8.style.border = "1px solid rgb(50, 58, 68)";
  time8.style.boxShadow = "none";

  time9.style.border = "1px solid rgb(50, 58, 68)";
  time9.style.boxShadow = "none";

  time10.style.border = "1px solid rgb(50, 58, 68)";
  time10.style.boxShadow = "none";

  time11.style.border = "1px solid rgb(50, 58, 68)";
  time11.style.boxShadow = "none";

  time12.style.border = "1px solid rgb(50, 58, 68)";
  time12.style.boxShadow = "none";
  localStorage.setItem("startTime", "12:00");
  startDetailsDisplayDiv.innerHTML = `${localStorage.getItem(
    "weekDay"
  )} ${localStorage.getItem("startDate")} ${localStorage.getItem(
    "startMonth"
  )}, 2021 ${localStorage.getItem("startTime")}`;
}
function setStartTime8() {
  let time1 = document.getElementById("time1");
  let time2 = document.getElementById("time2");
  let time3 = document.getElementById("time3");
  let time4 = document.getElementById("time4");
  let time5 = document.getElementById("time5");
  let time6 = document.getElementById("time6");
  let time7 = document.getElementById("time7");
  let time8 = document.getElementById("time8");
  let time9 = document.getElementById("time9");
  let time10 = document.getElementById("time10");
  let time11 = document.getElementById("time11");
  let time12 = document.getElementById("time12");

  time8.style.border = "2px solid rgb(112, 173, 77)";
  time8.style.boxShadow = "0 4px 12px rgb(0 0 0 / 18%)";

  time2.style.border = "1px solid rgb(50, 58, 68)";
  time2.style.boxShadow = "none";

  time3.style.border = "1px solid rgb(50, 58, 68)";
  time3.style.boxShadow = "none";

  time4.style.border = "1px solid rgb(50, 58, 68)";
  time4.style.boxShadow = "none";

  time5.style.border = "1px solid rgb(50, 58, 68)";
  time5.style.boxShadow = "none";

  time6.style.border = "1px solid rgb(50, 58, 68)";
  time6.style.boxShadow = "none";

  time7.style.border = "1px solid rgb(50, 58, 68)";
  time7.style.boxShadow = "none";

  time1.style.border = "1px solid rgb(50, 58, 68)";
  time1.style.boxShadow = "none";

  time9.style.border = "1px solid rgb(50, 58, 68)";
  time9.style.boxShadow = "none";

  time10.style.border = "1px solid rgb(50, 58, 68)";
  time10.style.boxShadow = "none";

  time11.style.border = "1px solid rgb(50, 58, 68)";
  time11.style.boxShadow = "none";

  time12.style.border = "1px solid rgb(50, 58, 68)";
  time12.style.boxShadow = "none";
  localStorage.setItem("startTime", "14:00");
  startDetailsDisplayDiv.innerHTML = `${localStorage.getItem(
    "weekDay"
  )} ${localStorage.getItem("startDate")} ${localStorage.getItem(
    "startMonth"
  )}, 2021 ${localStorage.getItem("startTime")}`;
}
function setStartTime9() {
  let time1 = document.getElementById("time1");
  let time2 = document.getElementById("time2");
  let time3 = document.getElementById("time3");
  let time4 = document.getElementById("time4");
  let time5 = document.getElementById("time5");
  let time6 = document.getElementById("time6");
  let time7 = document.getElementById("time7");
  let time8 = document.getElementById("time8");
  let time9 = document.getElementById("time9");
  let time10 = document.getElementById("time10");
  let time11 = document.getElementById("time11");
  let time12 = document.getElementById("time12");

  time9.style.border = "2px solid rgb(112, 173, 77)";
  time9.style.boxShadow = "0 4px 12px rgb(0 0 0 / 18%)";

  time2.style.border = "1px solid rgb(50, 58, 68)";
  time2.style.boxShadow = "none";

  time3.style.border = "1px solid rgb(50, 58, 68)";
  time3.style.boxShadow = "none";

  time4.style.border = "1px solid rgb(50, 58, 68)";
  time4.style.boxShadow = "none";

  time5.style.border = "1px solid rgb(50, 58, 68)";
  time5.style.boxShadow = "none";

  time6.style.border = "1px solid rgb(50, 58, 68)";
  time6.style.boxShadow = "none";

  time7.style.border = "1px solid rgb(50, 58, 68)";
  time7.style.boxShadow = "none";

  time8.style.border = "1px solid rgb(50, 58, 68)";
  time8.style.boxShadow = "none";

  time1.style.border = "1px solid rgb(50, 58, 68)";
  time1.style.boxShadow = "none";

  time10.style.border = "1px solid rgb(50, 58, 68)";
  time10.style.boxShadow = "none";

  time11.style.border = "1px solid rgb(50, 58, 68)";
  time11.style.boxShadow = "none";

  time12.style.border = "1px solid rgb(50, 58, 68)";
  time12.style.boxShadow = "none";
  localStorage.setItem("startTime", "16:00");
  startDetailsDisplayDiv.innerHTML = `${localStorage.getItem(
    "weekDay"
  )} ${localStorage.getItem("startDate")} ${localStorage.getItem(
    "startMonth"
  )}, 2021 ${localStorage.getItem("startTime")}`;
}
function setStartTime10() {
  let time1 = document.getElementById("time1");
  let time2 = document.getElementById("time2");
  let time3 = document.getElementById("time3");
  let time4 = document.getElementById("time4");
  let time5 = document.getElementById("time5");
  let time6 = document.getElementById("time6");
  let time7 = document.getElementById("time7");
  let time8 = document.getElementById("time8");
  let time9 = document.getElementById("time9");
  let time10 = document.getElementById("time10");
  let time11 = document.getElementById("time11");
  let time12 = document.getElementById("time12");

  time10.style.border = "2px solid rgb(112, 173, 77)";
  time10.style.boxShadow = "0 4px 12px rgb(0 0 0 / 18%)";

  time2.style.border = "1px solid rgb(50, 58, 68)";
  time2.style.boxShadow = "none";

  time3.style.border = "1px solid rgb(50, 58, 68)";
  time3.style.boxShadow = "none";

  time4.style.border = "1px solid rgb(50, 58, 68)";
  time4.style.boxShadow = "none";

  time5.style.border = "1px solid rgb(50, 58, 68)";
  time5.style.boxShadow = "none";

  time6.style.border = "1px solid rgb(50, 58, 68)";
  time6.style.boxShadow = "none";

  time7.style.border = "1px solid rgb(50, 58, 68)";
  time7.style.boxShadow = "none";

  time8.style.border = "1px solid rgb(50, 58, 68)";
  time8.style.boxShadow = "none";

  time9.style.border = "1px solid rgb(50, 58, 68)";
  time9.style.boxShadow = "none";

  time1.style.border = "1px solid rgb(50, 58, 68)";
  time1.style.boxShadow = "none";

  time11.style.border = "1px solid rgb(50, 58, 68)";
  time11.style.boxShadow = "none";

  time12.style.border = "1px solid rgb(50, 58, 68)";
  time12.style.boxShadow = "none";
  localStorage.setItem("startTime", "18:00");
  startDetailsDisplayDiv.innerHTML = `${localStorage.getItem(
    "weekDay"
  )} ${localStorage.getItem("startDate")} ${localStorage.getItem(
    "startMonth"
  )}, 2021 ${localStorage.getItem("startTime")}`;
}
function setStartTime11() {
  let time1 = document.getElementById("time1");
  let time2 = document.getElementById("time2");
  let time3 = document.getElementById("time3");
  let time4 = document.getElementById("time4");
  let time5 = document.getElementById("time5");
  let time6 = document.getElementById("time6");
  let time7 = document.getElementById("time7");
  let time8 = document.getElementById("time8");
  let time9 = document.getElementById("time9");
  let time10 = document.getElementById("time10");
  let time11 = document.getElementById("time11");
  let time12 = document.getElementById("time12");

  time11.style.border = "2px solid rgb(112, 173, 77)";
  time11.style.boxShadow = "0 4px 12px rgb(0 0 0 / 18%)";

  time2.style.border = "1px solid rgb(50, 58, 68)";
  time2.style.boxShadow = "none";

  time3.style.border = "1px solid rgb(50, 58, 68)";
  time3.style.boxShadow = "none";

  time4.style.border = "1px solid rgb(50, 58, 68)";
  time4.style.boxShadow = "none";

  time5.style.border = "1px solid rgb(50, 58, 68)";
  time5.style.boxShadow = "none";

  time6.style.border = "1px solid rgb(50, 58, 68)";
  time6.style.boxShadow = "none";

  time7.style.border = "1px solid rgb(50, 58, 68)";
  time7.style.boxShadow = "none";

  time8.style.border = "1px solid rgb(50, 58, 68)";
  time8.style.boxShadow = "none";

  time9.style.border = "1px solid rgb(50, 58, 68)";
  time9.style.boxShadow = "none";

  time10.style.border = "1px solid rgb(50, 58, 68)";
  time10.style.boxShadow = "none";

  time1.style.border = "1px solid rgb(50, 58, 68)";
  time1.style.boxShadow = "none";

  time12.style.border = "1px solid rgb(50, 58, 68)";
  time12.style.boxShadow = "none";
  localStorage.setItem("startTime", "20:00");
  startDetailsDisplayDiv.innerHTML = `${localStorage.getItem(
    "weekDay"
  )} ${localStorage.getItem("startDate")} ${localStorage.getItem(
    "startMonth"
  )}, 2021 ${localStorage.getItem("startTime")}`;
}
function setStartTime12() {
  let time1 = document.getElementById("time1");
  let time2 = document.getElementById("time2");
  let time3 = document.getElementById("time3");
  let time4 = document.getElementById("time4");
  let time5 = document.getElementById("time5");
  let time6 = document.getElementById("time6");
  let time7 = document.getElementById("time7");
  let time8 = document.getElementById("time8");
  let time9 = document.getElementById("time9");
  let time10 = document.getElementById("time10");
  let time11 = document.getElementById("time11");
  let time12 = document.getElementById("time12");

  time12.style.border = "2px solid rgb(112, 173, 77)";
  time12.style.boxShadow = "0 4px 12px rgb(0 0 0 / 18%)";

  time2.style.border = "1px solid rgb(50, 58, 68)";
  time2.style.boxShadow = "none";

  time3.style.border = "1px solid rgb(50, 58, 68)";
  time3.style.boxShadow = "none";

  time4.style.border = "1px solid rgb(50, 58, 68)";
  time4.style.boxShadow = "none";

  time5.style.border = "1px solid rgb(50, 58, 68)";
  time5.style.boxShadow = "none";

  time6.style.border = "1px solid rgb(50, 58, 68)";
  time6.style.boxShadow = "none";

  time7.style.border = "1px solid rgb(50, 58, 68)";
  time7.style.boxShadow = "none";

  time8.style.border = "1px solid rgb(50, 58, 68)";
  time8.style.boxShadow = "none";

  time9.style.border = "1px solid rgb(50, 58, 68)";
  time9.style.boxShadow = "none";

  time10.style.border = "1px solid rgb(50, 58, 68)";
  time10.style.boxShadow = "none";

  time11.style.border = "1px solid rgb(50, 58, 68)";
  time11.style.boxShadow = "none";

  time1.style.border = "1px solid rgb(50, 58, 68)";
  time1.style.boxShadow = "none";
  localStorage.setItem("startTime", "22:00");
  startDetailsDisplayDiv.innerHTML = `${localStorage.getItem(
    "weekDay"
  )} ${localStorage.getItem("startDate")} ${localStorage.getItem(
    "startMonth"
  )}, 2021 ${localStorage.getItem("startTime")}`;
}

function drive1() {
  window.location.href = "../PickuplocationSelection/PickUpLocation.html";
}

FillDates();
setStartDate1();
setStartMonth1();

function FillDates() {
  let mon1 = document.getElementById("month1");
  let mon2 = document.getElementById("month2");
  let mon3 = document.getElementById("month3");
  let mon4 = document.getElementById("month4");
  let mon5 = document.getElementById("month5");
  let mon6 = document.getElementById("month6");
  let mon7 = document.getElementById("month7");
  let months = [
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
  let days = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
  let today = new Date();
  let mon = today.getMonth();
  // console.log("mon:", mon);
  mon1.innerHTML = months[(mon + 0) % 12];
  mon2.innerHTML = months[(mon + 1) % 12];
  mon3.innerHTML = months[(mon + 2) % 12];
  mon4.innerHTML = months[(mon + 3) % 12];
  mon5.innerHTML = months[(mon + 4) % 12];
  mon6.innerHTML = months[(mon + 5) % 12];
  mon7.innerHTML = months[(mon + 6) % 12];

  let weekday1 = document.getElementById("weekday1");
  let weekday2 = document.getElementById("weekday2");
  let weekday3 = document.getElementById("weekday3");
  let weekday4 = document.getElementById("weekday4");
  let weekday5 = document.getElementById("weekday5");
  let weekday6 = document.getElementById("weekday6");
  let weekday7 = document.getElementById("weekday7");

  let date1 = document.getElementById("date1");
  let date2 = document.getElementById("date2");
  let date3 = document.getElementById("date3");
  let date4 = document.getElementById("date4");
  let date5 = document.getElementById("date5");
  let date6 = document.getElementById("date6");
  let date7 = document.getElementById("date7");

  weekday1.innerHTML = days[today.getDay() % 7];
  date1.innerHTML = today.getDate();

  today.setDate(today.getDate() + 1);

  weekday2.innerHTML = days[today.getDay() % 7];
  date2.innerHTML = today.getDate();

  today.setDate(today.getDate() + 1);

  weekday3.innerHTML = days[today.getDay() % 7];
  date3.innerHTML = today.getDate();

  today.setDate(today.getDate() + 1);

  weekday4.innerHTML = days[today.getDay() % 7];
  date4.innerHTML = today.getDate();

  today.setDate(today.getDate() + 1);

  weekday5.innerHTML = days[today.getDay() % 7];
  date5.innerHTML = today.getDate();

  today.setDate(today.getDate() + 1);

  weekday6.innerHTML = days[today.getDay() % 7];
  date6.innerHTML = today.getDate();

  today.setDate(today.getDate() + 1);

  weekday7.innerHTML = days[today.getDay() % 7];
  date7.innerHTML = today.getDate();
}
