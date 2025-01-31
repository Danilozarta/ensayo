function login() {
    // Obtén los valores de los campos
    var username = document.getElementById('username').value;
    var password = document.getElementById('password').value;

    
     // Aquí puedes poner la validación o comparación de datos
            // Este es un ejemplo simple, puedes validarlo con una base de datos
            if (username === "admin" && password === "1234") {
                alert("¡Iniciaste sesión correctamente!");
                // Redirige a otra página si la validación es correcta
                window.location.href = "admin.html";  // Cambia esta URL según tu necesidad

            } else if (username === "Danilo" && password === "1234") {
                alert("¡Iniciaste sesión correctamente como Usuario!");
                // Redirige al usuario normal a una página diferente
                window.location.href = "home.html"; 

            } else if (username === "Coordinador" && password === "1234") {
                alert("¡Iniciaste sesión correctamente como Usuario!");
                // Redirige al usuario normal a una página diferente
                window.location.href = "Coordinador.html"; 

            } else {
            document.getElementById('errorMessage').style.display = 'block'; // Muestra el error
            }
        
        } 


 /* pagina          para        que         admin            agregue           usuarios*/
/* pagina          para        que         admin            agregue           usuarios*/
/* pagina          para        que         admin            agregue           usuarios*/
/* pagina          para        que         admin            agregue           usuarios*/


// Mostrar el formulario de agregar usuario
document.getElementById('addUserBtn').addEventListener('click', function() {
    document.getElementById('addUserForm').classList.remove('hidden');
});

// Cancelar la acción de agregar usuario
document.getElementById('cancelBtn').addEventListener('click', function() {
    document.getElementById('addUserForm').classList.add('hidden');
});

// Simular la adición de un usuario (esto es solo un ejemplo)
document.getElementById('addUserFormElement').addEventListener('submit', function(e) {
    e.preventDefault();

    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;

    if (username && password) {
        // Aquí agregarías la lógica para agregar al usuario a la base de datos

        // Agregar el usuario a la lista en la interfaz
        const userList = document.getElementById('userList');
        const userItem = document.createElement('li');
        userItem.classList.add('user-item');
        userItem.innerHTML = `
            <span class="username">${username}</span>
            <button class="block-btn">Bloquear</button>
            <button class="delete-btn">Eliminar</button>
        `;
        
        // Añadir el nuevo usuario a la lista
        userList.appendChild(userItem);

        // Limpiar el formulario y ocultarlo
        document.getElementById('username').value = '';
        document.getElementById('password').value = '';
        document.getElementById('addUserForm').classList.add('hidden');
    }
});

// Función para bloquear y eliminar usuarios
document.getElementById('userList').addEventListener('click', function(e) {
    if (e.target.classList.contains('delete-btn')) {
        e.target.closest('.user-item').remove();
    } else if (e.target.classList.contains('block-btn')) {
        alert('Usuario bloqueado');
    }
});