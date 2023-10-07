// JavaScript para cargar los puntos de auditoría según la selección
const positionSelect = document.getElementById("position");
const auditList = document.getElementById("auditList");

positionSelect.addEventListener("change", function () {
    const selectedPosition = this.value;

    // Limpia la lista actual
    auditList.innerHTML = "";

    // Simula cargar los puntos de auditoría según la posición seleccionada (puedes cargarlos dinámicamente aquí)
    const auditPoints = ["Estan las filetas abastecidas de acuerdo a reglas de abastecimiento? Algodones con relevo. Poly-Nylon, Colocar relevo a 1 pulg de consumirse/finalizar el cono en proceso. Elasticos con relevo, a excepción del que trabaja en cierre de punta. Mezcla de lotes de hilaza", "El utilitario arma los sling según procedimiento? (Cáñamo de 187 plg, Argollas de metal en la parte inferior y superior del sling, Extiende la tela roja o azul, inserta bolsa plástica al sling  en caso de poliéster y que este el sling que corresponde a la maquina.", "Están las filetas de la línea limpias y Ordenadas ?(libre de calcetines amarrados en pines, tubos o tapaderas de filetas, calcetines en el piso, hilazas y/o conos vacíos en piso, otros objetos, hilazas libres de acumulación de tamo) "];
    auditPoints.forEach((point, index) => {
        const listItem = document.createElement("li");
        listItem.innerHTML = `
            <strong>Punto de Auditoría:</strong> ${point}
            <br>
            <br>
            <div class="result_audit">
                <label for="result_${index}">Resultado:</label>
                <select id="result_${index}" name="result_${index}" class="custom-select">
                    <option value="" disabled selected>Selecciona una opción</option>
                    <option value="pass">Pasa</option>
                    <option value="fail">Falla</option>
                </select>
            </div>
           
            <br>
            <label for="photo_${index}">Adjuntar foto (en caso de falla):</label>
            <input type="file" id="photo_${index}" name="photo_${index}">
            <img id="preview_${index}" src="" alt="Foto previa">
        `;

        // Manejo de mostrar una vista previa de la foto seleccionada
        const photoInput = listItem.querySelector(`#photo_${index}`);
        const photoPreview = listItem.querySelector(`#preview_${index}`);
        photoInput.addEventListener("change", function () {
            const file = this.files[0];
            if (file) {
                const reader = new FileReader();
                reader.onload = function (e) {
                    photoPreview.src = e.target.result;
                    photoPreview.style.display = "block";
                };
                reader.readAsDataURL(file);
            } else {
                photoPreview.src = "";
                photoPreview.style.display = "none";
            }
        });

        auditList.appendChild(listItem);
    });
});