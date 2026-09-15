(function () {
    var navbar = document.querySelector(".navbar");
    var button = document.querySelector(".menu-button");
    var links = document.querySelectorAll(".navbar-list a");

    if (!navbar || !button) {
        return;
    }

    function setOpen(open) {
        navbar.classList.toggle("is-open", open);
        document.body.classList.toggle("menu-open", open);
        button.setAttribute("aria-expanded", open ? "true" : "false");
    }

    button.addEventListener("click", function (event) {
        event.stopPropagation();
        setOpen(!navbar.classList.contains("is-open"));
    });

    links.forEach(function (link) {
        link.addEventListener("click", function () {
            setOpen(false);
        });
    });

    document.addEventListener("click", function (event) {
        if (navbar.classList.contains("is-open") && !event.target.closest(".navbar")) {
            setOpen(false);
        }
    });

    document.addEventListener("keydown", function (event) {
        if (event.key === "Escape") {
            setOpen(false);
        }
    });

    setOpen(false);
})();
