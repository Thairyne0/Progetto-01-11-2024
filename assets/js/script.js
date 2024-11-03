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

const elements = document.querySelectorAll('[stroke-linecap="butt"]');

const animation = function () {
  let random = Math.floor(Math.random() * (elements.length + 1));
  console.log(elements[random]);
  let elementoM = elements[random];

  if (elementoM.classList.contains("hidden")) {
    elementoM.classList.remove("hidden");
  } else {
    elementoM.classList.add("hidden");
  }

  console.log("merito un 10?");
};

const intervallo = setInterval(animation, 10);

window / addEventListener("scroll", changeColorFunction);
