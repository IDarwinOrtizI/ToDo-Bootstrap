const Input = document.getElementById("textInput");
const agregarBtn = document.getElementById("botonAgregar");
const Lista = document.getElementById("lista");

let item;

function agregarTarea() {
    const nuevaTarea = Input.value.trim(); 

    if (nuevaTarea !== "") {  
        item = document.createElement("li");
        item.innerHTML = `<span>${nuevaTarea}</span>
                        <button class="delete-btn">❌</button>
                        <button class="completar-tarea">✅</button>`;

        const eliminarBtn = item.querySelector(".delete-btn");
        eliminarBtn.addEventListener("click", eliminarTarea);
        Lista.appendChild(item);
        Input.value = ""; 
    }
}

function eliminarTarea() {
    this.parentElement.remove();
}

agregarBtn.addEventListener("click", agregarTarea); 

Input.addEventListener("keypress", function (e) {
    if (e.key === "Enter") {
        agregarTarea();
    }
});

Lista.addEventListener("click", function (e) {
    if (e.target.tagName === "SPAN") {
        e.target.classList.toggle("complete");
        
    }
});

Lista.addEventListener("click", function (e) {
    if (e.target.classList.contains("delete-btn")) {  
        e.target.parentElement.remove();
    }
});

Lista.addEventListener("click", function (e) {
    if (e.target.classList.contains("completar-tarea")){
        const tarea = e.target.closest("li").querySelector("span");

        if (tarea){
            tarea.classList.toggle("complete")
        }
    }
})