export default async function getCityWeather(cityQuery) {
  const url = `https://api.openweathermap.org/data/2.5/weather?q=${cityQuery}&appid=b22a0f977cd497e178d94a1e1d72c022`;

  const response = await fetch(url);
  const data = await response.json();

  const temp = data.main.temp;
  const feels_like = data.main.feels_like;
  const city = data.name;
  const country = data.sys.country;
  const humidity = data.main.humidity;
  const condition = data.weather[0].description;

  return { temp, feels_like, city, country, humidity, condition };
}
