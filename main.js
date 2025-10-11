document.addEventListener("DOMContentLoaded", function () {
    const loginModal = document.getElementById("loginModal");
    const loginClose = document.querySelector(".close");
    const loginButtons = document.querySelectorAll(".open-modal");

    if (loginModal && loginClose && loginButtons.length > 0) {
        loginButtons.forEach((btn) => {
            btn.addEventListener("click", function (e) {
                e.preventDefault();
                loginModal.style.display = "block";
            });
        });

        loginClose.addEventListener("click", function () {
            loginModal.style.display = "none";
        });

        window.addEventListener("click", function (event) {
            if (event.target === loginModal) {
                loginModal.style.display = "none";
            }
        });
    } else {
        console.error("Login modal elements not found!");
    }

    const helpModal = document.getElementById("helpModal");
    const helpClose = document.querySelector(".help-modal-close");
    const helpButton = document.querySelector(".btn-open-help-modal");

    if (helpModal && helpClose && helpButton) {
        helpButton.addEventListener("click", function (e) {
            e.preventDefault();
            helpModal.style.display = "block";
        });

        helpClose.addEventListener("click", function () {
            helpModal.style.display = "none";
        });

        window.addEventListener("click", function (event) {
            if (event.target === helpModal) {
                helpModal.style.display = "none";
            }
        });
    } else {
        console.error("Help modal elements not found!");
    }
});

