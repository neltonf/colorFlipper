let hex = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, "A", "B", "C", "D", "E", "F"];
let hexBtn = document.getElementById("hex-btn-click");

// Before click
let hexColor = "#";
for (let i = 0; i < 6; i++) {
  hexColor += hex[Math.floor(Math.random() * hex.length)];
}
document.getElementById("main").style.background = hexColor;
document.getElementById("hex-bg-display").innerHTML =
  "Background Color : " + hexColor;
hexColor = "";

hexBtn.addEventListener("click", function () {
  console.log("hexxxxxxxxxxx");
  let hexColor = "#";
  for (let i = 0; i < 6; i++) {
    hexColor += hex[Math.floor(Math.random() * hex.length)];
  }
  document.getElementById("main").style.background = hexColor;
  document.getElementById("hex-bg-display").innerHTML =
    "Background Color : " + hexColor;
  hexColor = "";
});
