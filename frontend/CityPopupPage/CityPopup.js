var popularcitiesdiv = document.getElementById("popularcitieslist");
var othercitiesdiv = document.getElementById("othercitieslist");
var landingdiv = document.getElementById("landingdiv");
var modaldiv = document.getElementById("modalouter");
var searchBox = document.getElementById("inputcity");
var warning = document.getElementById("info");
// localStorage.setItem("SelectedCity", "");

// List of popular cities
/*var popularcitieslist = [
  {
    link: "https://s3-ap-southeast-1.amazonaws.com/zoomcar/photos/original/2c335cd7b3bea26f8ee2e399572e7b1bab86a921.png?1497538647",
    cityname: "Chandigarh",
  },
  {
    link: "https://s3-ap-southeast-1.amazonaws.com/zoomcar/photos/original/ec01720d5e98455a7607a3c18d6c3804e65f9299.png?1497538617",
    cityname: "Hyderabad",
  },
  {
    link: "https://s3-ap-southeast-1.amazonaws.com/zoomcar/photos/original/f00bd521d24e52b5ca9a2a3b8bb2ebf49df9e933.png?1497538418",
    cityname: "Bangalore",
  },
  {
    link: "https://s3-ap-southeast-1.amazonaws.com/zoomcar/photos/original/1bd598da24dd1adf40782943d749b4ae985898d5.png?1497538676",
    cityname: "Kolkata",
  },
  {
    link: "https://s3-ap-southeast-1.amazonaws.com/zoomcar/photos/original/e1abfe1b888a392ff8cc7ac4b19be66026bc4d0e.png?1497538549",
    cityname: "Mumbai",
  },
  {
    link: "https://s3-ap-southeast-1.amazonaws.com/zoomcar/photos/original/5b9f025a2b89481a148d60ecec80f6f465491815.png?1497538509",
    cityname: "Delhi NCR",
  },
  {
    link: "https://s3-ap-southeast-1.amazonaws.com/zoomcar/photos/original/72146518feb0424f786d36533dbacb4eaa22ea82.png?1497538586",
    cityname: "Chennai",
  },
  {
    link: "https://s3-ap-southeast-1.amazonaws.com/zoomcar/images/original/73152f43661d0e17c9c544bb5d69da80d62c7abc.png?1497538181",
    cityname: "Vadodara",
  },
  {
    link: "https://s3-ap-southeast-1.amazonaws.com/zoomcar/photos/original/c198e0443ff4edf7f90a8d84dd6cf922de4f13eb.png?1497538483",
    cityname: "Pune",
  },
];

// List of other cities

var othercitieslist = [
  "Nashik",
  "Udupi_Manipal",
  "Kochi",
  "Patna",
  "Coimbatore",
  "Indore",
  "Guwahati",
  "Calicut",
  "Jaipur",
  "Lucknow",
  "Bhopal",
  "Nagpur",
  "Mysore",
  "Raipur",
  "Vijayawada",
  "Bhubaneswar",
  "Siliguri",
  "Trichy",
  "Vizag",
  "Ahmedabad",
];*/

// Adding Popular cities to the page

let res1;
let res2;
async function AddPopularCities() {
  let list = await fetch("http://localhost:4321/popularcity");
  let citieslist = await list.json();
  for (city of citieslist) {
    let btn = document.createElement("button");
    btn.setAttribute("class", "deselectedpopularcities");

    let image = document.createElement("img");
    image.src = city.image;

    let p_name = document.createElement("p");
    p_name.innerHTML = city.city;

    btn.addEventListener("mouseover", () => {
      btn.style.cursor = "pointer";
    });

    btn.addEventListener("click", function () {
      window.location.href = "../../index.html";
      localStorage.setItem("SelectedCity", p_name.innerHTML);
    });

    btn.append(image, p_name);
    popularcitiesdiv.append(btn);
  }
  Addons();
  return citieslist;
}

// Adding Other cities to the page

async function AddOtherCities() {
  let list = await fetch("http://localhost:4321/othercity");
  let citieslist = await list.json();
  for (othercity of citieslist) {
    let btn = document.createElement("button");
    btn.setAttribute("class", "deselectedothercities");

    let p_name = document.createElement("p");
    p_name.innerHTML = othercity.city;

    btn.addEventListener("mouseover", () => {
      btn.style.cursor = "pointer";
    });

    btn.addEventListener("click", function () {
      localStorage.setItem("SelectedCity", p_name.innerHTML);
      console.log(localStorage.getItem("SelectedCity"));
      window.location.href = "../../index.html";
    });

    btn.append(p_name);
    othercitiesdiv.append(btn);
  }
  Addons();
  return citieslist;
}

// console.log(res1, res2);
// console.log(res1, res2);

res1 = AddPopularCities();
// console.log("res1:", res1);
res2 = AddOtherCities();
// console.log("res2:", res2);

async function Addons() {
  // (res1 != undefined && res2 != undefined) {
  // Selected city should always be in Green
  let list1 = await res1;
  // console.log("list1:", list1);
  let list2 = await res2;
  // console.log("list2:", list2);
  if (list1.length > 0 && list2.length > 0) {
    let chosenCity = localStorage.getItem("SelectedCity");
    let buttons = document.querySelectorAll("button");
    // console.log("buttons:", buttons);
    setInterval(() => {
      buttons.forEach((el) => {
        // console.log("el:", el);

        if (el.innerText == chosenCity) {
          if (el.children.length == 1) {
            el.setAttribute("class", "selectedothercities");
          } else {
            el.setAttribute("class", "selectedpopularcities");
          }
        }
      });
    }, 100);

    // Implementing Search Functionality
    searchBox.addEventListener("input", () => {
      let searchedValue = searchBox.value;
      searchedValue = searchedValue.toLowerCase();
      buttons.forEach((el) => {
        let cityname = el.innerText.toLowerCase();
        if (cityname.includes(searchedValue)) {
          el.style.opacity = "0.54";
          el.disabled = false;
        } else {
          el.style.opacity = "0.15";
          el.disabled = true;
          el.style.cursor = "default";
        }
      });
    });
  }
}
