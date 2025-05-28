/** @type {HTMLElement} */
const navMenu = document.querySelector(".nav");
const menuBar = document.querySelector(".menu-bar");
const openMenu = document.querySelector(".open-menu");
const closeMenu = document.querySelector(".close-menu");
const overaly = document.querySelector(".overaly");
const tableBody = document.getElementById("table-body");

// mobile nav menu
// open
function openMenuClick() {
  overaly.classList.remove("hidden");
  navMenu.style.left = "0";
}

// close
function closeMenuClick() {
  overaly.classList.add("hidden");
  navMenu.style.left = "-250px";
}

// overaly
function overalyClick() {
  overaly.classList.add("hidden");
  navMenu.style.left = "-250px";
}

// data list
const coinsList = [
  {
    id: 1,
    name: "Bitcoin",
    coinImg: "table-img-1.png",
    nickName: "BTC",
    dailyVector: "up",
    weeklyVecor: "down",
    volume2: "653,452 BTC",
    chartImg: "line-green.png",
  },
  {
    id: 2,
    name: "Ethereum",
    coinImg: "table-img-2.png",
    nickName: "ETH",
    dailyVector: "down",
    weeklyVecor: "up",
    volume2: "653,452 ETH",
    chartImg: "line-green.png",
  },
  {
    id: 3,
    name: "Cardano",
    coinImg: "table-img-3.png",
    nickName: "ADA",
    dailyVector: "down",
    weeklyVecor: "down",
    volume2: "653,452 ADA",
    chartImg: "line-red.png",
  },
  {
    id: 4,
    name: "Tether",
    coinImg: "table-img-4.png",
    nickName: "USDT",
    dailyVector: "up",
    weeklyVecor: "up",
    volume2: "653,452 USDT",
    chartImg: "line-green.png",
  },
  {
    id: 5,
    name: "Avalanche",
    coinImg: "table-img-5.png",
    nickName: "AVAX",
    dailyVector: "down",
    weeklyVecor: "down",
    volume2: "653,452 AVAX",
    chartImg: "line-red.png",
  },
  {
    id: 6,
    name: "Algorand",
    coinImg: "table-img-6.png",
    nickName: "ALGO",
    dailyVector: "up",
    weeklyVecor: "up",
    volume2: "653,452 ALGO",
    chartImg: "line-green.png",
  },
];

// add data list
document.addEventListener("DOMContentLoaded", () => {
  coinsList.forEach((coin) => {
    // up / down colors
    let coinDailyColor = coin.dailyVector === "up" ? "green" : "red";
    let coinDailyVectorRotate = coin.dailyVector === "up" ? "" : "rotate-180";

    let coinWeeklyColor = coin.weeklyVecor === "up" ? "green" : "red";
    let coinWeeklyVectorRotate = coin.weeklyVecor === "up" ? "" : "rotate-180";

    // apend
    tableBody.insertAdjacentHTML(
      "beforeend",
      `
    <tr class="tbody-row">
      <td class="td-number hidden sm-table-cell">
        <div class="td-number__flex flex align-center">
          <svg class="star-svg td-gray">
            <use href="#star"></use>
          </svg>
          <span>${coin.id}</span>
        </div>
      </td>
      <td class="td-name">
        <a class="w-full" href="#">
          <div class="td-name__flex flex align-center">
            <img
              class="table-img"
              src="./Pics/Png/${coin.coinImg}"
              alt="bitcoin"
            />
            <div class="td-name__title">
              <span class="open-sans-13-regular transition-opacity">${coin.name}</span>
              <span class="td-gray transition-opacity">${coin.nickName}</span>
            </div>
          </div>
        </a>
      </td>
      <td class="td-price hidden xsm-table-cell inter-14-medium">
        <p>$55,206.61</p>
      </td>
      <td class="td-daily hidden sm-table-cell ${coinDailyColor} inter-13-regular">
        <svg class="vector-svg ${coinDailyVectorRotate}">
          <use href="#vector"></use>
        </svg>
        <span>0.92%</span>
      </td>
      <td class="td-weekly hidden lg-table-cell ${coinWeeklyColor} inter-13-regular">
        <svg class="vector-svg ${coinWeeklyVectorRotate}">
          <use href="#vector"></use>
        </svg>
        <span>15.86%</span>
      </td>
      <td class="td-info hidden lg-table-cell inter-14-medium">
        $1,046,899,935,348
      </td>
      <td class="td-volume inter-14-medium">
        <div class="td-volume__info">
          <span class="block">$1,046,899,935,348</span>
          <span class="td-gray block">${coin.volume2}</span>
        </div>
      </td>
      <td class="td-chart hidden md-table-cell">
        <div class="td-chart__flex center">
          <img src="./Pics/Png/${coin.chartImg}" alt="line green" / >
          <svg class="dots-svg">
            <use href="#dots"></use>
          </svg>
        </div>
      </td>
    </tr>`
    );
  });
});
