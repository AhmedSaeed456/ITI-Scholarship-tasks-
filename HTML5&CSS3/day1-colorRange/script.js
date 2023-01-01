var redRange = document.getElementById("redRange");
var greenRange = document.getElementById("greenRange");
var blueRange = document.getElementById("blueRange");
  var redValue = document.getElementById("redValue");

this.onchange= function () {
      console.log(redRange);
    redValue.style.color = `rgb(${redRange.value},${greenRange.value},${blueRange.value})`;
  }