window.onscroll = function () {
  const stickyNavbar = document.querySelector(".second-nav");
  const scrollPosition = window.scrollY;

  if (scrollPosition > 0) {
    stickyNavbar.classList.add("sticky");
  } else {
    stickyNavbar.classList.remove("sticky");
  }
};

// Navbar Hovering Display Item List---

const mktHover = document.getElementById("mktHover");
const trdHover = document.getElementById("trdHover");
const invstHover = document.getElementById("invstHover");
const toolsHover = document.getElementById("toolsHover");
const compHover = document.getElementById("compHover");

const mktItems = document.getElementById("mktItems");
const compItems = document.getElementById("compItems");
const trdItems = document.getElementById("trdItems");
const toolsItems = document.getElementById("toolsItems");
const invstItems = document.getElementById("invstItems");

// ---Market Hover---
mktHover.addEventListener("mouseover", () => {
  mktItems.style.display = "block";
});
mktHover.addEventListener("mouseout", () => [
  (mktItems.style.display = "none"),
]);

// ---Trading Hover---
trdHover.addEventListener("mouseover", () => {
  trdItems.style.display = "block";
});

trdHover.addEventListener("mouseout", () => {
  trdItems.style.display = "none";
});

// ---Investing Hover---
invstHover.addEventListener("mouseover", () => {
  invstItems.style.display = "block";
});

invstHover.addEventListener("mouseout", () => {
  invstItems.style.display = "none";
});

// ---Tools and Education Hover---
toolsHover.addEventListener("mouseover", () => {
  toolsItems.style.display = "block";
});

toolsHover.addEventListener("mouseout", () => {
  toolsItems.style.display = "none";
});

// ---Company Hover---

compHover.addEventListener("mouseover", () => {
  compItems.style.display = "block";
});

compHover.addEventListener("mouseout", () => {
  compItems.style.display = "none";
});


//Navbar Hovering Display Item List Ends Here---