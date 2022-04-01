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
//  \/ \/ \/
// var myIndex = 0;
// carousel();

// function carousel() {
//   var i;
//   var x = document.getElementsByClassName("mySlides");
//   for (i = 0; i < x.length; i++) {
//     x[i].style.display = "none";  
//   }
//   myIndex++;
//   if (myIndex > x.length) {myIndex = 1}    
//   x[myIndex-1].style.display = "block";  
//   setTimeout(carousel, 2500);    
// }
// /\ /\ /\