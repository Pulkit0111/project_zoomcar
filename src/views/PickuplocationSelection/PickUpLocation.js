//Live location
var label = document.getElementById("labelled");
function getLocation() {
    if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(showPosition);
    } else {
        alert("Cannot find Location");
    }
}
function showPosition(position) {
    var str = "Latitude: " + position.coords.latitude +
        "<br>Longitude: " + position.coords.longitude;
    console.log(str);
}
label.addEventListener("click", getLocation);

//overlay
function on() {
    document.getElementById("overlay").style.display = "block";
}

function off() {
    document.getElementById("overlay").style.display = "none";
}

//multiple cities select
var div = document.getElementById("choosed");
var selectedCity = document.getElementById("selectedCity");
function cities() {
    selectedCity.textContent = null;
    div.innerHTML = '<input type="text" placeholder="Enter city" autofocus="autofocus"><span></span><ul><li>Ahmedabad</li><li>Bangalore</li><li>Bhopal</li><li>Bhubaneswar</li><li>Calicut</li><li>Chandigarh</li><li>Chennai</li><li>Coimbatore</li><li>Delhi NCR</li><li>Guwahati</li><li>Hyderabad</li><li>Indore</li><li>Jaipur</li><li>Kochi</li><li>Kolkata</li><li>Lucknow</li><li>Mumbai</li><li>Mysore</li><li>Nagpur</li><li>Nashik</li><li>Patna</li><li>Pune</li><li>Raipur</li><li>Siliguri</li><li>Trichy</li><li>Udupi-Manipal</li><li>Vadodara</li><li>Vijayawada</li><li>Vizag</li></ul>';
}

var list = document.querySelector("input");
function trigger() {
    selectedCity.textContent = "Mumbai";
    div.innerHTML = '<div id="selectedCity">Mumbai</div> <span></span>';
}
list.addEventListener("click", trigger);

//Square box selectors
var addressDisplayDiv = document.getElementById("addressDisplay");
function setBox1() {
    let item1 = document.getElementById("item1");
    let item2 = document.getElementById("item2");
    let item3 = document.getElementById("item3");
    let item4 = document.getElementById("terminal1");
    let item5 = document.getElementById("terminal2");
    item1.style.border = "2px solid rgb(112, 173, 77)";
    item1.style.boxShadow = "0 4px 12px rgb(0 0 0 / 18%)";
    item2.style.border = "0px solid rgb(50, 58, 68)";
    item2.style.boxShadow = "none";
    item3.style.border = "0px solid rgb(50, 58, 68)";
    item3.style.boxShadow = "none";
    item4.style.border = "1px solid rgb(50, 58, 68)";
    item4.style.boxShadow = "none";
    item5.style.border = "1px solid rgb(50, 58, 68)";
    item5.style.boxShadow = "none";
    localStorage.setItem("address", "Kandivali West");
    addressDisplayDiv.innerHTML = `${localStorage.getItem("address")}`;
    document.getElementById("searches").value = `${localStorage.getItem("address")}`;
}
function setBox2() {
    let item1 = document.getElementById("item1");
    let item2 = document.getElementById("item2");
    let item3 = document.getElementById("item3");
    let item4 = document.getElementById("terminal1");
    let item5 = document.getElementById("terminal2");
    item2.style.border = "2px solid rgb(112, 173, 77)";
    item2.style.boxShadow = "0 4px 12px rgb(0 0 0 / 18%)";
    item1.style.border = "0px solid rgb(50, 58, 68)";
    item1.style.boxShadow = "none";
    item3.style.border = "0px solid rgb(50, 58, 68)";
    item3.style.boxShadow = "none";
    item4.style.border = "1px solid rgb(50, 58, 68)";
    item4.style.boxShadow = "none";
    item5.style.border = "1px solid rgb(50, 58, 68)";
    item5.style.boxShadow = "none";
    localStorage.setItem("address", "Thane");
    addressDisplayDiv.innerHTML = `${localStorage.getItem("address")}`;
    document.getElementById("searches").value = `${localStorage.getItem("address")}`;
}
function setBox3() {
    let item1 = document.getElementById("item1");
    let item2 = document.getElementById("item2");
    let item3 = document.getElementById("item3");
    let item4 = document.getElementById("terminal1");
    let item5 = document.getElementById("terminal2");
    item3.style.border = "2px solid rgb(112, 173, 77)";
    item3.style.boxShadow = "0 4px 12px rgb(0 0 0 / 18%)";
    item2.style.border = "0px solid rgb(50, 58, 68)";
    item2.style.boxShadow = "none";
    item1.style.border = "0px solid rgb(50, 58, 68)";
    item1.style.boxShadow = "none";
    item4.style.border = "1px solid rgb(50, 58, 68)";
    item4.style.boxShadow = "none";
    item5.style.border = "1px solid rgb(50, 58, 68)";
    item5.style.boxShadow = "none";
    localStorage.setItem("address", "Kharghar");
    addressDisplayDiv.innerHTML = `${localStorage.getItem("address")}`;
    document.getElementById("searches").value = `${localStorage.getItem("address")}`;
}
function setBox4() {
    let item1 = document.getElementById("item1");
    let item2 = document.getElementById("item2");
    let item3 = document.getElementById("item3");
    let item4 = document.getElementById("terminal1");
    let item5 = document.getElementById("terminal2");
    item4.style.border = "2px solid rgb(112, 173, 77)";
    item4.style.boxShadow = "0 4px 12px rgb(0 0 0 / 18%)";
    item2.style.border = "0px solid rgb(50, 58, 68)";
    item2.style.boxShadow = "none";
    item3.style.border = "0px solid rgb(50, 58, 68)";
    item3.style.boxShadow = "none";
    item1.style.border = "0px solid rgb(50, 58, 68)";
    item1.style.boxShadow = "none";
    item5.style.border = "1px solid rgb(50, 58, 68)";
    item5.style.boxShadow = "none";
    localStorage.setItem("address", "International Terminal (T2)");
    addressDisplayDiv.innerHTML = `${localStorage.getItem("address")}`;
    document.getElementById("searches").value = `${localStorage.getItem("address")}`;
}
function setBox5() {
    let item1 = document.getElementById("item1");
    let item2 = document.getElementById("item2");
    let item3 = document.getElementById("item3");
    let item4 = document.getElementById("terminal1");
    let item5 = document.getElementById("terminal2");
    item5.style.border = "2px solid rgb(112, 173, 77)";
    item5.style.boxShadow = "0 4px 12px rgb(0 0 0 / 18%)";
    item2.style.border = "0px solid rgb(50, 58, 68)";
    item2.style.boxShadow = "none";
    item3.style.border = "0px solid rgb(50, 58, 68)";
    item3.style.boxShadow = "none";
    item4.style.border = "1px solid rgb(50, 58, 68)";
    item4.style.boxShadow = "none";
    item1.style.border = "0px solid rgb(50, 58, 68)";
    item1.style.boxShadow = "none";
    localStorage.setItem("address", "Domestic Terminal (T1A/T1B)");
    addressDisplayDiv.innerHTML = `${localStorage.getItem("address")}`;
    document.getElementById("searches").value = `${localStorage.getItem("address")}`;
}

//next button function
var proceeding = document.getElementById("proceeding");
function onProceed() {
    var data = document.getElementById("searches").value;
    localStorage.setItem("address", `${data}`)
}
proceeding.addEventListener("click", onProceed);