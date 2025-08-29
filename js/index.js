// icon symbol of service

// get icon button all class
const iconBtns = document.querySelectorAll(".icon-btn");
//// get Navbar icon button id
const iconNav = document.getElementById("icon");
//click and count variable
let count = 0;
//loop all icons button
for (const icon of iconBtns) {
  icon.addEventListener("click", function () {
    //click add count
    count++;
    //set count innerText navbar icon id
    iconNav.innerText = count;
  });
}

// number copy handel
const copyBtns = document.querySelectorAll(".copy-btn");
const copyNumber = document.querySelectorAll(".copy-number");
const copyCountNav = document.getElementById("copy-count");
let copyCount = 0;
for (let index = 0; index < copyBtns.length; index++) {
  copyBtns[index].addEventListener("click", function () {
    const numberOfCopy = copyNumber[index].innerText;
    navigator.clipboard.writeText(numberOfCopy).then(function () {
      copyCount++;
      copyCountNav.innerText = copyCount;
      alert("Copy Number : " + numberOfCopy);
    });
  });
}

//Call handel
//// get call button all class
const callBtns = document.getElementsByClassName("call-btn");
for (let callBtn of callBtns) {
  callBtn.addEventListener("click", function () {
    //get service name
    const cartBtnName =
      callBtn.parentNode.parentNode.parentNode.childNodes[3].childNodes[1]
        .childNodes[1].innerText;
    console.log(cartBtnName);
    //get service number
    const callNumber =
      callBtn.parentNode.parentNode.parentNode.childNodes[3].childNodes[3]
        .childNodes[1].innerText;
    //get service coin
    const coinIcons = parseInt(document.getElementById("coin").innerText);
    // alert
    if (coinIcons <= 0) {
      alert("❌Insufficient Coin you need 20 coin make a call ");
      return;
    } else {
      alert("📞 Calling " + cartBtnName + "  " + callNumber);
    }
    // create object date
    const data = [];
    const dateObject = {
      date: new Date().toLocaleTimeString("en-US"),
    };
    data.push(dateObject);
    //get call history id
    const cartHistory = document.getElementById("cart-history");
    // create call history and show
    const newHistory = document.createElement("div");
    newHistory.innerHTML = `<div class="flex justify-between items-center background mt-4 p-4">
              <div>
                <h1 class="text-xl font-semibold text-[#111111]">${cartBtnName}</h1>
                <p class="text-xl text-[#5C5C5C]">${callNumber}</p>
              </div>
              <div>
              <p class="text-xl  text-[#111111]">${dateObject.date}</p>
              </div>
            </div>
    `;
    cartHistory.append(newHistory);
    //create coin icon lass par click
    const currentCoin = coinIcons - 20;
    document.getElementById("coin").innerText = currentCoin;
  });
}

//// get clear all data
document.getElementById("clear-btn").addEventListener("click", function () {
  const cartClear = document.getElementById("cart-history");
  cartClear.innerHTML = "";
});
