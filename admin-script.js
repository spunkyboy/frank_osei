const ADMIN_API_URL = "https://personal-website-api-wii5.onrender.com/messages";

const container = document.getElementById("messages");

async function loadMessages() {
  try {
    const response = await fetch(ADMIN_API_URL);

    if (!response.ok) {
      throw new Error("Failed to fetch messages");
    }

    const resultContact = await response.json();

    const messages = resultContact.data;

    container.innerHTML = "";

    messages.forEach(msg => {
      const div = document.createElement("div");
      div.classList.add("message-card");

      div.innerHTML = `
        <p><strong>Name:</strong> ${msg.name}</p>
        <p><strong>Email:</strong> ${msg.email}</p>
        <p><strong>Message:</strong> ${msg.message}</p>
      `;

      container.appendChild(div);
    });

  } catch (error) {
    console.error("Error loading messages:", error);
    container.innerHTML = "<p style='color:red;'>Failed to load messages</p>";
  }
}

loadMessages();