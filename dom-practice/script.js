const title = document.querySelector("#title")

const countText = document.querySelector("#count");
let count = 0;

function updateDisplay() {
  countText.textContent = "SHOW NUMBER " + count;
  if (count <0){
    countText.style.color = "red";
  }else{
    countText.style.color = "black";
  }
  
}
const addBtn = document.querySelector("#add-btn");
addBtn.addEventListener("click", () => {
    count++;
    updateDisplay();
});


const minusBtn = document.querySelector("#delete-btn");
minusBtn.addEventListener("click", () => {
    count--;
    updateDisplay();
  
});

const resetBtn = document.querySelector("#reset-btn");
resetBtn.addEventListener("click", () => {
    count = 0;
    updateDisplay();
});

  


