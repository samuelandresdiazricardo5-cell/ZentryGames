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
// ==============================
// NOTICIAS — FASE 4
// ==============================

function mostrarNoticia(tipo) {

const modal = document.getElementById("newsModal");
const contenido = document.getElementById("newsModalContent");

if (!modal || !contenido) {
    console.log("❌ No se encontró el sistema de noticias.");
    return;
}

const noticias = {

    bienvenida: {
        titulo: "🔥 Bienvenido a ZentryGames",
        texto:
            "ZentryGames comienza una nueva etapa con noticias, videojuegos, eventos, quizzes, guías y contenido gamer."
    },

    cod: {
        titulo: "🔫 Call of Duty",
        texto:
            "Aquí encontrarás información sobre Call of Duty, incluyendo modos de juego, mapas, armas, consejos y futuras novedades."
    },

    fc: {
        titulo: "⚽ EA SPORTS FC",
        texto:
            "Descubre información sobre EA SPORTS FC, equipos, jugadores, modos de juego y consejos para mejorar."
    },

    roblox: {
        titulo: "🟥 Roblox",
        texto:
            "Explora información sobre Roblox, experiencias, juegos, creación de contenido y novedades."
    }

};

const noticia = noticias[tipo];

if (!noticia) {
    contenido.innerHTML = `
        <h2>❌ Noticia no encontrada</h2>
        <p>No pudimos encontrar esta noticia.</p>
    `;
} else {

    contenido.innerHTML = `
        <span class="news-tag">📰 ZENTRYGAMES</span>

        <h2>${noticia.titulo}</h2>

        <p>${noticia.texto}</p>

        <span class="news-date">
            📅 8 de agosto de 2026
        </span>
    `;
}

modal.classList.add("show");

}

function cerrarNoticia() {

const modal = document.getElementById("newsModal");

if (modal) {
    modal.classList.remove("show");
}

}
    
    
 // ==============================
// NOTICIAS — FASE 4
// ==============================

const newsModal = document.getElementById("newsModal");
const newsModalContent = document.getElementById("newsModalContent");

function mostrarNoticia(tipo) {

    if (!newsModal || !newsModalContent) {
        console.error("❌ No se encontró la ventana de noticias");
        return;
    }

    const noticias = {

        bienvenida: {
            titulo: "🔥 Bienvenido a ZentryGames",
            texto: "ZentryGames comienza una nueva etapa con noticias, juegos, eventos, quizzes y contenido gamer."
        },

        cod: {
            titulo: "🔫 Call of Duty",
            texto: "Aquí encontrarás próximamente información sobre Call of Duty, modos de juego, mapas, armas, guías y novedades."
        },

        fc: {
            titulo: "⚽ EA SPORTS FC",
            texto: "Aquí encontrarás información sobre EA SPORTS FC, equipos, jugadores, modos de juego, consejos y novedades."
        },

        roblox: {
            titulo: "🟥 Roblox",
            texto: "Aquí encontrarás novedades de Roblox, experiencias, juegos y contenido de la comunidad."
        }

    };

    const noticia = noticias[tipo];

    if (!noticia) {
        newsModalContent.innerHTML = `
            <h2>❌ Noticia no encontrada</h2>
            <p>No encontramos el contenido solicitado.</p>
        `;

    } else {

        newsModalContent.innerHTML = `
            <span class="news-tag">📰 ZENTRYGAMES</span>

            <h2>${noticia.titulo}</h2>

            <p>${noticia.texto}</p>
        `;
    }

    newsModal.classList.add("show");
}


function cerrarNoticia() {

    if (!newsModal) {
        console.error("❌ No se encontró la ventana de noticias");
        return;
    }

    newsModal.classList.remove("show");
}


// Cerrar al tocar fuera de la ventana

if (newsModal) {

    newsModal.addEventListener("click", function(event) {

        if (event.target === newsModal) {
            cerrarNoticia();
        }

    });

}


// Cerrar con la tecla ESC

document.addEventListener("keydown", function(event) {

    if (event.key === "Escape") {
        cerrarNoticia();
    }

});

console.log("📰 Sistema de noticias cargado correctamente");
