const btnLeft = document.querySelector(".fa-angle-left");
const btnRight = document.querySelector(".fa-angle-right");
const tabMenu = document.querySelector(".tab-menu");

function lconVIsibilty() {
  let scrollLeftValue = Math.ceil(tabMenu.scrollLeft);
  let scrollableWidth = tabMenu.scrollWidth - tabMenu.clientWidth;
  btnLeft.style.display = scrollLeftValue > 0 ? "block" : "none";
  btnRight.style.display = scrollableWidth > scrollLeftValue ? "block" : "none";
}

btnRight.addEventListener("click", () => {
  tabMenu.scrollLeft += 150;
  setTimeout(() => lconVIsibilty(), 50);
});

btnLeft.addEventListener("click", () => {
  tabMenu.scrollLeft -= 150;
  setTimeout(() => lconVIsibilty(), 50);

  console.log("left");
});

window.addEventListener("load", () => {
  btnRight.style.display =
    tabMenu.scrollWidth > tabMenu.clientWidth ||
    tabMenu.scrollWidth >= window.innerWidth
      ? "block"
      : "none";
  btnLeft.style.display =
    tabMenu.scrollWidth >= window.innerWidth ? "" : "none";
});

window.addEventListener("resize", () => {
  btnRight.style.display =
    tabMenu.scrollWidth > tabMenu.clientWidth ||
    tabMenu.scrollWidth >= window.innerWidth
      ? "block"
      : "none";
  btnLeft.style.display =
    tabMenu.scrollWidth >= window.innerWidth ? "" : "none";

  let scrollLeftValue = Math.round(tabMenu.scrollLeft);

  btnLeft.style.display = scrollLeftValue > 0 ? "block" : "none";
});

//jS to make the tab navigation draggable
let activeDrag = false;

tabMenu.addEventListener("mousemove", (drag) => {
  if (!activeDrag) return;
  tabMenu.scrollLeft -= drag.movementX;
  lconVIsibilty();
  tabMenu.classList.add("dragging");
});

tabMenu.addEventListener("mousedown", (e) => {
  activeDrag = true;
});

document.addEventListener("mouseup", (e) => {
  activeDrag = false;
  tabMenu.classList.remove("dragging");
});

const tabs = document.querySelectorAll(".tab");
const tabBtn = document.querySelectorAll(".tab-btn");

const tabNav = function (tableClick) {
  tabBtn.forEach((tab) => {
    tab.classList.remove("active");
  });

  tabs.forEach((tabs) => {
    tabs.classList.remove("active");
  });

  tabBtn[tableClick].classList.add("active");

  tabs[tableClick].classList.add("active");
};

tabBtn.forEach((tab, i) => {
  tab.addEventListener("click", () => {
    tabNav(i);
  });
});
