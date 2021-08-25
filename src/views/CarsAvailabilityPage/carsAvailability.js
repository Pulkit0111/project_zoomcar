var SelectedCarToBook = {};
document.title = `Book A Car In ${localStorage.getItem(
  "SelectedCity"
)} | Rent Cars @ Most Affordable Rates - Zoomcar`;
// Details coming from local storage - stored from selector page's details
var pickupdetails = {
  address: localStorage.getItem("address"),
  startDate: localStorage.getItem("startDate"),
  startMonth: localStorage.getItem("startMonth"),
  startTime: localStorage.getItem("startTime"),
  endDate: localStorage.getItem("endDate"),
  endMonth: localStorage.getItem("endMonth"),
  endTime: localStorage.getItem("endTime"),
};

var carslist = [
  {
    carimage:
      "https://s3-ap-southeast-1.amazonaws.com/zoomcar/pictures/original/669ef153e37fe722e57d75af972c5740662b79e5.png?1503045133",
    carname: "Hyundai i20",
    carseatimage: "https://image.flaticon.com/icons/png/128/5102/5102957.png",
    carseater: "5 Seater",
    cartransmissionimage:
      "https://image.flaticon.com/icons/png/128/4259/4259321.png",
    cartransmissiontype: "Manual",
    carluggageimage:
      "https://image.flaticon.com/icons/png/128/5085/5085348.png",
    carluggagesize: "3 Bags",
    cardriverage: "AGE LIMIT: 18+",
    carpickupplace: "4.5",
    carcategory: "Hatchback",
    carCostRatio: 131.3,
    carFreeKMS: 1,
    fuelRatio: 1,
    doorDeliveryCharges: 0,
  },
  {
    carimage:
      "https://s3-ap-southeast-1.amazonaws.com/zoomcar/pictures/original/d290ab2ab4721ae87df602e34ddf2219e57b0c4d.png?1523276462",
    carname: "Maruti Ciaz",
    carseatimage: "https://image.flaticon.com/icons/png/128/5102/5102957.png",
    carseater: "5 Seater",
    cartransmissionimage:
      "https://image.flaticon.com/icons/png/128/4259/4259321.png",
    cartransmissiontype: "Manual",
    carluggageimage:
      "https://image.flaticon.com/icons/png/128/5085/5085348.png",
    carluggagesize: "0 Bags",
    cardriverage: "AGE LIMIT: 18+",
    carpickupplace: "2.3",
    carcategory: "Sedan",
    carCostRatio: 189.6,
    carFreeKMS: 1,
    fuelRatio: 1,
    doorDeliveryCharges: 0,
  },
  {
    carimage:
      "https://s3-ap-southeast-1.amazonaws.com/zoomcar/pictures/original/db8a37dea93bea80173b683d191e228e8afed50b.jpg?1492089335",
    carname: "Hyundai Creta",
    carseatimage: "https://image.flaticon.com/icons/png/128/5102/5102957.png",
    carseater: "5 Seater",
    cartransmissionimage:
      "https://image.flaticon.com/icons/png/128/4259/4259321.png",
    cartransmissiontype: "Manual",
    carluggageimage:
      "https://image.flaticon.com/icons/png/128/5085/5085348.png",
    carluggagesize: "5 Bags",
    cardriverage: "AGE LIMIT: 18+",
    carpickupplace: "9.8",
    carcategory: "SUV",
    carCostRatio: 214.4,
    carFreeKMS: 1,
    fuelRatio: 1,
    doorDeliveryCharges: 0,
  },
  {
    carimage:
      "https://s3-ap-southeast-1.amazonaws.com/zoomcar/pictures/original/964a9433a21c9b95c25217ecdbe653abb658c9f1.png?1521810661",
    carname: "Maruti Swift AT",
    carseatimage: "https://image.flaticon.com/icons/png/128/5102/5102957.png",
    carseater: "5 Seater",
    cartransmissionimage:
      "https://img-premium.flaticon.com/png/128/3785/premium/3785528.png?token=exp=1626976606~hmac=61d893cfa390ec391488d411474d08f3",
    cartransmissiontype: "Automatic",
    carluggageimage:
      "https://image.flaticon.com/icons/png/128/5085/5085348.png",
    carluggagesize: "3 Bags",
    cardriverage: "AGE LIMIT: 18+",
    carpickupplace: "15.6",
    carcategory: "Hatchback",
    carCostRatio: 191.3,
    carFreeKMS: 1,
    fuelRatio: 1,
    doorDeliveryCharges: 0,
  },
  {
    carimage:
      "https://s3-ap-southeast-1.amazonaws.com/zoomcar/pictures/original/442cc622b1d00816cedc3f8ef316ee49aab2ebcd.png?1512544852",
    carname: "Maruti Vitara Brezza",
    carseatimage: "https://image.flaticon.com/icons/png/128/5102/5102957.png",
    carseater: "5 Seater",
    cartransmissionimage:
      "https://image.flaticon.com/icons/png/128/4259/4259321.png",
    cartransmissiontype: "Manual",
    carluggageimage:
      "https://image.flaticon.com/icons/png/128/5085/5085348.png",
    carluggagesize: "4 Bags",
    cardriverage: "AGE LIMIT: 18+",
    carpickupplace: "7.5",
    carcategory: "SUV",
    carCostRatio: 210.7,
    carFreeKMS: 1,
    fuelRatio: 1,
    doorDeliveryCharges: 0,
  },
];

var CarCategoryFilterList = [];
var CarTransmissionFilterList = [];

// Function to fill the pick up location details from local storage
function FillPickupLocationDetails() {
  var pickuppointaddress = document.getElementById("pickuppointaddress");
  pickuppointaddress.innerHTML = pickupdetails.address;

  pickuppointaddress.addEventListener("mouseover", function () {
    pickuppointaddress.style.cursor = "pointer";
  });

  // To redirect the user to select location page in case he/she wishes to change pickup point
  pickuppointaddress.addEventListener("click", function () {
    window.location.href = "../PickuplocationSelection/PickUpLocation.html";
  });
}

// Function to fill the pick up and drop off date and time from local storage
function FillPickupDropOffDateTimeDetails() {
  // Function to fill the pick up and drop off date from local storage
  var startdatedisplay = document.getElementById("startdatedisplay");
  startdatedisplay.innerHTML = pickupdetails.startDate;
  var enddatedisplay = document.getElementById("enddatedisplay");
  enddatedisplay.innerHTML = pickupdetails.endDate;

  // Function to fill the pick up and drop off month from local storage
  var startmonthdisplay = document.getElementById("startmonthdisplay");
  startmonthdisplay.innerHTML = pickupdetails.startMonth;
  var endmonthdisplay = document.getElementById("endmonthdisplay");
  endmonthdisplay.innerHTML = pickupdetails.endMonth;

  // Function to fill the pick up and drop off time from local storage
  var starttimedisplay = document.getElementById("starttimedisplay");
  if (pickupdetails.startTime > "12:00") {
    var time1 = pickupdetails.startTime.split("");
    var res = time1[0] + time1[1];
    if (Number(res) < 12) {
      res = pickupdetails.startTime + " am";
    } else if (Number(res) == "12") {
      res = pickupdetails.startTime + " pm";
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
    var res = pickupdetails.startTime + " am";
  }
  starttimedisplay.innerHTML = res;
  var endtimedisplay = document.getElementById("endtimedisplay");
  if (pickupdetails.endTime > "12:00") {
    var time2 = pickupdetails.endTime.split("");
    var res1 = time2[0] + time2[1];
    if (Number(res1) < 12) {
      res1 = pickupdetails.startTime + " am";
    } else if (Number(res1) == "12") {
      res1 = pickupdetails.startTime + " pm";
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
    var res1 = pickupdetails.endTime + " am";
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

  for (car of carslist) {
    car.carFreeKMS = 1;
  }
  showCars(carslist);
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

  for (car of carslist) {
    car.carFreeKMS = 1.5;
  }
  showCars(carslist);
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

  for (car of carslist) {
    car.carFreeKMS = 2.3;
  }
  showCars(carslist);
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
      var automaticCarArray = [];
      for (car of carslist) {
        if (car.cartransmissiontype == "Automatic") {
          automaticCarArray.push(car);
        }
      }
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
      var manualCarArray = [];
      for (car of carslist) {
        if (car.cartransmissiontype == "Manual") {
          manualCarArray.push(car);
        }
      }
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

  let lowtohighsortedarray = carslist.sort(function (a, b) {
    return a.carCost - b.carCost;
  });

  showCars(lowtohighsortedarray);
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

  let distancesortedarray = carslist.sort(function (a, b) {
    return a.carpickupplace - b.carpickupplace;
  });

  showCars(distancesortedarray);
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

  let hightolowsortedarray = carslist.sort(function (a, b) {
    return b.carCost - a.carCost;
  });

  showCars(hightolowsortedarray);
}

// Function to show the car list and costs when user chooses Without Fuel options
function ExcludeFuelCharges() {
  let withoutfuelcontainer = document.getElementById("withoutfuelcontainer");
  let withfuelcontainer = document.getElementById("withfuelcontainer");
  withoutfuelcontainer.style.backgroundColor = "#70ad4d";
  withoutfuelcontainer.style.color = "white";

  withfuelcontainer.style.backgroundColor = "#f7f7f7";
  withfuelcontainer.style.color = "black";

  for (car of carslist) {
    car.fuelRatio = 1;
  }
  showCars(carslist);
}

// Function to show the car list and costs when user chooses With Fuel options
function IncludeFuelCharges() {
  let withoutfuelcontainer = document.getElementById("withoutfuelcontainer");
  let withfuelcontainer = document.getElementById("withfuelcontainer");
  withfuelcontainer.style.backgroundColor = "#70ad4d";
  withfuelcontainer.style.color = "white";

  withoutfuelcontainer.style.backgroundColor = "#f7f7f7";
  withoutfuelcontainer.style.color = "black";

  for (car of carslist) {
    car.fuelRatio = 1.8;
  }
  showCars(carslist);
}

// Function which helps us display the available cars for the user
function showCars(cararray) {
  var carlistdiv = document.getElementById("carlistdiv");
  carlistdiv.innerHTML = "";

  // console.log(cararray);
  if (
    cararray == [] ||
    cararray == null ||
    cararray == undefined ||
    cararray.length == 0
  ) {
    console.log("test");
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
    for (car of cararray) {
      carlistdiv.style.textAlign = "left";
      let div = document.createElement("div");
      div.style.backgroundColor = "white";
      div.style.display = "flex";
      div.style.height = "21vh";

      let img_div = document.createElement("div");
      img_div.style.width = "20%";
      img_div.style.borderRight = "1px solid lightGrey";
      img_div.style.paddingTop = "1%";
      img_div.style.paddingLeft = "2%";

      let car_pic = document.createElement("img");
      car_pic.src = car.carimage;
      car_pic.style.width = "85%";
      car_pic.style.height = "85%";
      img_div.append(car_pic);

      let middlediv = document.createElement("div");
      // middlediv.style.border = "2px solid red";
      middlediv.style.height = "100%";
      middlediv.style.width = "60%";

      let carnamedetailsdiv = document.createElement("div");
      carnamedetailsdiv.style.height = "50%";
      carnamedetailsdiv.style.width = "100%";
      carnamedetailsdiv.style.padding = "0.5% 1%";
      carnamedetailsdiv.style.borderBottom = "1px solid lightGrey";

      let namediv = document.createElement("div");
      namediv.innerHTML = car.carname;
      namediv.setAttribute("class", "carnamestyling");

      let detailsdiv = document.createElement("div");
      detailsdiv.style.display = "flex";

      let car_seat_pic = document.createElement("img");
      car_seat_pic.src = car.carseatimage;
      car_seat_pic.setAttribute("class", "cardetailimagestyling");
      car_seat_pic.style.marginLeft = "3%";

      let car_seat_details = document.createElement("p");
      car_seat_details.innerHTML = car.carseater;
      car_seat_details.setAttribute("class", "cardetailstyling");

      let car_transmission_pic = document.createElement("img");
      car_transmission_pic.src = car.cartransmissionimage;
      car_transmission_pic.setAttribute("class", "cardetailimagestyling");

      let car_transmission_details = document.createElement("p");
      car_transmission_details.innerHTML = car.cartransmissiontype;
      car_transmission_details.setAttribute("class", "cardetailstyling");

      let car_bag_pic = document.createElement("img");
      car_bag_pic.src = car.carluggageimage;
      car_bag_pic.setAttribute("class", "cardetailimagestyling");

      let car_bag_details = document.createElement("p");
      car_bag_details.innerHTML = car.carluggagesize;
      car_bag_details.setAttribute("class", "cardetailstyling");

      let car_driver_details = document.createElement("p");
      car_driver_details.innerHTML = car.cardriverage;
      car_driver_details.setAttribute("class", "cardetailstyling");
      car_driver_details.style.marginLeft = "5%";

      let separator = document.createElement("div");
      separator.style.border = "1.5px solid lightGrey";
      separator.style.backgroundColor = "lightGrey";
      separator.style.marginLeft = "5%";

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

      let pickuppointdiv = document.createElement("div");
      pickuppointdiv.innerHTML = `${car.carpickupplace} km from Starting Point`;
      pickuppointdiv.style.height = "50%";
      pickuppointdiv.style.width = "100%";
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
        monthArray.indexOf(pickupdetails.startMonth),
        pickupdetails.startDate,
        pickupdetails.startTime[0] + pickupdetails.startTime[1],
        pickupdetails.startTime[3] + pickupdetails.startTime[4],
        0
      );
      let formattedEndDate = new Date(
        new Date().getFullYear(),
        monthArray.indexOf(pickupdetails.endMonth),
        pickupdetails.endDate,
        pickupdetails.endTime[0] + pickupdetails.endTime[1],
        pickupdetails.endTime[3] + pickupdetails.endTime[4]
      );
      let totalHours = FindHoursDifferencebetweenPickupAndDrop(
        formattedStartDate,
        formattedEndDate
      );

      let rupeeSpan = document.createElement("span");
      rupeeSpan.innerHTML = `₹ &nbsp`;
      rupeeSpan.setAttribute("class", "rupeespan");

      let costSpan = document.createElement("span");
      costSpan.innerHTML = FindCostOfVehicleBasedOnCategoryAndTime(
        car.carcategory,
        totalHours,
        car.cartransmissiontype,
        car.carCostRatio,
        car.carFreeKMS,
        car.fuelRatio,
        car.doorDeliveryCharges
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

      booknowbtn.addEventListener("click", function () {
        SelectedCarToBook.carImage = car_pic.src;
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
        );

        window.location.href = "../checkout/checkout.html";
      });
    }
  }
}

function FilterCarsBasedOnChoice() {
  if (
    CarTransmissionFilterList.length == 0 &&
    CarCategoryFilterList.length == 0
  ) {
    showCars(carslist);
  } else if (
    CarCategoryFilterList.length == 0 &&
    CarTransmissionFilterList.length != 0
  ) {
    let FilteredArray = [];
    for (car of carslist) {
      if (CarTransmissionFilterList.includes(car.cartransmissiontype)) {
        FilteredArray.push(car);
      }
    }
    showCars(FilteredArray);
  } else if (
    CarCategoryFilterList.length != 0 &&
    CarTransmissionFilterList.length == 0
  ) {
    let FilteredArray = [];
    for (car of carslist) {
      if (CarCategoryFilterList.includes(car.carcategory)) {
        FilteredArray.push(car);
      }
    }
    showCars(FilteredArray);
  } else if (
    CarCategoryFilterList.length != 0 &&
    CarTransmissionFilterList.length != 0
  ) {
    let FilteredArray = [];
    for (car of carslist) {
      if (
        CarTransmissionFilterList.includes(car.cartransmissiontype) &&
        CarCategoryFilterList.includes(car.carcategory)
      ) {
        FilteredArray.push(car);
      }
    }
    showCars(FilteredArray);
  }
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
    for (car of carslist) {
      car.doorDeliveryCharges = 0;
    }
    showCars(carslist);
    deliveryToggle = false;
  } else {
    for (car of carslist) {
      car.doorDeliveryCharges = 299;
    }
    showCars(carslist);
    deliveryToggle = true;
  }
}

FillPickupDropOffDateTimeDetails();
FillPickupLocationDetails();
CarTypeFiltering();
TransmissionTypeFiltering();
showCars(carslist);
SetFree100Kms();
SortDistance();
// SetFree100Kms();
