document.title = `Book a car in ${localStorage.getItem(
  "SelectedCity"
)} | Rent Cars @ Most Affordable Rates - ZoomCar`;
let search = document.getElementById("searches");
search.placeholder = `Tell us your Starting point in ${localStorage.getItem(
  "SelectedCity"
)}`;
localStorage.setItem("address", "");
// console.log(localStorage.getItem("address"));
localStorage.setItem("showcities", "show");

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
selectedCity.innerText = localStorage.getItem("SelectedCity");
async function cities() {
  let check = localStorage.getItem("showcities");
  console.log("flag:", check);
  if (check == "show") {
    localStorage.setItem("showcities", "don't show");
    let list1 = await fetch("http://localhost:4321/othercity");
    let citieslist1 = await list1.json();
    let list2 = await fetch("http://localhost:4321/popularcity");
    let citieslist2 = await list2.json();
    // selectedCity.innerText = null;
    let input = document.createElement("input");
    input.placeholder = "Enter city";
    input.type = "text";
    input.autofocus = "autofocus";
    let list = document.createElement("ul");
    for (city of citieslist1) {
      let cityname1 = document.createElement("li");
      cityname1.innerText = city.city;
      list.append(cityname1);
      cityname1.addEventListener("click", () => {
        localStorage.setItem("SelectedCity", cityname1.innerText);
        addPopularPlaces();
        window.location.reload();
        list.innerHTML = null;
      });
      cityname1.addEventListener("mouseover", () => {
        cityname1.style.backgroundColor = "#70ad4d";
        cityname1.style.color = "white";
      });
      cityname1.addEventListener("mouseout", () => {
        cityname1.style.backgroundColor = "white";
        cityname1.style.color = "black";
      });
    }
    for (place of citieslist2) {
      let cityname2 = document.createElement("li");
      cityname2.innerText = place.city;
      list.append(cityname2);
      cityname2.addEventListener("click", () => {
        localStorage.setItem("SelectedCity", cityname2.innerText);
        addPopularPlaces();
        list.innerHTML = null;
        window.location.reload();
      });
      cityname2.addEventListener("mouseover", () => {
        cityname2.style.backgroundColor = "#70ad4d";
        cityname2.style.color = "white";
      });
      cityname2.addEventListener("mouseout", () => {
        cityname2.style.backgroundColor = "white";
        cityname2.style.color = "black";
      });
    }
    // div.innerHTML =
    //   '<input type="text" placeholder="Enter city" autofocus="autofocus"><span></span><ul><li>Ahmedabad</li><li>Bangalore</li><li>Bhopal</li><li>Bhubaneswar</li><li>Calicut</li><li>Chandigarh</li><li>Chennai</li><li>Coimbatore</li><li>Delhi NCR</li><li>Guwahati</li><li>Hyderabad</li><li>Indore</li><li>Jaipur</li><li>Kochi</li><li>Kolkata</li><li>Lucknow</li><li>Mumbai</li><li>Mysore</li><li>Nagpur</li><li>Nashik</li><li>Patna</li><li>Pune</li><li>Raipur</li><li>Siliguri</li><li>Trichy</li><li>Udupi-Manipal</li><li>Vadodara</li><li>Vijayawada</li><li>Vizag</li></ul>';
    div.append(list);
  } else {
    div.innerHTML = `<div id="fill_back"></div>
                        <div id="selectedCity">${localStorage.getItem(
                          "SelectedCity"
                        )}</div> <span></span>`;
    localStorage.setItem("showcities", "show");
  }
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
