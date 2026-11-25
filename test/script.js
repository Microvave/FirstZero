const taskInput = document.querySelector("#name");
const taskNumber = document.querySelector("#price");
const addBtn = document.querySelector("#add-btn");
const taskList = document.querySelector("#task-list");
const countText = document.querySelector("#count");

function updateCount() {
    let price = 0;

    for (const item of taskList.children) {
        if (item.classList.contains("done") === false) {
            price += Number(item.dataset.price);
        }
    }

    countText.textContent = `ยอดรวม ${price} บาท`;
}


addBtn.addEventListener("click", () => {
    const text = taskInput.value;
    const priceValue = taskNumber.value;
    if (text === "" || priceValue === "") {
        return
    }

    const li = document.createElement("li");
    li.textContent = `${text} - ${priceValue} บาท`;
    li.dataset.price = priceValue;

    li.addEventListener("click", () => {
        li.classList.toggle("done");
        updateCount();
    });

    const deleteBtn = document.createElement("button");
    deleteBtn.textContent = "ลบ"

    deleteBtn.addEventListener("click", () => {
        li.remove();
        updateCount();
    });

    li.appendChild(deleteBtn);
    taskList.appendChild(li);
    taskInput.value = "";
    taskNumber.value = "";
    updateCount();

});
updateCount();