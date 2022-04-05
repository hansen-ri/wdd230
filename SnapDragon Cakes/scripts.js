// Hamburger menu
// \/ \/ \/
const hambutton = document.querySelector(".ham");
const mainnav = document.querySelector(".navigation");
const subnav = document.querySelector("#flex-container2");

hambutton.addEventListener(
  "click",
  () => {
    subnav.classList.toggle("display-menu");
    // var x = document.querySelector(".ham");
    // console.log(x.innerHTML);
    // if (x.innerHTML === "Menu") {
    //     x.innerHTML = "X";
    // }   else {
    //     x.innerHTML = "Menu"
    // }
},
  false
);

window.onresize = () => {
  if (window.innerWidth > 450) subnav.classList.remove("display-menu");
};
// /\ /\ /\

// SlideShow logic
var slideIndex = 1;
showDivs(slideIndex);

function plusDivs(n) {
  showDivs(slideIndex += n);
}

function showDivs(n) {
  var i;
  var x = document.getElementsByClassName("mySlides");
  if (n > x.length) {slideIndex = 1}
  if (n < 1) {slideIndex = x.length}
  for (i = 0; i < x.length; i++) {
    x[i].style.display = "none";  
  }
  x[slideIndex-1].style.display = "block";  
}
// /\ /\ /\

// // Fancy Footer Work
// // \/ \/ \/
// const phone = document.querySelector()
// window.onresize = () => {
//   if (window.innerWidth < 510) 
// }
// // /\ /\ /\