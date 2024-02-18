
var sliders = document.querySelectorAll("input[type='range']");


sliders.forEach(function (slider) {
    slider.addEventListener("input", function () {

        updateBackgroundColor();
    });
});

// Function to change the bg color according to the slider values
function updateBackgroundColor() {

    var redValue = document.getElementById("red").value;
    var greenValue = document.getElementById("green").value;
    var blueValue = document.getElementById("blue").value;


    var newColor = 'rgb(' + redValue + ',' + greenValue + ',' + blueValue + ')';


    document.body.style.backgroundColor = newColor;
}