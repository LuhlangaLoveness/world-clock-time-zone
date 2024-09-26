function updateTime() {
  let capeTown = document.querySelector("#cape-town");
  let capeTownDate = capeTown.querySelector(".date");
  let capeTownTime = capeTown.querySelector(".time");
  capeTownDate.innerHTML = moment().format("dddd Do YYYY");
  capeTownTime.innerHTML = moment()
    .tz(`Afrika/Cape_Town`)
    .format("H:m:ss:SSSS[<strong>] A[</strong>]");

  let sydneyElement = document.querySelector("#sydney");
  let sydneyDate = sydneyElement.querySelector(".date");
  let sydneyTime = sydneyElement.querySelector(".time");
  sydneyDate.innerHTML = moment().format("dddd Do YYYY");
  sydneyTime.innerHTML = moment()
    .tz(`Australia/Sydney`)
    .format("H:m:ss:SSSS [<strong>] A[</strong>]");

  let parisElement = document.querySelector("#paris");
  let parisDate = parisElement.querySelector(".date");
  let parisTime = parisElement.querySelector(".time");
  parisDate.innerHTML = moment().format("dddd Do YYYY");
  parisTime.innerHTML = moment()
    .tz(`France/Paris`)
    .format("H:m:ss:SSSS[<strong>] A[</strong>]");
}
function updateCity(event) {
  let cityTimeZone = event.target.value;
  if (cityTimeZone === "current") {
    cityTimeZone = moment.tz.guess();
  }
  let cityName = cityTimeZone.replace("_", " ").split("/")[1];
  let cityTime = moment().tz(cityTimeZone);
  let citiesElement = document.querySelector("#cities");
  citiesElement.innerHTML = `
  <div class="city">
          <div>
            <h2>${cityName}</h2>
            <div class="date">${cityTime.format("MMMM Do YYYY")}</div>
          </div>
          <div class="time">${cityTime.format(
            "h:m:ss"
          )} <strong>${cityTime.format("A")}</strong></div>
        </div>
        <a href="/">All cities</a>
        
  `;
}
updateTime();
setInterval(updateTime, 100);
let citiesSelect = document.querySelector("#city");
citiesSelect.addEventListener("change", updateCity);
