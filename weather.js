const weather = document.querySelector(".js-weather");

const API_KEY = "7f0b2fee6a9129dba2c39eb73afaed55";
const COORDS = 'coords';

function getWeather(lat,lng){
  console.log(hello);
  fetch(`https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lng}&appid=${API_KEY}&units=metric`).then(function(response){
    return console.log(response.json);
  }).then(function(json){
    const temperature = json.main.temp;
    const place = json.name;
    weather.innerText - `${temperature} @ ${place}`
  })
}

function saveCoords(coordsObj){
  localStorage.setItem(COORDS, JSON.stringify(coordsObj));
}

function handleGeoSuccess(position){
  const latitude = position.coords.latitude;
  const logitude = position.coords.longitude;
  const coordObj = {
    laditude,
    longitude
  }
  saveCoords(coordsObj);
  getWeather(latitude,longitude);
}
function handleGeoError(){

}

function askForCoords(){
  navigator.geolocation.getCurrentPosition(handleGeoSuccess,handleGeoError);
}

function loadCoords(){
  const loadedCoords = localStorage.getItem(COORDS);
  if(loadedCoords === null){
    askForCoords();
  }
  else{
    const parseCoords = JSON.parse(loadedCoords);
    getWeather(parseCoords.latitude,parseCoords.longitude);
  }
}

function init(){
  loadCoords();
}
init();