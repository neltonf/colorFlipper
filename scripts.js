let colors = ["RED", "BLUE", "GREEN", "YELLOW"];
let btn = document.getElementById("btn-click");
let colorName = colors[Math.floor(Math.random() * colors.length)];
document.getElementById("main").style.background = colorName;
document.getElementById("bg-display").innerHTML =
  "Background Color : " + colorName;


btn.addEventListener("click", function () {
  console.log("Hello");
  let colorName = colors[Math.floor(Math.random() * colors.length)];
  document.getElementById("main").style.background = colorName;
  document.getElementById("bg-display").innerHTML =
    "Background Color : " + colorName;
});

