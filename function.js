var slideIndex = 0;

//slideshow function.
carousel();

function carousel() {
var position;
var slide = document.getElementsByClassName("mySlides");
for (position = 0; position < slide.length; position++) {
    slide[position].style.display = "none";
}

slideIndex++;
if (slideIndex > slide.length) {slideIndex = 1}
slide[slideIndex-1].style.display = "block";
setTimeout(carousel, 1800);

}