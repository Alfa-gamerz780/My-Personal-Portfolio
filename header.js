function loadHTML(id, file, callback) {
        fetch(file)
                .then(response => response.text())
                .then(data => {
                        document.getElementById(id).innerHTML = data;
                        if (callback) callback();
                });
}

document.addEventListener("DOMContentLoaded", () => {
        loadHTML("header", "header.html", initNavbar);
});

function initNavbar() {
        const menuBtn = document.querySelector(".menu-btn");
        const sidebar = document.querySelector(".sidebar");
        const overlay = document.querySelector(".overlay");

        if(menuBtn && sidebar && overlay){
        menuBtn.addEventListener("click", () => {
                overlay.classList.add("active");
                sidebar.style.display = "block";
                menuBtn.style.display = "none";
        });

        overlay.addEventListener("click", () => {
                overlay.classList.remove("active");
                sidebar.style.display = "none";
                menuBtn.style.display = "block";
        });
        }
}