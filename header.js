function toggleDropdown(){
    const dropdown = document.getElementById("myDropdown");
    if (dropdown) dropdown.classList.toggle("show");
}

function selectResponse(response) {

    const elementRes = document.getElementById("selectedResponse");
    if (elementRes) elementRes.innerText = response;

    closeDropdown();
}

function selectAbout(about) {

    const elementAbout = document.getElementById("about");
    if (elementAbout) elementAbout.innerText = about;

    closeDropdown();
}

function selectHome(home) {

    const elementHome = document.getElementById("home");
    if (elementHome) elementHome.innerText = home.toUpperCase();

    closeDropdown();
}

function closeDropdown() {
    const dropdown = document.getElementById("myDropdown");
    if (dropdown) dropdown.classList.remove("show");
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
  
    image.addEventListener('mouseenter', () => {
      image.style.transform = 'translateY(-60px)';
    });
  
    image.addEventListener('mouseleave', () => {
      image.style.transform = 'translateY(0)';
    });
  }



if (typeof document !== 'undefined') {
    const element = document.getElementById('button_2');
    
    if (element) {

        element.style.cursor = 'pointer'; 

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


const modal = document.getElementById("portfolioModal");
const closeBtn = document.getElementById("closeModal");

function myPortfolios() {
    modal.style.display = "flex";

    // optional: close dropdown when opening modal
    closeDropdown();
}

// close modal
closeBtn.onclick = () => modal.style.display = "none";

// handle button clicks (clean + scalable)
modal.addEventListener("click", (e) => {
    const link = e.target.dataset.link;

    if (link) {
        window.open(link, "_blank");
        modal.style.display = "none";
    }
});

// click outside closes modal
window.addEventListener("click", (e) => {
    if (e.target === modal) {
        modal.style.display = "none";
    }
});

