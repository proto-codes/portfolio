const root = document.documentElement;
var loader = document.getElementsByClassName('loader-wrapper')[0];
var main_container = document.getElementsByClassName('main_container')[0];
var aside = document.getElementById("aside");
var close = document.getElementById("close");
var toggle = document.getElementById("toggle_btn");
var main = document.getElementById("main_content");
var home = document.getElementById("home1");
var about = document.getElementById("about1");
var services = document.getElementById("services1");
var portfolio = document.getElementById("portfolio1");
var contact = document.getElementById("contact1");
var settings = document.getElementById("settings");
var settings_icon = document.getElementById("settings_icon");
var close_settings = document.getElementById("close_settings");
var mode = document.getElementById("mode");
var theme = document.getElementById("theme");
var switcher = document.getElementById("switcher");
var dark = document.getElementById("dark");
var color1 = document.getElementById("color_1");
var color2 = document.getElementById("color_2");
var color3 = document.getElementById("color_3");
var color4 = document.getElementById("color_4");
var color5 = document.getElementById("color_5");
const textElement = document.getElementById('typing');
const copyright = document.getElementById('copyright_date');

window.addEventListener('load', () => {
    setTimeout( () => {
        loader.style.display = 'none';
        main_container.style.display = 'block';
    }, 1000);
});

textElement.innerHTML = "";
const text = "Web Developer.";
let index = 0;
function typeWriter() {
  if (index < text.length) {
    textElement.innerHTML += text.charAt(index);
    index++;
    setTimeout(typeWriter, 200);
  } else {
    index = 0;
    textElement.innerHTML = '';
    setTimeout(typeWriter, 200);
  }
}
typeWriter();

if (window.innerWidth < 1039) {
    aside.style.display = 'none';
    main.style.paddingLeft = 0;
}

document.addEventListener('click', (event) => {
    var isClickInsideaside = aside.contains(event.target);
    var isClickInsidetoggle = toggle.contains(event.target);
    
    // Close the aside only if the click is outside
    if (window.innerWidth < 1039 && !isClickInsideaside && !isClickInsidetoggle) {
        aside.style.display = 'none';
    }

    var isClickInsidesettings = settings.contains(event.target);
    // Close the aside only if the click is outside
    if (!isClickInsidesettings) {
        theme.style.display = "none";
        switcher.style.left = "110px";
        settings_icon.style.display = "block";
        close_settings.style.display = "none";
    }
});

toggle.addEventListener("click", () => {
    aside.style.display = "Block";
});

close.addEventListener("click", () => {
    aside.style.display = "none";
});

home.addEventListener("click", () => {
    home.style.color = "var(--skin-color)";
    about.style.color = "var(--text-black-900)";
    services.style.color = "var(--text-black-900)";
    portfolio.style.color = "var(--text-black-900)";
    contact.style.color = "var(--text-black-900)";
});
about.addEventListener("click", () => {
    home.style.color = "var(--text-black-900)";
    about.style.color = "var(--skin-color)";
    services.style.color = "var(--text-black-900)";
    portfolio.style.color = "var(--text-black-900)";
    contact.style.color = "var(--text-black-900)";
});
services.addEventListener("click", () => {
    home.style.color = "var(--text-black-900)";
    about.style.color = "var(--text-black-900)";
    services.style.color = "var(--skin-color)";
    portfolio.style.color = "var(--text-black-900)";
    contact.style.color = "var(--text-black-900)";
});
portfolio.addEventListener("click", () => {
    home.style.color = "var(--text-black-900)";
    about.style.color = "var(--text-black-900)";
    services.style.color = "var(--text-black-900)";
    portfolio.style.color = "var(--skin-color)";
    contact.style.color = "var(--text-black-900)";
});
contact.addEventListener("click", () => {
    home.style.color = "var(--text-black-900)";
    about.style.color = "var(--text-black-900)";
    services.style.color = "var(--text-black-900)";
    portfolio.style.color = "var(--text-black-900)";
    contact.style.color = "var(--skin-color)";
});

window.addEventListener("resize", () => {
    if (window.innerWidth > 1039) {
        aside.style.display = "block";
        main.style.paddingLeft = "270px";

        home.addEventListener("click", () => {
            aside.style.display = "block";
            main.style.paddingLeft = "270px";
        });
        about.addEventListener("click", () => {
            aside.style.display = "block";
            main.style.paddingLeft = "270px";
        });
        services.addEventListener("click", () => {
            aside.style.display = "block";
            main.style.paddingLeft = "270px";
        });
        portfolio.addEventListener("click", () => {
            aside.style.display = "block";
            main.style.paddingLeft = "270px";
        });
        contact.addEventListener("click", () => {
            aside.style.display = "block";
            main.style.paddingLeft = "270px";
        });
    } else {
        aside.style.display = "none";
        main.style.padding = 0;

        home.addEventListener("click", () => {
            aside.style.display = "none";
            main.style.padding = 0;
        });
        about.addEventListener("click", () => {
            aside.style.display = "none";
            main.style.padding = 0;
        });
        services.addEventListener("click", () => {
            aside.style.display = "none";
            main.style.padding = 0;
        });
        portfolio.addEventListener("click", () => {
            aside.style.display = "none";
            main.style.padding = 0;
        });
        contact.addEventListener("click", () => {
            aside.style.display = "none";
            main.style.padding = 0;
        });
    }
});

settings.addEventListener("click", () => {
    if (theme.style.display === "block") {
        theme.style.display = "none";
        switcher.style.left = "100px";
        settings_icon.style.display = "block";
        close_settings.style.display = "none";
    } else {
        theme.style.display = "block";
        switcher.style.left = "20px";
        settings_icon.style.display = "none";
        close_settings.style.display = "block";
    }
});

// Function to set the color mode
function setColorMode(mode) {
    if (mode === 'dark') {
        light.style.display = "block";
        dark.style.display = "none";
        root.style.setProperty("--bg-black-900", "#222222");
        root.style.setProperty("--bg-black-100", "#2e2e2e");
        root.style.setProperty("--bg-black-50", "#48464b");
        root.style.setProperty("--text-black-900", "#dad9e7");
        root.style.setProperty("--text-black-700", "#757583");
    } else {
        light.style.display = "none";
        dark.style.display = "block";
        root.style.setProperty("--bg-black-900", "#f2f2fc");
        root.style.setProperty("--bg-black-100", "#fdf9ff");
        root.style.setProperty("--bg-black-50", "#e8dfec");
        root.style.setProperty("--text-black-900", "#302e4d");
        root.style.setProperty("--text-black-700", "#504e70");
    }
}

// Event listener for the color mode switch
mode.addEventListener("click", () => {
    const isLightMode = dark.style.display === "none";
    const modeToSet = isLightMode ? 'light' : 'dark';
    setColorMode(modeToSet);
    localStorage.setItem('colorMode', modeToSet); // Store the color mode in local storage
});

// Check if color mode is stored in local storage and set it on page load
document.addEventListener('DOMContentLoaded', () => {
    const savedMode = localStorage.getItem('colorMode');
    if (savedMode) {
        setColorMode(savedMode);
    }
});

// Function to set the skin color
function setSkinColor(color) {
    root.style.setProperty("--skin-color", color);
}

// Event listener for setting skin color (Color 1)
color1.addEventListener("click", () => {
    setSkinColor("#ec1839");
    localStorage.setItem('skinColor', '#ec1839'); // Store the skin color in local storage
});

// Event listener for setting skin color (Color 2)
color2.addEventListener("click", () => {
    setSkinColor("#fa5b0f");
    localStorage.setItem('skinColor', '#fa5b0f'); // Store the skin color in local storage
});

// Event listener for setting skin color (Color 3)
color3.addEventListener("click", () => {
    setSkinColor("#37b182");
    localStorage.setItem('skinColor', '#37b182'); // Store the skin color in local storage
});

// Event listener for setting skin color (Color 4)
color4.addEventListener("click", () => {
    setSkinColor("#1854b4");
    localStorage.setItem('skinColor', '#1854b4'); // Store the skin color in local storage
});

// Event listener for setting skin color (Color 5)
color5.addEventListener("click", () => {
    setSkinColor("#f021b2");
    localStorage.setItem('skinColor', '#f021b2'); // Store the skin color in local storage
});

// Check if skin color is stored in local storage and set it on page load
document.addEventListener('DOMContentLoaded', () => {
    const savedSkinColor = localStorage.getItem('skinColor');
    if (savedSkinColor) {
        setSkinColor(savedSkinColor);
    }
});

copyright.innerHTML = (new Date().getFullYear());