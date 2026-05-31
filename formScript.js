const form = document.getElementById("portfolioForm");
const formMessage = document.getElementById("formMessage");
const submitButton = document.querySelector(".contact-submit");

form.addEventListener("submit", async (e) => {

    e.preventDefault();

    const name = document.getElementById("name").value.trim();
    const email = document.getElementById("email").value.trim();
    const message = document.getElementById("message").value.trim();

    // Validation
    if (!name || !email || !message) {

        formMessage.textContent = "Please fill in all fields.";
        formMessage.style.color = "red";

        return;
    }

  
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (!emailPattern.test(email)) {
        formMessage.textContent = "Please enter a valid email address.";
        formMessage.style.color = "red";
        return;
    }

    const formData = {
        name,
        email,
        message
    };

    try {

        // Loading state
        submitButton.disabled = true;
        submitButton.textContent = "Sending...";

        const response = await fetch("https://personal-website-api-wii5.onrender.com/contact", {

            method: "POST",

            headers: {
                "Content-Type": "application/json"
            },

            body: JSON.stringify(formData)

        });

        const data = await response.json();

        if (data.success) {

            formMessage.textContent = "Message sent successfully!";
            formMessage.style.color = "limegreen";

            form.reset();

        } else {

            formMessage.textContent = "Failed to send message.";
            formMessage.style.color = "red";
        }

    } catch (error) {

        console.log(error);

        formMessage.textContent = "Server error.";
        formMessage.style.color = "red";

    } finally {

        submitButton.disabled = false;
        submitButton.textContent = "Submit Form";
    }

});