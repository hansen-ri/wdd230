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