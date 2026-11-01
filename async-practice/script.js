async function getWeather() {
  const response = await fetch("https://api.open-meteo.com/v1/forecast?latitude=18.79&longitude=98.98&current=temperature_2m");
  const data = await response.json();

  console.log(data);
  console.log(`เชียงใหม่ตอนนี้ ${data.current.temperature_2m} องศา`);
}

getWeather();