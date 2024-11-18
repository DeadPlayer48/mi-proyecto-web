document.addEventListener("DOMContentLoaded", function() {
    const avatar = document.getElementById("avatar");
    const form = document.getElementById("form");
    const startButton = document.getElementById("startButton");

    // Función para cambiar la imagen
    form.addEventListener("change", function(event) {
        if (event.target && event.target.name === "option") {
            const optionValue = event.target.value;
            // Cambiar la imagen según el valor seleccionado
            avatar.src = `img/avatar${optionValue}.svg`;
        }
    });
});

function clearSelection() {
    const radios = document.querySelectorAll('input[name="option"]');
    radios.forEach(radio => {
        radio.checked = false;
    });

    // Cambiar la imagen a avatar0.svg al quitar la selección
    const avatar = document.getElementById("avatar");
    avatar.src = `img/avatar0.svg`;
}
