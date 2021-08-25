var addressDisplayDiv = document.getElementById("addressDisplay");
addressDisplayDiv.innerHTML = `${localStorage.getItem("address")}`;
var startDetailsDisplayDiv = document.getElementById("startDetailsDisplay");
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
  localStorage.setItem("startMonth", "July");
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
  localStorage.setItem("startMonth", "August");
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
  localStorage.setItem("startMonth", "September");
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
  localStorage.setItem("startMonth", "October");
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
  localStorage.setItem("startMonth", "November");
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
  localStorage.setItem("startMonth", "December");
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
  localStorage.setItem("startMonth", "January");
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
  console.log(document.getElementById("day1"));
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
  localStorage.setItem("startDate", "25");
  localStorage.setItem("weekDay", "Sun");
  startDetailsDisplayDiv.innerHTML = `${localStorage.getItem(
    "weekDay"
  )} ${localStorage.getItem("startDate")} ${localStorage.getItem(
    "startMonth"
  )}, 2021 ${localStorage.getItem("startTime")}`;
}
function setStartDate2() {
  let startDate1 = document.getElementById("day1");
  let startDate2 = document.getElementById("day2");
  let startDate3 = document.getElementById("day3");
  let startDate4 = document.getElementById("day4");
  let startDate5 = document.getElementById("day5");
  let startDate6 = document.getElementById("day6");
  let startDate7 = document.getElementById("day7");
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
  localStorage.setItem("startDate", "26");
  localStorage.setItem("weekDay", "Mon");
  startDetailsDisplayDiv.innerHTML = `${localStorage.getItem(
    "weekDay"
  )} ${localStorage.getItem("startDate")} ${localStorage.getItem(
    "startMonth"
  )}, 2021 ${localStorage.getItem("startTime")}`;
}
function setStartDate3() {
  let startDate1 = document.getElementById("day1");
  let startDate2 = document.getElementById("day2");
  let startDate3 = document.getElementById("day3");
  let startDate4 = document.getElementById("day4");
  let startDate5 = document.getElementById("day5");
  let startDate6 = document.getElementById("day6");
  let startDate7 = document.getElementById("day7");
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
  localStorage.setItem("startDate", "27");
  localStorage.setItem("weekDay", "Tue");
  startDetailsDisplayDiv.innerHTML = `${localStorage.getItem(
    "weekDay"
  )} ${localStorage.getItem("startDate")} ${localStorage.getItem(
    "startMonth"
  )}, 2021 ${localStorage.getItem("startTime")}`;
}
function setStartDate4() {
  let startDate1 = document.getElementById("day1");
  let startDate2 = document.getElementById("day2");
  let startDate3 = document.getElementById("day3");
  let startDate4 = document.getElementById("day4");
  let startDate5 = document.getElementById("day5");
  let startDate6 = document.getElementById("day6");
  let startDate7 = document.getElementById("day7");
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
  localStorage.setItem("startDate", "28");
  localStorage.setItem("weekDay", "Wed");
  startDetailsDisplayDiv.innerHTML = `${localStorage.getItem(
    "weekDay"
  )} ${localStorage.getItem("startDate")} ${localStorage.getItem(
    "startMonth"
  )}, 2021 ${localStorage.getItem("startTime")}`;
}
function setStartDate5() {
  let startDate1 = document.getElementById("day1");
  let startDate2 = document.getElementById("day2");
  let startDate3 = document.getElementById("day3");
  let startDate4 = document.getElementById("day4");
  let startDate5 = document.getElementById("day5");
  let startDate6 = document.getElementById("day6");
  let startDate7 = document.getElementById("day7");
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
  localStorage.setItem("startDate", "29");
  localStorage.setItem("weekDay", "Thu");
  startDetailsDisplayDiv.innerHTML = `${localStorage.getItem(
    "weekDay"
  )} ${localStorage.getItem("startDate")} ${localStorage.getItem(
    "startMonth"
  )}, 2021 ${localStorage.getItem("startTime")}`;
}

function setStartDate6() {
  let startDate1 = document.getElementById("day1");
  let startDate2 = document.getElementById("day2");
  let startDate3 = document.getElementById("day3");
  let startDate4 = document.getElementById("day4");
  let startDate5 = document.getElementById("day5");
  let startDate6 = document.getElementById("day6");
  let startDate7 = document.getElementById("day7");
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
  localStorage.setItem("startDate", "30");
  localStorage.setItem("weekDay", "Fri");
  startDetailsDisplayDiv.innerHTML = `${localStorage.getItem(
    "weekDay"
  )} ${localStorage.getItem("startDate")} ${localStorage.getItem(
    "startMonth"
  )}, 2021 ${localStorage.getItem("startTime")}`;
}

function setStartDate7() {
  let startDate1 = document.getElementById("day1");
  let startDate2 = document.getElementById("day2");
  let startDate3 = document.getElementById("day3");
  let startDate4 = document.getElementById("day4");
  let startDate5 = document.getElementById("day5");
  let startDate6 = document.getElementById("day6");
  let startDate7 = document.getElementById("day7");
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
  localStorage.setItem("startDate", "31");
  localStorage.setItem("weekDay", "Sat");
  startDetailsDisplayDiv.innerHTML = `${localStorage.getItem(
    "weekDay"
  )} ${localStorage.getItem("startDate")} ${localStorage.getItem(
    "startMonth"
  )}, 2021 ${localStorage.getItem("startTime")}`;
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

setStartDate1();
setStartMonth1();
