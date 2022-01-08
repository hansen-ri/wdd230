let currentdate = document.lastModified;
document.getElementById("update").textContent = `Last Updated: ${currentdate}`;

let d = new Date();
let currentyear = d.getFullYear();
document.querySelector("#pagecredits").innerHTML = `&copy; ${currentyear} .:|:. Riley Grant Hansen .:|:. Idaho`;