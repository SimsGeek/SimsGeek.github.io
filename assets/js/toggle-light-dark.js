const htmltag = document.documentElement;
const toggleButton = document.getElementById("light-dark-switch")


// apply defaults

function applyPreferredColorScheme() {
    if (
        localStorage.getItem("color-mode") === "dark" ||
        (window.matchMedia("(prefers-color-scheme: dark)").matches &&
            !localStorage.getItem("color-mode"))
    ) {
        setMode("dark");
    } else {
        setMode("light");
    }
}

// toggle

function toggleMode() {
    const currentMode = htmltag.getAttribute("color-mode");

    const newMode = currentMode === "light" ? "dark" : "light";

    setMode(newMode);
}

function setMode(mode) {
    if (mode == "light") {
        toggleButton.querySelector('i').classList.remove("bx-sun");
        toggleButton.querySelector('i').classList.add("bx-moon");
        toggleButton.setAttribute("title", "Passer en mode sombre");
        localStorage.setItem("color-mode", "light");
    } else {
        toggleButton.querySelector('i').classList.remove("bx-moon");
        toggleButton.querySelector('i').classList.add("bx-sun");
        toggleButton.setAttribute("title", "Passer en mode clair");
        localStorage.setItem("color-mode", "dark");
    }

    htmltag.setAttribute("color-mode", mode);
}

// apply preferred theme 

applyPreferredColorScheme();

// eventlistener

toggleButton.addEventListener("click", toggleMode);