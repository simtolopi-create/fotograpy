function addTask() {
    const input = document.getElementById("taskInput");
    const taskValue = input.value;

    if (taskValue === "") {
        alert("Isi tugas terlebih dahulu!");
        return;
    }

    const ul = document.getElementById("taskList");
    
    // Membuat elemen list baru (li)
    const li = document.createElement("li");
    
    li.innerHTML = `
        <span onclick="toggleComplete(this)">${taskValue}</span>
        <button class="delete-btn" onclick="deleteTask(this)">Hapus</button>
    `;

    ul.appendChild(li);
    input.value = ""; // Kosongkan input setelah menambah
}

function toggleComplete(element) {
    element.parentElement.classList.toggle("completed");
}

function deleteTask(element) {
    element.parentElement.remove();
}