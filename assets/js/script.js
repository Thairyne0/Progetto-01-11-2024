const changeColorFunction = function () {
  const navbar = document.getElementById("navbar");
  const button = document.getElementById("get-started");
  const scrollY = window.scrollY;

  if (scrollY > 470) {
    navbar.style.backgroundColor = "white";
    button.style.backgroundColor = "#538724";
  } else {
    navbar.style.backgroundColor = "#ffc017";
    button.style.backgroundColor = "black";
  }
};

const elements = document.querySelectorAll("g");

const animation = function () {
  elements[Math.floor(Math.random() * (elements.length + 1))].style.display
    .none;
  console.log("ciao");
};

const intervallo = setInterval(animation, 100);

window / addEventListener("scroll", changeColorFunction);
