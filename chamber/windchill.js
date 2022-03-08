let currenttemp = 39;
document.querySelector('#temp').textContent = currenttemp;

let weather_label = "Partly Cloudy";
document.querySelector("#weather_status").textContent = weather_label;

let windSpeed = 10;
document.querySelector("#wind_speed").textContent = "Wind Speed: " + windSpeed + " MPH";

let windChill = ((35.74 + (0.6215 * currenttemp))-(35.75 * Math.pow(windSpeed,0.16)) + (0.4275*currenttemp*Math.pow(windSpeed,0.16))).toFixed(2);
document.querySelector("#wind_chill").innerHTML = "Wind Chill: " + windChill + " &#176 F";