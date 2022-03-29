let currentdate = document.lastModified;
document.getElementById("update").textContent = `Last Updated: ${currentdate}`;

let d = new Date();
let currentyear = d.getFullYear();
document.querySelector(
  "#pagecredits"
).innerHTML = `&copy; ${currentyear} goodyearcoc.com .:|:. Riley G. Hansen .:|:. BYU-Idaho .:|:. WDD 130 Project .:|:.`;

// Handle data logic for Monday/Tuesday banner 
const datefield = document.querySelector("#date");
const now = new Date();
const fulldate = new Intl.DateTimeFormat("en-US", { dateStyle: "full" }).format(
  now
);

// if (fulldate.includes("Monday") || fulldate.includes("Tuesday"));
datefield.innerHTML = `|| Today is ${fulldate}. Come join us for the chamber meet and greet Wednesday at 7:00 p.m ||`;
if (fulldate.includes("Wednesday") || fulldate.includes("Thursday") || fulldate.includes("Friday") || fulldate.includes("Saturday") || fulldate.includes("Sunday")) {
  document.getElementById("date").style.display = "None";
};


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

// Weather API 
const apiURL = "https://api.openweathermap.org/data/2.5/weather?id=5296266&appid=73b8add6eff6e1a81677303097bb30a6";
fetch(apiURL)
  .then((response) => response.json())
  .then((jsObject) => {
    console.log(jsObject);
    document.querySelector('#current-temp').textContent = ((jsObject.main.
    temp - 273.15) * 1.8 + 32).toFixed(1);

    const iconsrc= `https://openweathermap.org/img/w/${jsObject.weather[0].icon}.png`;
    const desc = jsObject.weather[0].description;
    document.querySelector('#icon-src').textContent = iconsrc;
    document.querySelector('#weathericon').setAttribute('src', iconsrc);
    document.querySelector('#weathericon').setAttribute('alt', desc);
    document.querySelector('figcaption').textContent = desc;    
  });
  // Weather API