// Esperar a que el documento esté listo
document.addEventListener("DOMContentLoaded", function() {
    const avatar = document.getElementById("avatar");
    const form = document.getElementById("form");

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

    // Si tienes un elemento que muestra el valor actual, puedes restablecerlo a '0'
    document.getElementById('selectedValue').textContent = '0';
}
