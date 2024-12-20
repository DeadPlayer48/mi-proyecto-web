// Evento para el botón de inicio
document.getElementById('startButton').addEventListener('click', function() {
    document.getElementById('startPage').classList.add('d-none');
    document.getElementById('topicSelectionPage').classList.remove('d-none');
});
  
// Eventos para los botones de subtemática
document.getElementById('topic1Button').addEventListener('click', function() {
    showForm(1);
});
  
document.getElementById('topic2Button').addEventListener('click', function() {
    showForm(2);
});
  
document.getElementById('topic3Button').addEventListener('click', function() {
    showForm(3);
});
  
// Función para mostrar el formulario correspondiente
function showForm(formNumber) {
    // Oculta todas las páginas y formularios
    document.getElementById('topicSelectionPage').classList.add('d-none');
    document.getElementById('formPage').classList.remove('d-none');

    // Oculta todos los formularios
    for (let i = 1; i <= 3; i++) {
        const form = document.getElementById('form' + i);
        const formComingSoon = document.getElementById('form' + i + 'ComingSoon');
        if (form) form.classList.add('d-none');
        if (formComingSoon) formComingSoon.classList.add('d-none');
    }

    // Muestra el formulario correspondiente
    if (formNumber === 1) {
        document.getElementById('form1').classList.remove('d-none');
    } else if (formNumber === 2) {
        document.getElementById('form2ComingSoon').classList.remove('d-none');
    } else if (formNumber === 3) {
        document.getElementById('form3ComingSoon').classList.remove('d-none');
    }
}


// Función para cambiar el avatar
function changeAvatar(optionNumber) {
    // Cambia el avatar
    document.getElementById('avatar').src = 'img/avatar_' + optionNumber + '.svg';
  
    // Actualiza los iconos de audio relacionados con el avatar seleccionado
    for (let i = 1; i <= 5; i++) {
        const audioButton = document.getElementById('audioButton' + i);
        if (i === optionNumber) {
            audioButton.classList.remove('d-none'); // Muestra el botón de audio correspondiente
        } else {
            audioButton.classList.add('d-none'); // Oculta los demás botones de audio
        }
    }
}

// Función para reproducir audio
function playAudio(audioId) {
    const audio = document.getElementById(audioId);
    audio.play();
}

// Función para limpiar la selección
function clearSelection() {
    const radios = document.querySelectorAll('input[type="radio"]');
    radios.forEach(radio => radio.checked = false);

    // Oculta todos los botones de audio
    const audioButtons = document.querySelectorAll('button[id^="audioButton"]');
    audioButtons.forEach(button => button.classList.add('d-none'));

    // Devuelve el avatar a su estado inicial
    document.getElementById('avatar').src = 'img/avatar_0.svg';
}

// Función para volver al inicio desde cualquier página
// Función para volver al inicio desde cualquier página
// Función para volver al inicio desde cualquier página
// Función para volver al inicio desde cualquier página
function goBackToStart() {
    // Ocultar las páginas de formularios
    document.getElementById("formPage").classList.add("d-none");
    document.getElementById("topicSelectionPage").classList.add("d-none");
    
    // Mostrar la página de inicio
    document.getElementById("startPage").classList.remove("d-none");
}


// Asignar el evento "volver al inicio" a todos los botones correspondientes
document.querySelectorAll(".backToStartButton").forEach(button => {
    button.addEventListener("click", goBackToStart);
});

// Evento para los botones "Volver al inicio" en los formularios
document.querySelectorAll(".backToStartButtonForm").forEach(button => {
    button.addEventListener("click", function() {
        goBackToStart(); // Llamar la función para regresar al inicio
    });
});

