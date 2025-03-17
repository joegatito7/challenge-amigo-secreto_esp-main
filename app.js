// Crear un array para almacenar los nombres
let amigos = [];

// Función para agregar amigos
function agregarAmigo() {
    const inputNombre = document.getElementById("amigo").value.trim(); // Captura el valor del campo de texto
    if (inputNombre === "") {
        alert("Por favor, inserte un nombre."); // Validar entrada vacía
        return;
    }
    amigos.push(inputNombre); // Agregar nombre al array
    document.getElementById("amigo").value = ""; // Limpiar el campo de entrada
    mostrarLista(); // Actualizar la lista visible
}

// Función para mostrar la lista de amigos
function mostrarLista() {
    const listaElement = document.getElementById("listaAmigos");
    listaElement.innerHTML = ""; // Limpiar contenido anterior
    amigos.forEach(amigo => {
        const li = document.createElement("li"); // Crear elemento <li>
        li.textContent = amigo; // Asignar el nombre como texto
        listaElement.appendChild(li); // Añadir <li> al elemento <ul>
    });
}

// Función para sortear un amigo
function sortearAmigo() {
    if (amigos.length === 0) {
        alert("No hay amigos en la lista para sortear."); // Validar si el array está vacío
        return;
    }
    const indiceAleatorio = Math.floor(Math.random() * amigos.length); // Generar índice aleatorio
    const amigoSorteado = amigos[indiceAleatorio]; // Obtener nombre sorteado
    const resultadoElement = document.getElementById("resultado");
    resultadoElement.innerHTML = `El amigo secreto es: <strong>${amigoSorteado}</strong>`; // Mostrar resultado
}