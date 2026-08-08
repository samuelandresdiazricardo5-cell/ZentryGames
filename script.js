console.log("🔥 ZentryGames cargado correctamente");


// ==============================
// BOTONES DE JUEGOS
// ==============================

const gameButtons = document.querySelectorAll(".card-btn");

gameButtons.forEach((button) => {

    button.addEventListener("click", () => {

        const game = button.dataset.game;

        if (game) {
            alert(`🎮 Entraste a la sección de ${game}`);
        }

    });

});


// ==============================
// ZENTRYBOT — FASE 5
// ==============================

const botInput = document.getElementById("botInput");
const botSend = document.getElementById("botSend");
const botResponse = document.getElementById("botResponse");

if (botInput && botSend && botResponse) {

function responderBot() {

    const pregunta = botInput.value.toLowerCase().trim();

    if (!pregunta) {
        botResponse.textContent =
            "🤖 Escribe algo para preguntarme.";
        return;
    }

    // CALL OF DUTY
    if (
        pregunta.includes("call of duty") ||
        pregunta.includes("cod") ||
        pregunta.includes("warzone")
    ) {

        botResponse.textContent =
            "🔫 ZentryBot: Puedo ayudarte con Call of Duty, Warzone, modos de juego, armas, mapas y consejos.";

    // EA SPORTS FC
    } else if (
        pregunta.includes("fifa") ||
        pregunta.includes("fc") ||
        pregunta.includes("fútbol") ||
        pregunta.includes("futbol")
    ) {

        botResponse.textContent =
            "⚽ ZentryBot: Puedo ayudarte con EA SPORTS FC, equipos, jugadores, modos y consejos de fútbol.";

    // ROBLOX
    } else if (
        pregunta.includes("roblox")
    ) {

        botResponse.textContent =
            "🟥 ZentryBot: Puedo ayudarte con Roblox, experiencias, juegos y novedades.";

    // JUEGOS
    } else if (
        pregunta.includes("juegos") ||
        pregunta.includes("juego")
    ) {

        botResponse.textContent =
            "🎮 ZentryGames tiene contenido sobre Call of Duty, EA SPORTS FC y Roblox.";

    // NOTICIAS
    } else if (
        pregunta.includes("noticia") ||
        pregunta.includes("noticias")
    ) {

        botResponse.textContent =
            "📰 ZentryBot: Puedes revisar la sección de Noticias para conocer las novedades de ZentryGames.";

    // EVENTOS
    } else if (
        pregunta.includes("evento") ||
        pregunta.includes("torneo")
    ) {

        botResponse.textContent =
            "🏆 ZentryBot: Revisa la sección Eventos. Próximamente tendremos torneos y desafíos.";

    // QUIZ
    } else if (
        pregunta.includes("quiz") ||
        pregunta.includes("pregunta")
    ) {

        botResponse.textContent =
            "🧠 ZentryBot: ¡Prueba el Zentry Quiz y demuestra cuánto sabes de videojuegos!";

    // SALUDO
    } else if (
        pregunta.includes("hola") ||
        pregunta.includes("hey") ||
        pregunta.includes("buenas")
    ) {

        botResponse.textContent =
            "🤖 ¡Hola, gamer! 👋 Soy ZentryBot. Pregúntame sobre juegos, noticias, eventos o el quiz.";

    // AYUDA
    } else if (
        pregunta.includes("ayuda") ||
        pregunta.includes("qué puedes hacer") ||
        pregunta.includes("que puedes hacer")
    ) {

        botResponse.textContent =
            "🤖 Puedo hablarte sobre 🎮 juegos, 📰 noticias, 🏆 eventos y 🧠 el Zentry Quiz.";

    // NO ENCONTRADO
    } else {

        botResponse.textContent =
            "🤖 No entendí esa pregunta todavía. Prueba con: Call of Duty, Roblox, FC, noticias, eventos o quiz.";

    }

    // Limpiar campo después de responder
    botInput.value = "";
}

botSend.addEventListener("click", responderBot);

botInput.addEventListener("keydown", (event) => {

    if (event.key === "Enter") {
        responderBot();
    }

});

}

// ==============================
// BUSCADOR
// ==============================

const searchInput = document.getElementById("searchInput");
const searchButton = document.getElementById("searchButton");
const searchResult = document.getElementById("searchResult");

if (searchInput && searchButton && searchResult) {

    function buscar() {

        const texto = searchInput.value.toLowerCase().trim();

        if (!texto) {

            searchResult.textContent =
                "🔎 Escribe algo para buscar.";

            return;
        }

        if (texto.includes("call") || texto.includes("cod")) {

            searchResult.textContent =
                "🔫 Encontramos contenido relacionado con Call of Duty.";

        } else if (texto.includes("fifa") || texto.includes("fc")) {

            searchResult.textContent =
                "⚽ Encontramos contenido relacionado con EA SPORTS FC.";

        } else if (texto.includes("roblox")) {

            searchResult.textContent =
                "🟥 Encontramos contenido relacionado con Roblox.";

        } else {

            searchResult.textContent =
                "❌ No encontramos resultados.";

        }

    }

    searchButton.addEventListener("click", buscar);

    searchInput.addEventListener("keydown", (event) => {

        if (event.key === "Enter") {
            buscar();
        }

    });

}


// ==============================
// ZENTRY QUIZ
// ==============================

const startQuiz = document.getElementById("startQuiz");
const quizArea = document.getElementById("quizArea");

if (startQuiz && quizArea) {

    startQuiz.addEventListener("click", () => {

        quizArea.innerHTML = `
            <h3>🧠 ¿Cuál de estos juegos pertenece a Activision?</h3>

            <br>

            <button onclick="quizAnswer(true)">
                🔫 Call of Duty
            </button>

            <button onclick="quizAnswer(false)">
                🟥 Roblox
            </button>

            <button onclick="quizAnswer(false)">
                ⚽ EA SPORTS FC
            </button>
        `;

    });

    window.quizAnswer = function(correcto) {

        if (correcto) {

            quizArea.innerHTML =
                "🎉 ¡Correcto! ¡Buen trabajo, gamer!";

        } else {

            quizArea.innerHTML =
                "❌ Incorrecto. Inténtalo nuevamente.";

        }

    };

}


// ==============================
// NOTIFICACIONES
// ==============================

document.addEventListener("DOMContentLoaded", () => {

    const notificationPanel =
        document.getElementById("notificationPanel");

    const closeNotifications =
        document.getElementById("closeNotifications");


    // Abrir / cerrar notificaciones
    window.toggleNotifications = function () {

        if (!notificationPanel) {
            console.error(
                "❌ ZentryGames: No se encontró #notificationPanel"
            );
            return;
        }

        notificationPanel.classList.toggle("show");

    };


    // Botón X
    if (closeNotifications) {

        closeNotifications.addEventListener("click", () => {

            notificationPanel.classList.remove("show");

        });

    }


    // Cerrar al hacer clic fuera del panel
    document.addEventListener("click", (event) => {

        if (!notificationPanel) return;

        const notificationButton =
            document.querySelector(
                '[onclick="toggleNotifications()"]'
            );

        if (
            notificationPanel.classList.contains("show") &&
            !notificationPanel.contains(event.target) &&
            event.target !== notificationButton
        ) {

            notificationPanel.classList.remove("show");

        }

    });

});


console.log("🔔 Sistema de notificaciones cargado correctamente"); 
