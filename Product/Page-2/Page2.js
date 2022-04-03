var popUp = document.getElementById("popUp");

var btn = document.getElementById("popUpBtn");

btn.onclick = function() {
  popUp.style.display = "block";
}

window.onclick = function(event) {
  if(event.target == popUp) {
    modal.style.display = "none";
  }
}