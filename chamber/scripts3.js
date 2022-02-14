let currentdate = document.lastModified;
document.getElementById("update").textContent = `Last Updated: ${currentdate}`;

let d = new Date();
let currentyear = d.getFullYear();
document.querySelector(
  "#pagecredits"
).innerHTML = `&copy; ${currentyear} goodyearcoc.com .:|:. Riley G. Hansen .:|:. BYU-Idaho .:|:. WDD 130 Project .:|:.`;

const datefield = document.querySelector("#date");
const now = new Date();
const fulldate = new Intl.DateTimeFormat("en-US", { dateStyle: "full" }).format(
  now
);

// if (fulldate.includes("Monday") || fulldate.includes("Tuesday"));
  datefield.innerHTML = `<strong>${fulldate}</strong>`;

const hambutton = document.querySelector(".ham");
const mainnav = document.querySelector(".navigation");

hambutton.addEventListener(
  "click",
  () => {
    mainnav.classList.toggle("responsive");
  },
  false
);

window.onresize = () => {
  if (window.innerWidth > 647) mainnav.classList.remove("responsive");
};
