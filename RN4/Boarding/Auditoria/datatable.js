$(document).ready(function () {
    const positionSelect = document.getElementById("position");
    const auditTable = $('#auditTable').DataTable();

    positionSelect.addEventListener("change", function () {
        const selectedPosition = this.value;

        // Limpia la tabla actual
        auditTable.clear().draw();

        // Simula cargar los puntos de auditoría según la posición seleccionada (puedes cargarlos dinámicamente aquí)
        const auditPoints = ["Punto 1", "Punto 2", "Punto 3"];
        auditPoints.forEach((point, index) => {
            // Agrega una fila a la tabla DataTable por cada punto de auditoría
            auditTable.row.add([
                selectedPosition, // Posición
                point, // Punto de Auditoría
                `
                <label for="pass_${index}">Pasa</label>
                <input type="radio" id="pass_${index}" name="result_${index}" value="pass">
                <label for="fail_${index}">Falla</label>
                <input type="radio" id="fail_${index}" name="result_${index}" value="fail">
                `, // Resultado
                `
                <div id="photoSection_${index}" style="display: none;">
                    <label for="photo_${index}"></label> 
                    <input type="file" id="photo_${index}" name="photo_${index}">
                    <img id="preview_${index}" src="" alt="Foto previa" style="max-width: 100%; display: none;">
                </div>
                ` // Imagen
            ]).draw(false);

            // Manejo de mostrar u ocultar la sección de foto
            $(`#fail_${index}`).on("change", function () {
                $(`#photoSection_${index}`).css("display", this.checked ? "block" : "none");
            });

            // Manejo de mostrar una vista previa de la foto seleccionada
            $(`#photo_${index}`).on("change", function () {
                const file = this.files[0];
                const preview = $(`#preview_${index}`);
                if (file) {
                    const reader = new FileReader();
                    reader.onload = function (e) {
                        preview.attr("src", e.target.result);
                        preview.css("display", "block");
                    };
                    reader.readAsDataURL(file);
                } else {
                    preview.attr("src", "");
                    preview.css("display", "none");
                }
            });
        });
    });
});
