const citySelect = document.querySelector("#city-select");
const showBtn = document.querySelector("#show-btn");
const result = document.querySelector("#result");

const cities = [
  { id: "bangkok", name: "กรุงเทพ", lat: 13.75, lon: 100.5 },
  { id: "chiangmai", name: "เชียงใหม่", lat: 18.79, lon: 98.98 },
  { id: "phuket", name: "ภูเก็ต", lat: 7.88, lon: 98.39 },
  { id: "khonkaen", name: "ขอนแก่น", lat: 16.44, lon: 102.83 }
];

showBtn.addEventListener("click", async () => {
  const city = cities.find(item => item.id === citySelect.value);

  result.textContent = "กำลังโหลด...";

  try {
    const response = await fetch(`https://api.open-meteo.com/v1/forecast?latitude=${city.lat}&longitude=${city.lon}&current=temperature_2m`);
    const data = await response.json();

    result.textContent = `${city.name} ตอนนี้ ${data.current.temperature_2m} องศา`;
  } catch (error) {
    result.textContent = "ดึงข้อมูลไม่สำเร็จ ลองใหม่อีกครั้ง";
    console.log(error);
  }

});


console.log(100 > 100);
console.log(100 >= 100);
console.log([5, 8, 12].find(n => n > 6));
console.log([5, 8, 12].filter(n => n > 6));
console.log([5, 8, 12].map(n => n > 6));
