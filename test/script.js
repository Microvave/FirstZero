const taskInput = document.querySelector("#name");
const taskNumber = document.querySelector("#price");
const addBtn = document.querySelector("#add-btn");
const taskList = document.querySelector("#task-list");
const countText = document.querySelector("#count");
const discountText = document.querySelector("#discount");

function updateCount() {
    let price = 0;

    for (const item of taskList.children) {
        //if (item.classList.contains("done") === false) {
            price += Number(item.dataset.price);
        //}
    }

    countText.textContent = `ยอดรวม ${price} บาท`;
    if (price < 500) {
        const remaining = 500 - price;
        discountText.textContent = `ซื้อเพิ่มอีก ${remaining} บาท เพื่อรับส่วนลด`;
    } else {
        discountText.textContent = "ได้รับส่วนลดแล้ว";
    }
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
    li.classList.add("cart-item");
    
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