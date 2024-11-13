/*Creates dropdown-on-click for navbar on small screens*/
function dropdown() {
    var x = document.getElementById("mainnav");
    if (x.className === "nav") {
      x.className += " responsive";
    } else {
      x.className = "nav";
    }
  }


