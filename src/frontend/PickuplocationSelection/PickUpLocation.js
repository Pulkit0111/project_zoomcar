let search = document.getElementById("searches");
search.placeholder = `Tell us your Starting point in ${localStorage.getItem(
  "SelectedCity"
)}`;
localStorage.setItem("address", "");
console.log(localStorage.getItem("address"));

let airporttext = document.getElementById("airport_text");
airporttext.innerText = `${localStorage.getItem("SelectedCity")} Airport`;

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
  var str =
    "Latitude: " +
    position.coords.latitude +
    "<br>Longitude: " +
    position.coords.longitude;
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
  div.innerHTML =
    '<input type="text" placeholder="Enter city" autofocus="autofocus"><span></span><ul><li>Ahmedabad</li><li>Bangalore</li><li>Bhopal</li><li>Bhubaneswar</li><li>Calicut</li><li>Chandigarh</li><li>Chennai</li><li>Coimbatore</li><li>Delhi NCR</li><li>Guwahati</li><li>Hyderabad</li><li>Indore</li><li>Jaipur</li><li>Kochi</li><li>Kolkata</li><li>Lucknow</li><li>Mumbai</li><li>Mysore</li><li>Nagpur</li><li>Nashik</li><li>Patna</li><li>Pune</li><li>Raipur</li><li>Siliguri</li><li>Trichy</li><li>Udupi-Manipal</li><li>Vadodara</li><li>Vijayawada</li><li>Vizag</li></ul>';
}

var list = document.querySelector("input");
function trigger() {
  selectedCity.textContent = "Mumbai";
  div.innerHTML = '<div id="selectedCity">Mumbai</div> <span></span>';
}
list.addEventListener("click", trigger);

var addressDisplayDiv = document.getElementById("addressDisplay");

//next button function
var proceeding1 = document.getElementById("proceeding");
function onProceed() {
  var data = document.getElementById("searches").value;
  localStorage.setItem("address", `${data}`);
}
proceeding1.addEventListener("click", onProceed);

// Adding popular pick points
async function addPopularPlaces() {
  let popularOld = await fetch(
    `http://localhost:4321/popularpoints/${localStorage.getItem(
      "SelectedCity"
    )}`
  );
  let citydetails = await popularOld.json();
  citydetails = citydetails[0];
  //   console.log("citydetails:", citydetails);
  let popularpoints = document.getElementById("popularpoints");
  for (place of citydetails.popular_places) {
    let p = document.createElement("div");
    p.setAttribute("class", "items");
    p.innerHTML = place;
    p.addEventListener("click", () => {
      let divs = document.querySelectorAll("div");
      for (let div of divs) {
        div.style.border = "0px";
      }
      p.style.border = "2px solid #70ad4d";
      localStorage.setItem("address", p.innerHTML);
      addressDisplayDiv.innerHTML = `${localStorage.getItem("address")}`;
      document.getElementById("searches").value = `${localStorage.getItem(
        "address"
      )}`;
    });
    popularpoints.append(p);
  }
  let terminallist = document.getElementById("terminal_names");
  for (airport of citydetails.airports) {
    let p = document.createElement("button");
    p.setAttribute("class", "terminal");
    p.innerHTML = airport;
    p.addEventListener("click", () => {
      let divs = document.querySelectorAll("button");
      for (let div of divs) {
        div.style.border = "0px";
      }
      p.style.border = "2px solid #70ad4d";
      localStorage.setItem("address", p.innerHTML);
      addressDisplayDiv.innerHTML = `${localStorage.getItem("address")}`;
      document.getElementById("searches").value = `${localStorage.getItem(
        "address"
      )}`;
    });
    terminallist.append(p);
  }
}

/*let proceeding = document.getElementById("nextbtn");

let checkNext = setInterval(() => {
  let address = localStorage.getItem("address");
  //   console.log("address:", address);
  if (address == "") {
    proceeding.disabled = true;
    proceeding.style.cursor = "default";
    proceeding.style.backgroundColor = "grey";
  } else {
    proceeding.style.cursor = "pointer";
    proceeding.style.backgroundColor = "#70ad4d";
    proceeding.dis = false;
    clearInterval(checkNext);
  }
}, 100);

search.addEventListener("keypress", () => {
  let val = search.value;
  console.log("val:", val);
  localStorage.setItem("address", val);
});*/

addPopularPlaces();

// setInterval({},100)
