var addressDisplayDiv = document.getElementById("addressDisplay");
addressDisplayDiv.innerHTML = `${localStorage.getItem("address")}`;
var startDetailsDisplayDiv = document.getElementById("startDetailsDisplay");
startDetailsDisplayDiv.innerHTML = `${localStorage.getItem(
  "weekDay"
)} ${localStorage.getItem("startDate")} ${localStorage.getItem(
  "startMonth"
)}, 2021 ${localStorage.getItem("startTime")}`;
var endDetailsDisplayDiv = document.getElementById("endDetailsDisplay");
localStorage.setItem("endMonth", "");
localStorage.setItem("endDate", "");
localStorage.setItem("endTime", "");
localStorage.setItem("endweekDay", "");

function setMonth1() {
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
  localStorage.setItem("endMonth", month1.innerHTML);
  endDetailsDisplayDiv.innerHTML = `${localStorage.getItem(
    "endweekDay"
  )} ${localStorage.getItem("endDate")} ${localStorage.getItem(
    "endMonth"
  )}, 2021 ${localStorage.getItem("endTime")}`;
}
function setMonth2() {
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
  localStorage.setItem("endMonth", month2.innerHTML);
  endDetailsDisplayDiv.innerHTML = `${localStorage.getItem(
    "endweekDay"
  )} ${localStorage.getItem("endDate")} ${localStorage.getItem(
    "endMonth"
  )}, 2021 ${localStorage.getItem("endTime")}`;
}
function setMonth3() {
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
  localStorage.setItem("endMonth", month3.innerHTML);
  endDetailsDisplayDiv.innerHTML = `${localStorage.getItem(
    "endweekDay"
  )} ${localStorage.getItem("endDate")} ${localStorage.getItem(
    "endMonth"
  )}, 2021 ${localStorage.getItem("endTime")}`;
}
function setMonth4() {
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
  localStorage.setItem("endMonth", month4.innerHTML);
  endDetailsDisplayDiv.innerHTML = `${localStorage.getItem(
    "endweekDay"
  )} ${localStorage.getItem("endDate")} ${localStorage.getItem(
    "endMonth"
  )}, 2021 ${localStorage.getItem("endTime")}`;
}
function setMonth5() {
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
  localStorage.setItem("endMonth", month5.innerHTML);
  endDetailsDisplayDiv.innerHTML = `${localStorage.getItem(
    "endweekDay"
  )} ${localStorage.getItem("endDate")} ${localStorage.getItem(
    "endMonth"
  )}, 2021 ${localStorage.getItem("endTime")}`;
}
function setMonth6() {
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
  localStorage.setItem("endMonth", month6.innerHTML);
  endDetailsDisplayDiv.innerHTML = `${localStorage.getItem(
    "endweekDay"
  )} ${localStorage.getItem("endDate")} ${localStorage.getItem(
    "endMonth"
  )}, 2021 ${localStorage.getItem("endTime")}`;
}
function setMonth7() {
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
  localStorage.setItem("endMonth", month7.innerHTML);
  endDetailsDisplayDiv.innerHTML = `${localStorage.getItem(
    "endweekDay"
  )} ${localStorage.getItem("endDate")} ${localStorage.getItem(
    "endMonth"
  )}, 2021 ${localStorage.getItem("endTime")}`;
}

function setEndDate1() {
  let endDate1 = document.getElementById("day1");
  let endDate2 = document.getElementById("day2");
  let endDate3 = document.getElementById("day3");
  let endDate4 = document.getElementById("day4");
  let endDate5 = document.getElementById("day5");
  let endDate6 = document.getElementById("day6");
  let endDate7 = document.getElementById("day7");

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

  endDate1.style.border = "2px solid rgb(112, 173, 77)";
  endDate1.style.boxShadow = "0 4px 12px rgb(0 0 0 / 18%)";

  endDate2.style.border = "1px solid rgb(50, 58, 68)";
  endDate2.style.boxShadow = "none";

  endDate3.style.border = "1px solid rgb(50, 58, 68)";
  endDate3.style.boxShadow = "none";

  endDate4.style.border = "1px solid rgb(50, 58, 68)";
  endDate4.style.boxShadow = "none";

  endDate5.style.border = "1px solid rgb(50, 58, 68)";
  endDate5.style.boxShadow = "none";

  endDate6.style.border = "1px solid rgb(50, 58, 68)";
  endDate6.style.boxShadow = "none";

  endDate7.style.border = "1px solid rgb(50, 58, 68)";
  endDate7.style.boxShadow = "none";
  localStorage.setItem("endDate", date1.innerHTML);
  localStorage.setItem("endweekDay", weekday1.innerHTML);
  endDetailsDisplayDiv.innerHTML = `${localStorage.getItem(
    "endweekDay"
  )} ${localStorage.getItem("endDate")} ${localStorage.getItem(
    "endMonth"
  )}, 2021 ${localStorage.getItem("endTime")}`;
  setMonth1();
}
function setEndDate2() {
  let endDate1 = document.getElementById("day1");
  let endDate2 = document.getElementById("day2");
  let endDate3 = document.getElementById("day3");
  let endDate4 = document.getElementById("day4");
  let endDate5 = document.getElementById("day5");
  let endDate6 = document.getElementById("day6");
  let endDate7 = document.getElementById("day7");

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

  endDate2.style.border = "2px solid rgb(112, 173, 77)";
  endDate2.style.boxShadow = "0 4px 12px rgb(0 0 0 / 18%)";

  endDate1.style.border = "1px solid rgb(50, 58, 68)";
  endDate1.style.boxShadow = "none";

  endDate3.style.border = "1px solid rgb(50, 58, 68)";
  endDate3.style.boxShadow = "none";

  endDate4.style.border = "1px solid rgb(50, 58, 68)";
  endDate4.style.boxShadow = "none";

  endDate5.style.border = "1px solid rgb(50, 58, 68)";
  endDate5.style.boxShadow = "none";

  endDate6.style.border = "1px solid rgb(50, 58, 68)";
  endDate6.style.boxShadow = "none";

  endDate7.style.border = "1px solid rgb(50, 58, 68)";
  endDate7.style.boxShadow = "none";
  localStorage.setItem("endDate", date2.innerHTML);
  localStorage.setItem("endweekDay", weekday2.innerHTML);
  endDetailsDisplayDiv.innerHTML = `${localStorage.getItem(
    "endweekDay"
  )} ${localStorage.getItem("endDate")} ${localStorage.getItem(
    "endMonth"
  )}, 2021 ${localStorage.getItem("endTime")}`;
  setMonth1();
}
function setEndDate3() {
  let endDate1 = document.getElementById("day1");
  let endDate2 = document.getElementById("day2");
  let endDate3 = document.getElementById("day3");
  let endDate4 = document.getElementById("day4");
  let endDate5 = document.getElementById("day5");
  let endDate6 = document.getElementById("day6");
  let endDate7 = document.getElementById("day7");

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

  endDate3.style.border = "2px solid rgb(112, 173, 77)";
  endDate3.style.boxShadow = "0 4px 12px rgb(0 0 0 / 18%)";

  endDate1.style.border = "1px solid rgb(50, 58, 68)";
  endDate1.style.boxShadow = "none";

  endDate2.style.border = "1px solid rgb(50, 58, 68)";
  endDate2.style.boxShadow = "none";

  endDate4.style.border = "1px solid rgb(50, 58, 68)";
  endDate4.style.boxShadow = "none";

  endDate5.style.border = "1px solid rgb(50, 58, 68)";
  endDate5.style.boxShadow = "none";

  endDate6.style.border = "1px solid rgb(50, 58, 68)";
  endDate6.style.boxShadow = "none";

  endDate7.style.border = "1px solid rgb(50, 58, 68)";
  endDate7.style.boxShadow = "none";
  localStorage.setItem("endDate", date3.innerHTML);
  localStorage.setItem("endweekDay", weekday3.innerHTML);
  endDetailsDisplayDiv.innerHTML = `${localStorage.getItem(
    "endweekDay"
  )} ${localStorage.getItem("endDate")} ${localStorage.getItem(
    "endMonth"
  )}, 2021 ${localStorage.getItem("endTime")}`;
  setMonth2();
}
function setEndDate4() {
  let endDate1 = document.getElementById("day1");
  let endDate2 = document.getElementById("day2");
  let endDate3 = document.getElementById("day3");
  let endDate4 = document.getElementById("day4");
  let endDate5 = document.getElementById("day5");
  let endDate6 = document.getElementById("day6");
  let endDate7 = document.getElementById("day7");

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

  endDate4.style.border = "2px solid rgb(112, 173, 77)";
  endDate4.style.boxShadow = "0 4px 12px rgb(0 0 0 / 18%)";

  endDate1.style.border = "1px solid rgb(50, 58, 68)";
  endDate1.style.boxShadow = "none";

  endDate2.style.border = "1px solid rgb(50, 58, 68)";
  endDate2.style.boxShadow = "none";

  endDate3.style.border = "1px solid rgb(50, 58, 68)";
  endDate3.style.boxShadow = "none";

  endDate5.style.border = "1px solid rgb(50, 58, 68)";
  endDate5.style.boxShadow = "none";

  endDate6.style.border = "1px solid rgb(50, 58, 68)";
  endDate6.style.boxShadow = "none";

  endDate7.style.border = "1px solid rgb(50, 58, 68)";
  endDate7.style.boxShadow = "none";
  localStorage.setItem("endDate", date4.innerHTML);
  localStorage.setItem("endweekDay", weekday4.innerHTML);
  endDetailsDisplayDiv.innerHTML = `${localStorage.getItem(
    "endweekDay"
  )} ${localStorage.getItem("endDate")} ${localStorage.getItem(
    "endMonth"
  )}, 2021 ${localStorage.getItem("endTime")}`;
  setMonth2();
}
function setEndDate5() {
  let endDate1 = document.getElementById("day1");
  let endDate2 = document.getElementById("day2");
  let endDate3 = document.getElementById("day3");
  let endDate4 = document.getElementById("day4");
  let endDate5 = document.getElementById("day5");
  let endDate6 = document.getElementById("day6");
  let endDate7 = document.getElementById("day7");

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

  endDate5.style.border = "2px solid rgb(112, 173, 77)";
  endDate5.style.boxShadow = "0 4px 12px rgb(0 0 0 / 18%)";

  endDate1.style.border = "1px solid rgb(50, 58, 68)";
  endDate1.style.boxShadow = "none";

  endDate2.style.border = "1px solid rgb(50, 58, 68)";
  endDate2.style.boxShadow = "none";

  endDate3.style.border = "1px solid rgb(50, 58, 68)";
  endDate3.style.boxShadow = "none";

  endDate4.style.border = "1px solid rgb(50, 58, 68)";
  endDate4.style.boxShadow = "none";

  endDate6.style.border = "1px solid rgb(50, 58, 68)";
  endDate6.style.boxShadow = "none";

  endDate7.style.border = "1px solid rgb(50, 58, 68)";
  endDate7.style.boxShadow = "none";
  localStorage.setItem("endDate", date5.innerHTML);
  localStorage.setItem("endweekDay", weekday5.innerHTML);
  endDetailsDisplayDiv.innerHTML = `${localStorage.getItem(
    "endweekDay"
  )} ${localStorage.getItem("endDate")} ${localStorage.getItem(
    "endMonth"
  )}, 2021 ${localStorage.getItem("endTime")}`;
  setMonth2();
}

function setEndDate6() {
  let endDate1 = document.getElementById("day1");
  let endDate2 = document.getElementById("day2");
  let endDate3 = document.getElementById("day3");
  let endDate4 = document.getElementById("day4");
  let endDate5 = document.getElementById("day5");
  let endDate6 = document.getElementById("day6");
  let endDate7 = document.getElementById("day7");

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

  endDate6.style.border = "2px solid rgb(112, 173, 77)";
  endDate6.style.boxShadow = "0 4px 12px rgb(0 0 0 / 18%)";

  endDate1.style.border = "1px solid rgb(50, 58, 68)";
  endDate1.style.boxShadow = "none";

  endDate2.style.border = "1px solid rgb(50, 58, 68)";
  endDate2.style.boxShadow = "none";

  endDate3.style.border = "1px solid rgb(50, 58, 68)";
  endDate3.style.boxShadow = "none";

  endDate4.style.border = "1px solid rgb(50, 58, 68)";
  endDate4.style.boxShadow = "none";

  endDate5.style.border = "1px solid rgb(50, 58, 68)";
  endDate5.style.boxShadow = "none";

  endDate7.style.border = "1px solid rgb(50, 58, 68)";
  endDate7.style.boxShadow = "none";
  localStorage.setItem("endDate", date6.innerHTML);
  localStorage.setItem("endweekDay", weekday6.innerHTML);
  endDetailsDisplayDiv.innerHTML = `${localStorage.getItem(
    "endweekDay"
  )} ${localStorage.getItem("endDate")} ${localStorage.getItem(
    "endMonth"
  )}, 2021 ${localStorage.getItem("endTime")}`;
  setMonth2();
}

function setEndDate7() {
  let endDate1 = document.getElementById("day1");
  let endDate2 = document.getElementById("day2");
  let endDate3 = document.getElementById("day3");
  let endDate4 = document.getElementById("day4");
  let endDate5 = document.getElementById("day5");
  let endDate6 = document.getElementById("day6");
  let endDate7 = document.getElementById("day7");

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

  endDate7.style.border = "2px solid rgb(112, 173, 77)";
  endDate7.style.boxShadow = "0 4px 12px rgb(0 0 0 / 18%)";

  endDate1.style.border = "1px solid rgb(50, 58, 68)";
  endDate1.style.boxShadow = "none";

  endDate2.style.border = "1px solid rgb(50, 58, 68)";
  endDate2.style.boxShadow = "none";

  endDate3.style.border = "1px solid rgb(50, 58, 68)";
  endDate3.style.boxShadow = "none";

  endDate4.style.border = "1px solid rgb(50, 58, 68)";
  endDate4.style.boxShadow = "none";

  endDate5.style.border = "1px solid rgb(50, 58, 68)";
  endDate5.style.boxShadow = "none";

  endDate6.style.border = "1px solid rgb(50, 58, 68)";
  endDate6.style.boxShadow = "none";
  localStorage.setItem("endDate", date7.innerHTML);
  localStorage.setItem("endweekDay", weekday7.innerHTML);
  endDetailsDisplayDiv.innerHTML = `${localStorage.getItem(
    "endweekDay"
  )} ${localStorage.getItem("endDate")} ${localStorage.getItem(
    "endMonth"
  )}, 2021 ${localStorage.getItem("endTime")}`;
  setMonth2();
}

function setEndTime1() {
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
  localStorage.setItem("endTime", "00:00");
  endDetailsDisplayDiv.innerHTML = `${localStorage.getItem(
    "endweekDay"
  )} ${localStorage.getItem("endDate")} ${localStorage.getItem(
    "endMonth"
  )}, 2021 ${localStorage.getItem("endTime")}`;
}
function setEndTime2() {
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
  localStorage.setItem("endTime", "02:00");
  endDetailsDisplayDiv.innerHTML = `${localStorage.getItem(
    "endweekDay"
  )} ${localStorage.getItem("endDate")} ${localStorage.getItem(
    "endMonth"
  )}, 2021 ${localStorage.getItem("endTime")}`;
}
function setEndTime3() {
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
  localStorage.setItem("endTime", "04:00");
  endDetailsDisplayDiv.innerHTML = `${localStorage.getItem(
    "endweekDay"
  )} ${localStorage.getItem("endDate")} ${localStorage.getItem(
    "endMonth"
  )}, 2021 ${localStorage.getItem("endTime")}`;
}
function setEndTime4() {
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
  localStorage.setItem("endTime", "06:00");
  endDetailsDisplayDiv.innerHTML = `${localStorage.getItem(
    "endweekDay"
  )} ${localStorage.getItem("endDate")} ${localStorage.getItem(
    "endMonth"
  )}, 2021 ${localStorage.getItem("endTime")}`;
}
function setEndTime5() {
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
  localStorage.setItem("endTime", "08:00");
  endDetailsDisplayDiv.innerHTML = `${localStorage.getItem(
    "endweekDay"
  )} ${localStorage.getItem("endDate")} ${localStorage.getItem(
    "endMonth"
  )}, 2021 ${localStorage.getItem("endTime")}`;
}
function setEndTime6() {
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
  localStorage.setItem("endTime", "10:00");
  endDetailsDisplayDiv.innerHTML = `${localStorage.getItem(
    "endweekDay"
  )} ${localStorage.getItem("endDate")} ${localStorage.getItem(
    "endMonth"
  )}, 2021 ${localStorage.getItem("endTime")}`;
}
function setEndTime7() {
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
  localStorage.setItem("endTime", "12:00");
  endDetailsDisplayDiv.innerHTML = `${localStorage.getItem(
    "endweekDay"
  )} ${localStorage.getItem("endDate")} ${localStorage.getItem(
    "endMonth"
  )}, 2021 ${localStorage.getItem("endTime")}`;
}
function setEndTime8() {
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
  localStorage.setItem("endTime", "14:00");
  endDetailsDisplayDiv.innerHTML = `${localStorage.getItem(
    "endweekDay"
  )} ${localStorage.getItem("endDate")} ${localStorage.getItem(
    "endMonth"
  )}, 2021 ${localStorage.getItem("endTime")}`;
}
function setEndTime9() {
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
  localStorage.setItem("endTime", "16:00");
  endDetailsDisplayDiv.innerHTML = `${localStorage.getItem(
    "endweekDay"
  )} ${localStorage.getItem("endDate")} ${localStorage.getItem(
    "endMonth"
  )}, 2021 ${localStorage.getItem("endTime")}`;
}
function setEndTime10() {
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
  localStorage.setItem("endTime", "18:00");
  endDetailsDisplayDiv.innerHTML = `${localStorage.getItem(
    "endweekDay"
  )} ${localStorage.getItem("endDate")} ${localStorage.getItem(
    "endMonth"
  )}, 2021 ${localStorage.getItem("endTime")}`;
}
function setEndTime11() {
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
  localStorage.setItem("endTime", "20:00");
  endDetailsDisplayDiv.innerHTML = `${localStorage.getItem(
    "endweekDay"
  )} ${localStorage.getItem("endDate")} ${localStorage.getItem(
    "endMonth"
  )}, 2021 ${localStorage.getItem("endTime")}`;
}
function setEndTime12() {
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
  localStorage.setItem("endTime", "22:00");
  endDetailsDisplayDiv.innerHTML = `${localStorage.getItem(
    "endweekDay"
  )} ${localStorage.getItem("endDate")} ${localStorage.getItem(
    "endMonth"
  )}, 2021 ${localStorage.getItem("endTime")}`;
}

function drive1() {
  window.location.href = "../PickuplocationSelection/PickUpLocation.html";
}
function drive2() {
  window.location.href = "../StartTimeSelection/PickUpTimeSelection.html";
}

FillDates();
setEndDate1();
setMonth1();

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
