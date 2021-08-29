document.title = `Book A Car In ${localStorage.getItem(
  "SelectedCity"
)} | Rent Cars @ Most Affordable Rates - Zoomcar`;
// Details coming from local storage - stored from selector page's details
// var pickupdetails = {
//   address: localStorage.getItem("address"),
//   startDate: localStorage.getItem("startDate"),
//   startMonth: localStorage.getItem("startMonth"),
//   startTime: localStorage.getItem("startTime"),
//   endDate: localStorage.getItem("endDate"),
//   endMonth: localStorage.getItem("endMonth"),
//   endTime: localStorage.getItem("endTime"),
// };

var CarCategoryFilterList = [];
var CarTransmissionFilterList = [];
var SelectedCarToBook = {};
localStorage.setItem("FreeDistance", 1);
localStorage.setItem("FuelRatio", 1);
localStorage.setItem("SortLtoH", 0);
localStorage.setItem("SortHtoL", 0);
localStorage.setItem("SortDistance", 0);
localStorage.setItem("doordelivery", 0);
var freekmsDB = 100;

// Function to fill the pick up location details from local storage
async function FillPickupLocationDetails() {
  var pickuppointaddress = document.getElementById("pickuppointaddress");
  let bookingDetailsold = await fetch("http://localhost:4321/details/");
  let bookingDetails = await bookingDetailsold.json();
  bookingDetails = bookingDetails[0];
  pickuppointaddress.innerHTML = bookingDetails.location;

  pickuppointaddress.addEventListener("mouseover", function () {
    pickuppointaddress.style.cursor = "pointer";
  });

  // To redirect the user to select location page in case he/she wishes to change pickup point
  pickuppointaddress.addEventListener("click", function () {
    window.location.href = "../PickuplocationSelection/PickUpLocation.html";
  });
}

// Function to fill the pick up and drop off date and time from local storage
async function FillPickupDropOffDateTimeDetails() {
  // Function to fill the pick up and drop off date from local storage
  let bookingDetailsold = await fetch("http://localhost:4321/details/");
  let bookingDetails = await bookingDetailsold.json();
  bookingDetails = bookingDetails[0];

  var startdatedisplay = document.getElementById("startdatedisplay");
  startdatedisplay.innerHTML = bookingDetails.startdate;
  var enddatedisplay = document.getElementById("enddatedisplay");
  enddatedisplay.innerHTML = bookingDetails.enddate;

  // Function to fill the pick up and drop off month from local storage
  var startmonthdisplay = document.getElementById("startmonthdisplay");
  startmonthdisplay.innerHTML = bookingDetails.startmonth;
  var endmonthdisplay = document.getElementById("endmonthdisplay");
  endmonthdisplay.innerHTML = bookingDetails.endmonth;

  // Function to fill the pick up and drop off time from local storage
  var starttimedisplay = document.getElementById("starttimedisplay");
  if (bookingDetails.starttime > "12:00") {
    var time1 = bookingDetails.starttime.split("");
    var res = time1[0] + time1[1];
    if (Number(res) < 12) {
      res = bookingDetails.starttime + " am";
    } else if (Number(res) == "12") {
      res = bookingDetails.starttime + " pm";
    } else {
      res = Number(res) - 12;
      // console.log(res.l);
      if (String(res).length == 1) {
        res = String(res) + "0";
        // console.log(res);
        res = res.split("").reverse().join("");
      }
      res += time1[2] + time1[3] + time1[4] + " pm";
      // console.log(res);
    }
  } else {
    var res = bookingDetails.starttime + " am";
  }
  starttimedisplay.innerHTML = res;
  var endtimedisplay = document.getElementById("endtimedisplay");
  if (bookingDetails.endtime > "12:00") {
    var time2 = bookingDetails.endtime.split("");
    var res1 = time2[0] + time2[1];
    if (Number(res1) < 12) {
      res1 = bookingDetails.starttime + " am";
    } else if (Number(res1) == "12") {
      res1 = bookingDetails.starttime + " pm";
    } else {
      res1 = Number(res1) - 12;
      // console.log(res1.l);
      if (String(res1).length == 1) {
        res1 = String(res1) + "0";
        // console.log(res1);
        res1 = res1.split("").reverse().join("");
      }
      res1 += time2[2] + time2[3] + time2[4] + " pm";
      // console.log(res1);
    }
  } else {
    var res1 = bookingDetails.endtime + " am";
  }
  endtimedisplay.innerHTML = res1;

  startdatedisplay.addEventListener("mouseover", function () {
    startdatedisplay.style.cursor = "pointer";
  });
  // To redirect the user to select pickup time page in case he/she wishes to change pickup time
  startdatedisplay.addEventListener("click", function () {
    window.location.href = "../StartTimeSelection/PickUpTimeSelection.html";
  });

  enddatedisplay.addEventListener("mouseover", function () {
    enddatedisplay.style.cursor = "pointer";
  });
  // To redirect the user to select drop off  time page in case he/she wishes to change drop off time
  enddatedisplay.addEventListener("click", function () {
    window.location.href = "../DropTimeSelection/DropTimeSelection.html";
  });

  startmonthdisplay.addEventListener("mouseover", function () {
    startmonthdisplay.style.cursor = "pointer";
  });
  // To redirect the user to select pickup time page in case he/she wishes to change pickup time
  startmonthdisplay.addEventListener("click", function () {
    window.location.href = "../StartTimeSelection/PickUpTimeSelection.html";
  });
  endmonthdisplay.addEventListener("mouseover", function () {
    endmonthdisplay.style.cursor = "pointer";
  });
  // To redirect the user to select drop off  time page in case he/she wishes to change drop off time
  endmonthdisplay.addEventListener("click", function () {
    window.location.href = "../DropTimeSelection/DropTimeSelection.html";
  });

  starttimedisplay.addEventListener("mouseover", function () {
    starttimedisplay.style.cursor = "pointer";
  });
  // To redirect the user to select pickup time page in case he/she wishes to change pickup time
  starttimedisplay.addEventListener("click", function () {
    window.location.href = "../StartTimeSelection/PickUpTimeSelection.html";
  });

  endtimedisplay.addEventListener("mouseover", function () {
    endtimedisplay.style.cursor = "pointer";
  });
  // To redirect the user to select drop off  time page in case he/she wishes to change drop off time
  endtimedisplay.addEventListener("click", function () {
    window.location.href = "../DropTimeSelection/DropTimeSelection.html";
  });
}

// Function to fill in the details of free KMs based on time selected
function SetFree100Kms() {
  let free100kms = document.getElementById("free100kms");
  let free200kms = document.getElementById("free200kms");
  let free300kms = document.getElementById("free300kms");

  let freekmsrange = document.getElementById("100kmsrange");

  // Differentiates the selected category from the other ones
  free100kms.style.border = "2px solid #70ad4d";
  free100kms.style.color = "#70ad4d";
  // free100kms.style.cursor = "pointer";

  free200kms.style.border = "0px solid #70ad4d";
  free200kms.style.borderRight = "1px solid lightGrey";
  free200kms.style.color = "black";

  free300kms.style.border = "0px solid #70ad4d";
  //   free300kms.style.borderRight = "1px solid light-grey";
  free300kms.style.color = "black";

  SelectedCarToBook.freekms = freekmsrange.innerHTML;

  localStorage.setItem("FreeDistance", 1);

  DisplayCars();
}

function SetFree200Kms() {
  let free100kms = document.getElementById("free100kms");
  let free200kms = document.getElementById("free200kms");
  let free300kms = document.getElementById("free300kms");

  let freekmsrange = document.getElementById("200kmsrange");

  free200kms.style.border = "2px solid #70ad4d";
  free200kms.style.color = "#70ad4d";
  // free200kms.style.cursor = "pointer";

  free100kms.style.border = "0px solid #70ad4d";
  free100kms.style.borderRight = "1px solid lightGrey";
  free100kms.style.color = "black";

  free300kms.style.border = "0px solid #70ad4d";
  //   free300kms.style.borderRight = "1px solid light-grey";
  free300kms.style.color = "black";

  SelectedCarToBook.freekms = freekmsrange.innerHTML;
  freekmsDB = freekmsrange.innerHTML;

  localStorage.setItem("FreeDistance", 1.5);
  DisplayCars();
}

function SetFree300Kms() {
  let free100kms = document.getElementById("free100kms");
  let free200kms = document.getElementById("free200kms");
  let free300kms = document.getElementById("free300kms");

  let freekmsrange = document.getElementById("300kmsrange");
  // Differentiates the selected category from the other ones

  free300kms.style.border = "2px solid #70ad4d";
  free300kms.style.color = "#70ad4d";
  // free300kms.style.cursor = "pointer";

  free100kms.style.border = "0px solid #70ad4d";
  free100kms.style.borderRight = "1px solid lightGrey";
  free100kms.style.color = "black";

  free200kms.style.border = "0px solid #70ad4d";
  free200kms.style.borderRight = "1px solid light-grey";
  free200kms.style.color = "black";

  SelectedCarToBook.freekms = freekmsrange.innerHTML;
  freekmsDB = freekmsrange.innerHTML;

  localStorage.setItem("FreeDistance", 2.3);
  DisplayCars();
}

// Enables the user to select the desired car type as per their choice from the available options
function CarTypeFiltering() {
  var hatchbackcar = document.getElementById("hatchbacktype");
  var sedancar = document.getElementById("sedantype");
  var suvcar = document.getElementById("suvtype");
  var luxurycar = document.getElementById("luxurytype");
  let hatchbackflag = false;
  let sedanflag = false;
  let suvflag = false;
  let luxuryflag = false;

  // To show the user the selected car type
  hatchbackcar.addEventListener("click", function () {
    if (hatchbackflag) {
      hatchbackcar.style.border = "1px solid lightGrey";
      //   hatchbackcar.style.color = "#70ad4d";
      // free100kms.style.cursor = "pointer";
      hatchbackflag = false;
      let hatchbackIndex = CarCategoryFilterList.indexOf("Hatchback");
      let hatchbackpopout = CarCategoryFilterList.splice(hatchbackIndex, 1);
      FilterCarsBasedOnChoice();
    } else {
      hatchbackcar.style.border = "2px solid #70ad4d";
      //   hatchbackcar.style.color = "#70ad4d";
      // free100kms.style.cursor = "pointer";
      hatchbackflag = true;
      CarCategoryFilterList.push("Hatchback");
      FilterCarsBasedOnChoice();
      var hatchbackCarArray = [];
      for (car of carslist) {
        if (car.carcategory == "Hatchback") {
          hatchbackCarArray.push(car);
        }
      }
      // showCars(hatchbackCarArray);
    }
  });

  // To show the user the selected car type
  sedancar.addEventListener("click", function () {
    if (sedanflag) {
      sedancar.style.border = "1px solid lightGrey";
      //   sedancar.style.color = "#70ad4d";
      // free100kms.style.cursor = "pointer";
      sedanflag = false;
      let sedanIndex = CarCategoryFilterList.indexOf("Sedan");
      let sedanpopout = CarCategoryFilterList.splice(sedanIndex, 1);
      FilterCarsBasedOnChoice();
    } else {
      sedancar.style.border = "2px solid #70ad4d";
      //   sedancar.style.color = "#70ad4d";
      // free100kms.style.cursor = "pointer";
      sedanflag = true;
      CarCategoryFilterList.push("Sedan");
      FilterCarsBasedOnChoice();
      var sedanCarArray = [];
      for (car of carslist) {
        if (car.carcategory == "Sedan") {
          sedanCarArray.push(car);
        }
      }
      // showCars(sedanCarArray);
    }
  });

  // To show the user the selected car type
  suvcar.addEventListener("click", function () {
    if (suvflag) {
      suvcar.style.border = "1px solid lightGrey";
      //   suvcar.style.color = "#70ad4d";
      // free100kms.style.cursor = "pointer";
      suvflag = false;
      let suvIndex = CarCategoryFilterList.indexOf("SUV");
      let suvpopout = CarCategoryFilterList.splice(suvIndex, 1);
      FilterCarsBasedOnChoice();
    } else {
      suvcar.style.border = "2px solid #70ad4d";
      //   suvcar.style.color = "#70ad4d";
      // free100kms.style.cursor = "pointer";
      suvflag = true;
      CarCategoryFilterList.push("SUV");
      FilterCarsBasedOnChoice();
      var suvCarArray = [];
      for (car of carslist) {
        if (car.carcategory == "SUV") {
          suvCarArray.push(car);
        }
      }
      // showCars(suvCarArray);
    }
  });

  // To show the user the selected car type
  luxurycar.addEventListener("click", function () {
    if (luxuryflag) {
      luxurycar.style.border = "1px solid lightGrey";
      //   luxurycar.style.color = "#70ad4d";
      // free100kms.style.cursor = "pointer";
      luxuryflag = false;
      let luxuryIndex = CarCategoryFilterList.indexOf("Luxury");
      let luxurypopout = CarCategoryFilterList.splice(luxuryIndex, 1);
      FilterCarsBasedOnChoice();
    } else {
      luxurycar.style.border = "2px solid #70ad4d";
      //   luxurycar.style.color = "#70ad4d";
      // free100kms.style.cursor = "pointer";
      luxuryflag = true;
      CarCategoryFilterList.push("Luxury");
      FilterCarsBasedOnChoice();
      var luxuryCarArray = [];
      for (car of carslist) {
        if (car.carcategory == "Luxury") {
          luxuryCarArray.push(car);
        }
      }
      // showCars(luxuryCarArray);
    }
  });
}

// Enables the user to select the desired transmission type as per their choice from the available options
function TransmissionTypeFiltering() {
  var automatictype = document.getElementById("automatictype");
  var manualtype = document.getElementById("manualtype");
  let automaticflag = false;
  let manualflag = false;

  // To show the user the selected transmission type
  automatictype.addEventListener("click", function () {
    if (automaticflag) {
      automatictype.style.border = "1px solid lightGrey";
      //   automatictype.style.color = "#70ad4d";
      // free100kms.style.cursor = "pointer";
      automaticflag = false;
      let automaticIndex = CarTransmissionFilterList.indexOf("Automatic");
      let automaticpopout = CarTransmissionFilterList.splice(automaticIndex, 1);
      FilterCarsBasedOnChoice();
    } else {
      automatictype.style.border = "2px solid #70ad4d";
      //   automatictype.style.color = "#70ad4d";
      // free100kms.style.cursor = "pointer";
      automaticflag = true;
      CarTransmissionFilterList.push("Automatic");
      /*var automaticCarArray = [];
      for (car of carslist) {
        if (car.cartransmissiontype == "Automatic") {
          automaticCarArray.push(car);
        }
      }*/
      // showCars(automaticCarArray);
      FilterCarsBasedOnChoice();
    }
  });

  // To show the user the selected transmission type
  manualtype.addEventListener("click", function () {
    if (manualflag) {
      manualtype.style.border = "1px solid lightGrey";
      //   manualtype.style.color = "#70ad4d";
      // free100kms.style.cursor = "pointer";
      manualflag = false;
      let ManualIndex = CarTransmissionFilterList.indexOf("Manual");
      let Manualpopout = CarTransmissionFilterList.splice(ManualIndex, 1);
      FilterCarsBasedOnChoice();
    } else {
      manualtype.style.border = "2px solid #70ad4d";
      //   manualtype.style.color = "#70ad4d";
      // free100kms.style.cursor = "pointer";
      manualflag = true;
      CarTransmissionFilterList.push("Manual");
      FilterCarsBasedOnChoice();
      /*var manualCarArray = [];
      for (car of carslist) {
        if (car.cartransmissiontype == "Manual") {
          manualCarArray.push(car);
        }
      }*/
      // showCars(manualCarArray);
    }
  });
}

// Enables the user to sort the vehicles based on price - low to high
function SortLtoH() {
  let sorthightolow = document.getElementById("pricehightolow");
  let sortlowtohigh = document.getElementById("pricelowtohigh");
  let sortdistance = document.getElementById("distancesort");

  sortlowtohigh.style.border = "2px solid #70ad4d";
  sortlowtohigh.color = "#70ad4d";

  sorthightolow.style.border = "1px solid #d8d8d8";
  sorthightolow.color = "#9b9b9b";

  sortdistance.style.border = "1px solid #d8d8d8";
  sortdistance.color = "#9b9b9b";

  localStorage.setItem("SortLtoH", 1);
  localStorage.setItem("SortHtoL", 0);
  localStorage.setItem("SortDistance", 0);

  DisplayCars();
}

// Enables the user to sort the vehicles based on distance of availability from pickup location
function SortDistance() {
  let sorthightolow = document.getElementById("pricehightolow");
  let sortlowtohigh = document.getElementById("pricelowtohigh");
  let sortdistance = document.getElementById("distancesort");

  sortdistance.style.border = "2px solid #70ad4d";
  sortdistance.color = "#70ad4d";

  sorthightolow.style.border = "1px solid #d8d8d8";
  sorthightolow.color = "#9b9b9b";

  sortlowtohigh.style.border = "1px solid #d8d8d8";
  sortlowtohigh.color = "#9b9b9b";

  localStorage.setItem("SortLtoH", 0);
  localStorage.setItem("SortHtoL", 0);
  localStorage.setItem("SortDistance", 1);
  DisplayCars();
}

// Enables the user to sort the vehicles based on price - high to low
function SortHtoL() {
  let sorthightolow = document.getElementById("pricehightolow");
  let sortlowtohigh = document.getElementById("pricelowtohigh");
  let sortdistance = document.getElementById("distancesort");

  sorthightolow.style.border = "2px solid #70ad4d";
  sorthightolow.color = "#70ad4d";

  sortlowtohigh.style.border = "1px solid #d8d8d8";
  sortlowtohigh.color = "#9b9b9b";

  sortdistance.style.border = "1px solid #d8d8d8";
  sortdistance.color = "#9b9b9b";

  localStorage.setItem("SortLtoH", 0);
  localStorage.setItem("SortHtoL", 1);
  localStorage.setItem("SortDistance", 0);
  DisplayCars();
}

// Function to show the car list and costs when user chooses Without Fuel options
function ExcludeFuelCharges() {
  let withoutfuelcontainer = document.getElementById("withoutfuelcontainer");
  let withfuelcontainer = document.getElementById("withfuelcontainer");
  withoutfuelcontainer.style.backgroundColor = "#70ad4d";
  withoutfuelcontainer.style.color = "white";

  withfuelcontainer.style.backgroundColor = "#f7f7f7";
  withfuelcontainer.style.color = "black";

  localStorage.setItem("FuelRatio", 1);
  DisplayCars();
}

// Function to show the car list and costs when user chooses With Fuel options
function IncludeFuelCharges() {
  let withoutfuelcontainer = document.getElementById("withoutfuelcontainer");
  let withfuelcontainer = document.getElementById("withfuelcontainer");
  withfuelcontainer.style.backgroundColor = "#70ad4d";
  withfuelcontainer.style.color = "white";

  withoutfuelcontainer.style.backgroundColor = "#f7f7f7";
  withoutfuelcontainer.style.color = "black";

  localStorage.setItem("FuelRatio", 1.8);
  DisplayCars();
}

// Get Data from DB
let GetCars = async () => {
  let cars1 = await fetch("http://localhost:4321/cars", { method: "GET" });
  let cars2 = await cars1.json();
  // console.log("cars2:", cars2);
  return cars2;
};

// Function to display cars list
async function showAvailableCars(cararray) {
  let bookingDetailsold = await fetch("http://localhost:4321/details/");
  let bookingDetails = await bookingDetailsold.json();
  bookingDetails = bookingDetails[0];

  // showData(bookingDetails, cararray);

  // console.log("cararray:", cararray);
  // function showCars(cararray) {
  var carlistdiv = document.getElementById("carlistdiv");
  carlistdiv.innerHTML = "";

  // console.log(cararray);
  if (
    cararray == [] ||
    cararray == null ||
    cararray == undefined ||
    cararray.length == 0
  ) {
    let image = document.createElement("img");
    image.src =
      "https://www.zoomcar.com/assets/component-images/search_error.a1e96c2d070759aea2bddeeab6178cee.png";
    image.style.marginTop = "4%";
    carlistdiv.style.textAlign = "center";
    let msg = document.createElement("p");
    msg.innerHTML = `There are no cars available on your selected time and location. <br> Please try again by clearing all filters.`;
    msg.style.marginTop = "4%";
    carlistdiv.append(image, msg);
  } else {
    let sortlhflag = localStorage.getItem("SortLtoH");
    let sorthlflag = localStorage.getItem("SortHtoL");
    let sortdistanceflag = localStorage.getItem("SortDistance");

    if (sortlhflag == 1) {
      cararray.sort((a, b) => {
        return a.costRatio - b.costRatio;
      });
    }

    if (sorthlflag == 1) {
      cararray.sort((a, b) => {
        return b.costRatio - a.costRatio;
      });
    }

    if (sortdistanceflag == 1) {
      cararray.sort((a, b) => {
        return Number(a.pickUpDistance) - Number(b.pickUpDistance);
      });
    }

    for (car of cararray) {
      carlistdiv.style.textAlign = "left";
      let div = document.createElement("div");
      div.setAttribute("class", "grid-div");

      let img_div = document.createElement("div");
      img_div.setAttribute("class", "grid-image-div");

      let car_pic = document.createElement("img");
      car_pic.src = car.image;
      car_pic.style.width = "85%";
      car_pic.style.height = "85%";
      img_div.append(car_pic);

      let middlediv = document.createElement("div");
      // middlediv.style.border = "2px solid red";
      middlediv.style.height = "100%";
      middlediv.style.width = "60%";

      let carnamedetailsdiv = document.createElement("div");
      carnamedetailsdiv.setAttribute("class", "car-details-div");

      let namediv = document.createElement("div");
      namediv.innerHTML = car.name;
      namediv.setAttribute("class", "carnamestyling");

      let detailsdiv = document.createElement("div");
      detailsdiv.style.display = "flex";
      // detailsdiv.style.justifyContent = "spaceBetween";

      let seatdiv = document.createElement("div");

      let car_seat_pic = document.createElement("img");
      car_seat_pic.src = car.seatImage;
      car_seat_pic.setAttribute("class", "cardetailimagestyling");
      car_seat_pic.style.marginLeft = "3%";

      let car_seat_details = document.createElement("p");
      car_seat_details.innerHTML = car.seater;
      car_seat_details.setAttribute("class", "cardetailstyling");

      seatdiv.append(car_seat_pic, car_seat_details);

      let car_transmission_pic = document.createElement("img");
      car_transmission_pic.src = car.transmissionImage;
      car_transmission_pic.setAttribute("class", "cardetailimagestyling");

      let car_transmission_details = document.createElement("p");
      car_transmission_details.innerHTML = car.transmissionType;
      car_transmission_details.setAttribute("class", "cardetailstyling");

      let transmissiondiv = document.createElement("div");
      transmissiondiv.append(car_transmission_pic, car_transmission_details);

      let car_bag_pic = document.createElement("img");
      car_bag_pic.src = car.luggageImage;
      car_bag_pic.setAttribute("class", "cardetailimagestyling");

      let car_bag_details = document.createElement("p");
      car_bag_details.innerHTML = car.luggageSize;
      car_bag_details.setAttribute("class", "cardetailstyling");

      let bagdiv = document.createElement("div");
      bagdiv.append(car_bag_pic, car_bag_details);

      let car_driver_details = document.createElement("p");
      car_driver_details.innerHTML = car.driverAge;
      car_driver_details.setAttribute("class", "cardetailstyling");
      car_driver_details.style.marginLeft = "5%";

      let separator = document.createElement("div");
      separator.setAttribute("class", "separator");

      detailsdiv.append(
        car_seat_pic,
        car_seat_details,
        car_transmission_pic,
        car_transmission_details,
        car_bag_pic,
        car_bag_details,
        separator,
        car_driver_details
      );

      /*detailsdiv.append(
        seatdiv,
        transmissiondiv,
        bagdiv,
        separator,
        car_driver_details
      );*/

      let pickuppointdiv = document.createElement("div");
      pickuppointdiv.innerHTML = `${car.pickUpDistance} km from Starting Point`;
      // pickuppointdiv.style.height = "50%";
      // pickuppointdiv.style.width = "100%";
      pickuppointdiv.setAttribute("class", "pickuplocationstyling");

      let pricedisplaydiv = document.createElement("div");
      pricedisplaydiv.setAttribute("class", "pricedisplaydiv");

      var monthArray = [
        "January",
        "February",
        "March",
        "April",
        "May",
        "June",
        "July",
        "August",
        "September",
        "October",
        "November",
        "December",
      ];

      let formattedStartDate = new Date(
        new Date().getFullYear(),
        monthArray.indexOf(bookingDetails.startmonth),
        bookingDetails.startdate,
        bookingDetails.starttime[0] + bookingDetails.starttime[1],
        bookingDetails.starttime[3] + bookingDetails.starttime[4]
      );
      let formattedEndDate = new Date(
        new Date().getFullYear(),
        monthArray.indexOf(bookingDetails.endmonth),
        bookingDetails.enddate,
        bookingDetails.endtime[0] + bookingDetails.endtime[1],
        bookingDetails.endtime[3] + bookingDetails.endtime[4]
      );
      let totalHours = FindHoursDifferencebetweenPickupAndDrop(
        formattedStartDate,
        formattedEndDate
      );

      let rupeeSpan = document.createElement("span");
      rupeeSpan.innerHTML = `₹ &nbsp`;
      rupeeSpan.setAttribute("class", "rupeespan");

      let costSpan = document.createElement("span");
      let carFuel = localStorage.getItem("FuelRatio");
      let carFree = localStorage.getItem("FreeDistance");
      let deliveryfee = Number(localStorage.getItem("doordelivery"));
      costSpan.innerHTML = FindCostOfVehicleBasedOnCategoryAndTime(
        car.category,
        totalHours,
        car.transmissionType,
        car.costRatio,
        carFree,
        carFuel,
        deliveryfee
      );

      // console.log(costSpan.innerHTML);
      let tempIndex = costSpan.innerHTML;
      tempIndex = tempIndex.split("");
      let index = tempIndex.indexOf(",");
      let comma = tempIndex.splice(index, 1);
      let carPrice = Number(tempIndex.join(""));
      // console.log(carPrice);
      car.carCost = carPrice;
      // console.log(car.carCost);
      costSpan.setAttribute("class", "costspan");

      let excessCostSpan = document.createElement("p");
      excessCostSpan.innerHTML = `Excess Rs.${Math.floor(
        Math.random() * (20 - 10 + 1) + 10
      )}/ km`;
      excessCostSpan.setAttribute("class", "excesscostspan");

      let booknowbtn = document.createElement("div");
      booknowbtn.textContent = "BOOK NOW";
      booknowbtn.setAttribute("class", "booknowbutton");

      carnamedetailsdiv.append(namediv, detailsdiv);
      middlediv.append(carnamedetailsdiv, pickuppointdiv);
      pricedisplaydiv.append(rupeeSpan, costSpan, excessCostSpan, booknowbtn);

      div.append(img_div, middlediv, pricedisplaydiv);
      div.style.marginTop = "2%";
      carlistdiv.append(div);

      booknowbtn.addEventListener("click", async function () {
        /*SelectedCarToBook.carImage = car_pic.src;
        SelectedCarToBook.carname = namediv.innerHTML;
        // console.log("carname:", namediv.innerHTML);
        SelectedCarToBook.carseater = car_seat_details.innerHTML;
        SelectedCarToBook.bookingStartTime = pickupdetails.startTime;
        SelectedCarToBook.bookingStartDate = pickupdetails.startDate;
        SelectedCarToBook.bookingStartMonth = pickupdetails.startMonth;
        SelectedCarToBook.bookingEndTime = pickupdetails.endTime;
        SelectedCarToBook.bookingEndDate = pickupdetails.endDate;
        SelectedCarToBook.bookingEndMonth = pickupdetails.endMonth;
        SelectedCarToBook.bookingFee = costSpan.innerHTML;
        SelectedCarToBook.excessKmsDetails = excessCostSpan.innerHTML;

        localStorage.setItem(
          "SelectedCarDetails",
          JSON.stringify(SelectedCarToBook)
        );*/
        // console.log("freekmsDB:", freekmsDB);
        let body = {
          name: namediv.innerHTML,
          image: car_pic.src,
          seater: car_seat_details.innerHTML,
          bookingFee: costSpan.innerHTML,
          freeDistance: freekmsDB,
          excessKM: excessCostSpan.innerHTML,
        };

        body = JSON.stringify(body);
        console.log("body:", body);

        let sendCar = async () => {
          let sent = await fetch("http://localhost:4321/checkout", {
            method: "POST",
            body: body,
            headers: {
              "Content-Type": "application/json",
            },
          });
          let sent2 = sent.json();
          return sent2;
        };

        let movePage = async () => {
          let res = await sendCar();
          window.location.href = "../checkout/checkout.html";
        };

        movePage();
      });
    }
  }
}

// Function to receive input from DB and pass to other function
let DisplayCars = async () => {
  let cararraytemp = await GetCars();
  if (
    CarTransmissionFilterList.length == 0 &&
    CarCategoryFilterList.length == 0
  ) {
    showAvailableCars(cararraytemp);
  } else if (
    CarCategoryFilterList.length == 0 &&
    CarTransmissionFilterList.length != 0
  ) {
    let FilteredArray = [];
    for (car of cararraytemp) {
      if (CarTransmissionFilterList.includes(car.transmissionType)) {
        FilteredArray.push(car);
      }
    }
    showAvailableCars(FilteredArray);
  } else if (
    CarCategoryFilterList.length != 0 &&
    CarTransmissionFilterList.length == 0
  ) {
    let FilteredArray = [];
    for (car of cararraytemp) {
      if (CarCategoryFilterList.includes(car.category)) {
        FilteredArray.push(car);
      }
    }
    showAvailableCars(FilteredArray);
  } else if (
    CarCategoryFilterList.length != 0 &&
    CarTransmissionFilterList.length != 0
  ) {
    let FilteredArray = [];
    for (car of cararraytemp) {
      if (
        CarTransmissionFilterList.includes(car.transmissionType) &&
        CarCategoryFilterList.includes(car.category)
      ) {
        FilteredArray.push(car);
      }
    }
    showAvailableCars(FilteredArray);
  }
  // }
  // showCars(carslistnew);
};

function FilterCarsBasedOnChoice() {
  DisplayCars();
}

// Function to find the difference in hours between pick up and drop of the vehicle
function FindHoursDifferencebetweenPickupAndDrop(dt2, dt1) {
  // console.log(dt1.getTime());
  var diff = (dt2.getTime() - dt1.getTime()) / 1000;
  diff /= 60;
  diff /= 60;
  return Math.abs(Math.round(diff));
}

// Helps us find the cost of the vehicle based on category of the car and the total time booked
function FindCostOfVehicleBasedOnCategoryAndTime(
  categorytype,
  totaltime,
  geartype,
  costratio,
  freekmsrange,
  fuelcost,
  deliveryCharge
) {
  if (categorytype == "Hatchback" && geartype == "Manual") {
    let n = ThousandsSeparatorForPrice(
      Math.round(
        totaltime * costratio * freekmsrange * fuelcost + deliveryCharge
      )
    );
    return n;
  } else if (categorytype == "Hatchback" && geartype == "Automatic") {
    let n = ThousandsSeparatorForPrice(
      Math.round(
        totaltime * costratio * freekmsrange * fuelcost + deliveryCharge
      )
    );
    return n;
  } else if (categorytype == "Sedan" && geartype == "Manual") {
    let n = ThousandsSeparatorForPrice(
      Math.round(
        totaltime * costratio * freekmsrange * fuelcost + deliveryCharge
      )
    );
    return n;
  } else if (categorytype == "Sedan" && geartype == "Automatic") {
    let n = ThousandsSeparatorForPrice(
      Math.round(
        totaltime * costratio * freekmsrange * fuelcost + deliveryCharge
      )
    );
    return n;
  } else if (categorytype == "SUV" && geartype == "Manual") {
    let n = ThousandsSeparatorForPrice(
      Math.round(
        totaltime * costratio * freekmsrange * fuelcost + deliveryCharge
      )
    );
    return n;
  } else if (categorytype == "SUV" && geartype == "Automatic") {
    let n = ThousandsSeparatorForPrice(
      Math.round(
        totaltime * costratio * freekmsrange * fuelcost + deliveryCharge
      )
    );
    return n;
  } else if (categorytype == "Luxury" && geartype == "Manual") {
    let n = ThousandsSeparatorForPrice(
      Math.round(
        totaltime * costratio * freekmsrange * fuelcost + deliveryCharge
      )
    );
    return n;
  } else if (categorytype == "Luxury" && geartype == "Automatic") {
    let n = ThousandsSeparatorForPrice(
      Math.round(
        totaltime * costratio * freekmsrange * fuelcost + deliveryCharge
      )
    );
    return n;
  }
}

function ThousandsSeparatorForPrice(num) {
  var num_parts = num.toString().split(".");
  num_parts[0] = num_parts[0].replace(/\B(?=(\d{3})+(?!\d))/g, ",");
  return num_parts.join(".");
}

var deliveryToggle = false;
function AddDoorDeliveryCharges() {
  if (deliveryToggle) {
    localStorage.setItem("doordelivery", 0);
    DisplayCars();
    deliveryToggle = false;
  } else {
    localStorage.setItem("doordelivery", 299);
    DisplayCars();
    deliveryToggle = true;
  }
}

FillPickupDropOffDateTimeDetails();
FillPickupLocationDetails();
CarTypeFiltering();
TransmissionTypeFiltering();
SetFree100Kms();
SortDistance();
// SetFree100Kms();

DisplayCars();

const changeNav = () => {
  let sign_btn = document.getElementById("signup_btn");
  sign_btn.style.display = "none";
  let login_btn = document.getElementById("login_btn");
  login_btn.style.display = "none";
  let parent_ul = document.getElementById("nav_ul");

  let li_img = document.createElement("li");
  li_img.setAttribute("class", "item");

  let divcre = document.createElement("div");

  let image = document.createElement("img");
  image.setAttribute("id", "avtar_logo");

  image.src = "../Landingpage/img/avtar_logo_log.png";

  divcre.append(image);
  li_img.append(divcre);

  parent_ul.append(li_img);
  let logged_user = JSON.parse(localStorage.getItem("loggedinwith"));
  let li_name = document.createElement("li");
  li_name.setAttribute("class", "item");
  li_name.setAttribute("id", "user_left_mar");
  li_name.innerHTML = `<div class="us_name" onclick="show_dr_box()">${logged_user}
<i class="fas fa-caret-down"></i></div>
  <div id="dropdown_5">
  <div class="arrowmiddle55"></div>
       <div class="drop_d_links first_us_box">
          <button onclick="add()">MY ACCOUNT</button>
       <div>
       <div class="drop_d_links">
          <button>MY BOOKINGS</button>
       <div>
       <div class="drop_d_links">
          <button>SUPERMILER CLUB</button>
       <div>
       <div class="drop_d_links">
          <button>MY REFERRALS</button>
       <div>
       <div class="drop_d_links last_bttn">
          <button onclick="logoutFunc()">LOGOUT</button>
       <div>
  </div>`;

  parent_ul.append(li_name);
};

function show_dr_box() {
  var dropdown_5 = document.getElementById("dropdown_5");
  if (dropdown_5.style.display != "none") {
    dropdown_5.style.display = "none";
  } else {
    dropdown_5.style.display = "block";
  }
}

function logoutFunc() {
  window.location.href = "../Homepage-main.html";
  localStorage.setItem("logindone", JSON.stringify("no"));
}

let check = JSON.parse(localStorage.getItem("logindone"));
if (check == "yes") {
  changeNav();
}

function NavigatePickuplocation() {
  setTimeout(() => {
    window.location.href = "../PickuplocationSelection/PickUpLocation.html";
    let toggle = document.getElementById("differentcity");
    toggle.innerHTML = `<input onclick=NavigatePickuplocation() type="checkbox">
                        <span class="toggle-slider round"></span>`;
  }, 3000);
}
