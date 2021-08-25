var popularcitiesdiv = document.getElementById("popularcitieslist");
var othercitiesdiv = document.getElementById("othercitieslist");
var landingdiv = document.getElementById("landingdiv");
var modaldiv = document.getElementById("modalouter");
var popularcitieslist = [
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
];

function AddPopularCities() {
  for (city of popularcitieslist) {
    let btn = document.createElement("button");
    let image = document.createElement("img");
    image.src = city.link;
    let p_name = document.createElement("p");
    p_name.innerHTML = city.cityname;

    btn.addEventListener("mouseover", function () {
      btn.style.cursor = "pointer";
    });

    btn.addEventListener("click", function () {
      //   console.log(p_name.innerHTML);
      btn.style.borderColor = "green";
      p_name.style.color = "green";
      //   p_name.style.fontWeight = "bold";
      //   p_name.style.fontSize = "16px";
      btn.style.border = "1px solid green";
      // modaldiv.style.display = "none";
      window.location.href = "../Homepage-main.html";
      localStorage.setItem("SelectedCity", p_name.innerHTML);
      console.log(localStorage.getItem("SelectedCity"));
      // landingdiv.innerHTML = `This is the landing page. The selected city is ${localStorage.getItem(
      //   "SelectedCity"
      // )}`;
    });

    btn.addEventListener("mouseout", function () {
      // console.log(p_name.innerHTML);
      btn.style.borderColor = "grey";
      p_name.style.color = "black";
      //   p_name.style.fontWeight = "medium";
      //   p_name.style.fontSize = "14px";
      btn.style.border = "0.15px solid gray";
    });

    btn.append(image, p_name);
    popularcitiesdiv.append(btn);
  }
}

function AddOtherCities() {
  for (othercity of othercitieslist) {
    let btn = document.createElement("button");
    let p_name = document.createElement("p");
    p_name.innerHTML = othercity;
    // console.log(p_name);

    btn.addEventListener("mouseover", function () {
      btn.style.cursor = "pointer";
    });

    btn.addEventListener("click", function () {
      //   console.log(p_name.innerHTML);
      btn.style.border = "1px solid green";
      btn.style.borderColor = "green";
      p_name.style.color = "green";
      //   p_name.style.fontWeight = "medium";
      //   p_name.style.fontSize = "16px";
      // modaldiv.style.display = "none";
      localStorage.setItem("SelectedCity", p_name.innerHTML);
      console.log(localStorage.getItem("SelectedCity"));
      window.location.href = "../Homepage-main.html";
      // landingdiv.innerHTML = `This is the landing page. The selected city is ${localStorage.getItem(
      //   "SelectedCity"
      // )}`;
    });

    btn.addEventListener("mouseout", function () {
      // console.log(p_name.innerHTML);
      btn.style.borderColor = "grey";
      btn.style.border = "0px solid grey";
      p_name.style.color = "black";
      //   p_name.style.fontWeight = "medium";
      //   p_name.style.fontSize = "14px";
    });

    btn.append(p_name);
    othercitiesdiv.append(btn);
  }
}

AddPopularCities();
AddOtherCities();
