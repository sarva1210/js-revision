var inc = document.getElementById("inc");
var h2 = document.querySelector("h2");

var count = 0;

inc.addEventListener("click", function () {
    count++;
    h2.innerHTML = count;
});