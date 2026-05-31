// ================= DROPDOWN =================
const dropdown = document.getElementById("myDropdown");
const button = document.getElementById("button_2");

function toggleDropdown() {
    if (dropdown) dropdown.classList.toggle("show");
}

function closeDropdown() {
    if (dropdown) dropdown.classList.remove("show");
}


// const elementRes = document.getElementById("selectedResponse");
// const elementAbout = document.getElementById("about");
// const elementHome = document.getElementById("home");

// function selectResponse(response) {
//     if (elementRes) elementRes.innerText = response;
//     closeDropdown();
// }

// function selectAbout(about) {
//     if (elementAbout) elementAbout.innerText = about;
//     closeDropdown();
// }

// function selectHome(home) {
//     if (elementHome) elementHome.innerText = home.toUpperCase();
//     closeDropdown();
// }


button?.addEventListener("click", toggleDropdown);

// close dropdown when clicking outside
window.addEventListener("click", (event) => {
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



