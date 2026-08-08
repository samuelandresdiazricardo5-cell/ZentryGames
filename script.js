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
// ZENTRYBOT
// ==============================

const botInput = document.getElementById("botInput");
const botSend = document.getElementById("botSend");
const botResponse = document.getElementById("botResponse");

if (botInput && botSend && botResponse) {

    function responderBot() {

        const pregunta = botInput.value.toLowerCase().trim();

        if (!pregunta) {
            botResponse.textContent =
                "🤖 Escribe una pregunta primero.";
            return;
        }

        if (
            pregunta.includes("call of duty") ||
            pregunta.includes("cod")
        ) {

            botResponse.textContent =
                "🤖 Puedo ayudarte con Call of Duty, modos, armas y novedades.";

        } else if (
            pregunta.includes("fifa") ||
            pregunta.includes("fc")
        ) {

            botResponse.textContent =
                "🤖 Puedo ayudarte con EA SPORTS FC, equipos, jugadores y fútbol.";

        } else if (
            pregunta.includes("roblox")
        ) {

            botResponse.textContent =
                "🤖 Puedo ayudarte con Roblox, experiencias y novedades.";

        } else {

            botResponse.textContent =
                "🤖 Todavía estoy aprendiendo. Prueba preguntando sobre Call of Duty, EA SPORTS FC o Roblox.";

        }

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

function toggleNotifications() {

    const panel = document.getElementById("notificationPanel");

    if (!panel) {
        console.log("❌ No se encontró el panel");
        return;
    }

    panel.classList.toggle("show");
}

const closeNotifications =
    document.getElementById("closeNotifications");

const notificationPanel =
    document.getElementById("notificationPanel");

if (closeNotifications && notificationPanel) {

    closeNotifications.addEventListener("click", function () {

        notificationPanel.classList.remove("show");

    });

}

console.log("🔔 Sistema de notificaciones cargado");
