const changeColorFunction = function () {
  const navbar = document.getElementById("navbar");
  const button = document.getElementById("get-started");
  const scrollY = window.scrollY;

  if (scrollY > 475) {
    navbar.style.backgroundColor = "white";
    button.style.backgroundColor = "#538724";
  } else {
    navbar.style.backgroundColor = "#ffc017";
    button.style.backgroundColor = "black";
  }
};

window / addEventListener("scroll", changeColorFunction);
