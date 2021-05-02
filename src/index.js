import getCityWeather from "./getCityWeather.js";
import { kelvinToFahrenheit, kelvinToCelsius } from "./helpers.js";

// Form functions
function handleSubmit(e) {
  e.preventDefault();

  const textfield = document.querySelector("#city");
  let cityName = document.querySelector(".cityName");

  const city = textfield.value;
  if (!city) {
    cityName.textContent = "Cannot search empty field";
    return;
  }
  populateData(city);
  cityName.textContent = "";
}

let cityForm = document.getElementById("getCity");
cityForm.addEventListener("submit", handleSubmit);

// Generate Data based on submission
async function populateData(formValue) {
  const {
    temp,
    feels_like,
    city,
    country,
    humidity,
    condition,
  } = await getCityWeather(formValue);
  // Convert temps to common values
  const readableTempC = kelvinToCelsius(temp);
  console.log(readableTempC);
  const readableTempF = kelvinToFahrenheit(temp);

  const cardContainer = document.querySelector(".infoCard");
  const infoCardCity = document.querySelector(".infoCardCity");
  const infoCardTemp = document.querySelector(".infoCardTemp");
  const infoCardWeather = document.querySelector(".infoCardWeather");
  const infoCardHumidity = document.querySelector(".infoCardHumidity");

  const showC = function () {
    return true;
  };
  infoCardCity.textContent = city;
  infoCardTemp.textContent = showC ? readableTempC : readableTempF;
  // `${temp} (feels like ${feels_like})`;
  infoCardWeather.textContent =
    condition.charAt(0).toUpperCase() + condition.slice(1);
  infoCardHumidity.textContent = `Humidity: ${humidity}`;
}

function getWeatherIcon(weather) {
  const icon = document.querySelector(".fas");
  // Clear class first
  icon.className = "fas";
  console.log(icon);
  // Add logic to change icon based off of FA icons
  icon.classList.add("fa-bolt");
}
