var slideIndex = 0;

//slideshow function.
carousel();

function carousel() {
var position;
var slide = document.getElementsByClassName("mySlides");

//display the select img from slide
for (position = 0; position < slide.length; position++) {
    slide[position].style.display = "none";
}

//reset slide and recycle the img again
slideIndex++;
if (slideIndex > slide.length) {slideIndex = 1}
slide[slideIndex-1].style.display = "block";

//time between slide
setTimeout(carousel, 1800);
}