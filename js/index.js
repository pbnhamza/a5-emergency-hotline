// icon symbol of service
const iconBtns = document.querySelectorAll(".icon-btn");
const iconNav = document.getElementById("icon");
let count = 0;
for (const icon of iconBtns) {
  icon.addEventListener("click", function () {
    count++;
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
