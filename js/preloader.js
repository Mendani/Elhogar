// Añadir clase 'loading' al body
document.body.classList.add("loading");

// Esperar a que la página termine de cargar
window.addEventListener("load", () => {
    const preloader = document.getElementById("preloader");

    // Esperar mínimo 3 segundos antes de quitar el preloader
    setTimeout(() => {
        if (preloader) {
            preloader.style.opacity = "0";
            preloader.style.pointerEvents = "none";

            setTimeout(() => {
                preloader.remove();
            }, 1000); // Esperar a que termine la transición

            document.body.classList.remove("loading");
            document.getElementById("content").style.display = "block";
        }
    }, 3000); // 3 segundos mínimos de carga
});

// Seguridad: quitar preloader tras 12 segundos si falla todo
setTimeout(() => {
    const preloader = document.getElementById("preloader");
    if (preloader) {
        preloader.remove();
        document.body.classList.remove("loading");
        document.getElementById("content").style.display = "block";
    }
}, 12000);
