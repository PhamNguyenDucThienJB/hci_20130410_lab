document.addEventListener("DOMContentLoaded", function() {
    const hamBurger = document.querySelector(".toggle-btn");

    hamBurger.addEventListener("click", function () {
        const sidebar = document.querySelector("#sidebar");

        // Thêm/tắt lớp 'expand' cho sidebar
        sidebar.classList.toggle("expand");
    });
});
