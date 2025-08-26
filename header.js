function toggleDropdown(){
    const dropdown = document.getElementById("myDropdown");
    if (dropdown) dropdown.classList.toggle("show");
}

function selectResponse(response) {
    const el = document.getElementById("selectedResponse");
    if (el) el.innerText = response;
    closeDropdown();
}

function selectAbout(about) {
    const el = document.getElementById("about");
    if (el) el.innerText = about;
    closeDropdown();
}

function selectHome(home) {
    const el = document.getElementById("home");
    if (el) el.innerText = home.toUpperCase();
    closeDropdown();
}

function closeDropdown() {
    const dropdown = document.getElementById("myDropdown");
    if (dropdown) dropdown.classList.remove("show");
}

function myPortfolios() {
    const choice = prompt("Which portfolio would you like to visit?\n1. Frankie Cafe\n2. Quiz");

    if (!choice) {
        alert("No input provided.");
        return;
    }

    const normalized = choice.trim().toLowerCase();

    if (normalized === "1" || normalized === "frankie cafe") {
        window.open("https://spunkyboy.github.io/frankie_cafe/", "_blank");
    } else if (normalized === "2" || normalized === "quiz") {
        window.open("https://spunkyboy.github.io/Quiz4u/", "_blank");
    } else {
        alert("Invalid choice. Please enter 1, 2, frankie cafe, or quiz.");
    }
}

if (typeof window !== 'undefined') {
    window.onclick = function(event) {
        if (!event.target.matches('#button_2')) {
            closeDropdown();
        }
    }
}

if (typeof document !== 'undefined') {
    const image = document.getElementById('personalImage');
    let isUp = false;

image.onclick = function() {
    if (isUp) {
        image.style.transform = 'translateY(0)';
    } else {
        image.style.transform = 'translateY(-60px)'; 
    }
    isUp = !isUp; 
};

}


if (typeof document !== 'undefined') {
    const element = document.getElementById('button_2');
    
    if (element) {
        element.style.cursor = 'pointer'; // 👈 Cursor effect
    }

    function updateContent() {
        if (!element) return;

        if (window.matchMedia("(max-width: 734px)").matches) {
            element.innerHTML = "&#x2630;";
        } else {
            element.innerHTML = '<span style="font-weight:bold;">FRANK</span>';
        }
    }

    updateContent();
    window.addEventListener('resize', updateContent);
}
