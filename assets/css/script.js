
  document.addEventListener("DOMContentLoaded", function () {
    const form = document.querySelector(".php-email-form");

    form.addEventListener("submit", function (event) {
      event.preventDefault();

      const formData = new FormData(form);

      fetch("forms/contact.php", {
        method: "POST",
        body: formData,
      })
        .then((response) => response.json())
        .then((data) => {
          if (data.success) {
            // Display a success message to the user
            const sentMessage = document.querySelector(".sent-message");
            sentMessage.style.display = "block";

            // Clear the form inputs
            form.reset();
          } else {
            // Display an error message to the user
            const errorMessage = document.querySelector(".error-message");
            errorMessage.style.display = "block";
            errorMessage.textContent = "There was an error sending your message.";
          }
        })
        .catch((error) => {
          console.error("Error:", error);
        });
    });
  });

