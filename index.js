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
setInterval(updateTime, 100);
