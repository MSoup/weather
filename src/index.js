let textfield = document.querySelector("#city");
let cityName = document.querySelector(".cityName");
let cityForm = document.getElementById("getCity");
let conditions = document.querySelector(".conditions");

function handleSubmit(e) {
  e.preventDefault();
  //   For debugging
  console.log(e);
  const city = textfield.value;

  getCityInfo(city);
  cityName.textContent = "Loading city...";
}

cityForm.addEventListener("submit", handleSubmit);

async function getCityInfo(cityNameInputted) {
  const url =
    "https://api.openweathermap.org/data/2.5/weather?q=Sendai&appid=b22a0f977cd497e178d94a1e1d72c022";

  const response = await fetch(url);
  const data = await response.json();
  const { temp, feels_like } = data.main;

  const temperature = { temp: temp, feels_like: feels_like };
  const city = data.name;
  const country = data.sys.country;
  const humidity = data.main.humidity;

  cityName.textContent = `${data.name}, ${data.sys.country}`;
  conditions.textContent = `${data.weather[0].description}`;
  console.log(data);
  console.log(temperature);
  console.log(city);
  console.log(country);
  return { temperature, city, country };
}
