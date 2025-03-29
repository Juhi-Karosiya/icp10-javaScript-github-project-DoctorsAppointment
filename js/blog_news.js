document.addEventListener("DOMContentLoaded", function () {
    document.querySelectorAll(".read-more").forEach(button => {
        button.addEventListener("click", function () {
            // Find the corresponding hidden content inside the same blog card
            const hiddenContent = this.previousElementSibling;

            if (hiddenContent && hiddenContent.classList.contains("hidden-content")) {
                // Toggle visibility
                if (hiddenContent.style.display === "none" || hiddenContent.style.display === "") {
                    hiddenContent.style.display = "block";
                    this.textContent = "Read Less ←";
                } else {
                    hiddenContent.style.display = "none";
                    this.textContent = "Read More →";
                }
            }
        });
    });
});
