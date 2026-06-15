// ================= DROPDOWN =================
const dropdown = document.getElementById("myDropdown");
const button = document.getElementById("button_2");

function toggleDropdown() {
    if (dropdown) dropdown.classList.toggle("show");
}

function closeDropdown() {
    if (dropdown) dropdown.classList.remove("show");
}


button?.addEventListener("click", toggleDropdown);

// close dropdown when clicking outside
window.addEventListener("pointerdown", (event) => {
    if (!event.target.closest(".dropdown")) {
        closeDropdown();
    }
});


const image = document.getElementById("personalImage");

if (image) {
    image.addEventListener("mouseenter", () => {
        image.style.transform = "translateY(-60px)";
    });

    image.addEventListener("mouseleave", () => {
        image.style.transform = "translateY(0)";
    });
}


if (button) {
    button.style.cursor = "pointer";

    function updateContent() {
        if (window.innerWidth <= 734) {
            button.innerHTML = "&#x2630;";
        } else {
            button.innerHTML = '<span style="font-weight:bold;">FRANK</span>';
        }
    }

    updateContent();
    window.addEventListener("resize", updateContent);
}


const modal = document.getElementById("portfolioModal");
const closeBtn = document.getElementById("closeModal");

const portfolioLink = document.getElementById("portfolioLink");

portfolioLink?.addEventListener("click", (e) => {
    e.preventDefault();
    myPortfolios();
});

function myPortfolios() {
    if (!modal) return;
    modal.style.display = "flex";
    closeDropdown();
}

closeBtn?.addEventListener("click", () => {
    if (modal) modal.style.display = "none";
});

modal?.addEventListener("click", (e) => {
    const link = e.target.dataset.link;

    if (link) {
        window.open(link, "_blank");
        modal.style.display = "none";
    }
});

window.addEventListener("click", (e) => {
    if (e.target === modal) {
        modal.style.display = "none";
    }
});



