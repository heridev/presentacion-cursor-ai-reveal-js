// Cursor AI Presentation Customization Script
// Este archivo contiene funciones útiles para personalizar la presentación

// Función para cambiar el tema de la presentación
function changeTheme(themeName) {
  const themeLink = document.getElementById("theme");
  themeLink.href = `dist/theme/${themeName}.css`;

  // Guardar preferencia en localStorage
  localStorage.setItem("reveal-theme", themeName);
}

// Función para cargar el tema guardado
function loadSavedTheme() {
  const savedTheme = localStorage.getItem("reveal-theme");
  if (savedTheme) {
    changeTheme(savedTheme);
  }
}

// Función para obtener una imagen aleatoria de Unsplash
async function getRandomUnsplashImage(query, width = 800, height = 600) {
  try {
    const response = await fetch(
      `https://api.unsplash.com/photos/random?query=${encodeURIComponent(
        query
      )}&w=${width}&h=${height}&fit=crop`,
      {
        headers: {
          Authorization: "Client-ID YOUR_UNSPLASH_ACCESS_KEY",
        },
      }
    );
    const data = await response.json();
    return data.urls.regular;
  } catch (error) {
    console.error("Error fetching Unsplash image:", error);
    return null;
  }
}

// Función para actualizar imágenes en tiempo real
function updateImages() {
  const images = document.querySelectorAll('img[src*="unsplash"]');
  images.forEach((img) => {
    // Agregar efecto de carga
    img.style.opacity = "0.7";
    img.style.transition = "opacity 0.3s ease";

    img.onload = () => {
      img.style.opacity = "1";
    };
  });
}

// Función para agregar controles de tema
function addThemeControls() {
  const controls = document.createElement("div");
  controls.style.cssText = `
        position: fixed;
        top: 20px;
        right: 20px;
        z-index: 1000;
        background: rgba(0,0,0,0.8);
        color: white;
        padding: 10px;
        border-radius: 5px;
        font-size: 12px;
    `;

  controls.innerHTML = `
        <div>Cambiar tema:</div>
        <select onchange="changeTheme(this.value)">
            <option value="white">Blanco</option>
            <option value="black">Negro</option>
            <option value="league">League</option>
            <option value="sky">Sky</option>
            <option value="beige">Beige</option>
            <option value="simple">Simple</option>
            <option value="serif">Serif</option>
            <option value="blood">Blood</option>
            <option value="night">Night</option>
            <option value="moon">Moon</option>
            <option value="solarized">Solarized</option>
        </select>
    `;

  document.body.appendChild(controls);
}

// Función para agregar contador de tiempo
function addTimer() {
  const timer = document.createElement("div");
  timer.id = "presentation-timer";
  timer.style.cssText = `
        position: fixed;
        bottom: 20px;
        left: 20px;
        z-index: 1000;
        background: rgba(0,0,0,0.8);
        color: white;
        padding: 10px;
        border-radius: 5px;
        font-size: 14px;
        font-family: monospace;
    `;

  document.body.appendChild(timer);

  let startTime = Date.now();
  setInterval(() => {
    const elapsed = Date.now() - startTime;
    const minutes = Math.floor(elapsed / 60000);
    const seconds = Math.floor((elapsed % 60000) / 1000);
    timer.textContent = `${minutes}:${seconds.toString().padStart(2, "0")}`;
  }, 1000);
}

// Función para agregar progreso de la presentación
function addProgressBar() {
  const progress = document.createElement("div");
  progress.style.cssText = `
        position: fixed;
        bottom: 0;
        left: 0;
        height: 3px;
        background: #007acc;
        z-index: 1000;
        transition: width 0.3s ease;
    `;

  document.body.appendChild(progress);

  // Actualizar progreso cuando cambie la slide
  Reveal.addEventListener("slidechanged", () => {
    const currentSlide = Reveal.getCurrentSlide();
    const totalSlides = document.querySelectorAll(
      ".reveal .slides section"
    ).length;
    const progressPercent =
      ((currentSlide.dataset.indexVertical || 0) / (totalSlides - 1)) * 100;
    progress.style.width = `${progressPercent}%`;
  });
}

// Inicializar personalizaciones cuando se cargue la página
document.addEventListener("DOMContentLoaded", () => {
  loadSavedTheme();
  updateImages();

  // Agregar controles solo en modo desarrollo
  if (window.location.hostname === "localhost") {
    addThemeControls();
    addTimer();
    addProgressBar();
  }
});

// Exportar funciones para uso global
window.presentationUtils = {
  changeTheme,
  getRandomUnsplashImage,
  updateImages,
  addThemeControls,
  addTimer,
  addProgressBar,
};
