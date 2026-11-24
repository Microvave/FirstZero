// ขั้น 2: ใน script.js เมื่อกดปุ่มเพิ่ม ให้:
const taskInput = document.querySelector("#task-input");
const addBtn = document.querySelector("#add-btn");
const taskList = document.querySelector("#task-list");
const countText = document.querySelector("#count");


function updateCount() {
    let count = 0;                                      

    for (const item of taskList.children) {             
        if (item.classList.contains("done") === false) {  
            count++;                                        
        }
    }

    countText.textContent = `เหลือ ${count} งาน`;       
}

addBtn.addEventListener("click", () => {
    const text = taskInput.value;
    if (text === "") {
        return
    }

    // สร้าง li ใส่ข้อความนั้น
    const li = document.createElement("li");
    li.textContent = text;

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
    updateCount();
});
updateCount();
