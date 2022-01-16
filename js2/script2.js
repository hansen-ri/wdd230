let currentdate = document.lastModified;
let d = new Date();
let currentyear = d.getFullYear();
document.querySelector(
  "#pagecredits"
).innerHTML = `&copy; ${currentyear} | Riley Grant Hansen | Last Updated: ${currentdate}`;
