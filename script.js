document.addEventListener("DOMContentLoaded", function() {
    const form = document.getElementById("login-form");
    const message = document.getElementById("message");

    form.addEventListener("submit", function(event) {
        event.preventDefault();

        const username = document.getElementById("username").value;
        const password = document.getElementById("password").value;

        // Aquí puedes realizar la lógica de autenticación
        // Por ejemplo, puedes comparar el nombre de usuario y la contraseña con los valores válidos almacenados en tu base de datos

        if (username === "ojgarcia" && password === "12345") {
            message.innerText = "Inicio de sesión exitoso";
            // Redirigir a Home.html después de una autenticación exitosa
            //window.location.href = "./../RN4/Boarding/Auditoria/index.html";
            //window.location.href = "../RN4/Boarding/Auditoria/index.html";
            window.location.href = "./RN4/Boarding/index.html";

        } else {
            message.innerText = "Nombre de usuario o contraseña incorrectos";
        }
    });
});
