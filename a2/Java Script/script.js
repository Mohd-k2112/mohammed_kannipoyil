/* Author name: MOHAMMED KANNIPOYIL 
   STUDENT ID : 14975069 */
document.addEventListener("DOMContentLoaded", function () {
    const form = document.getElementById("bookingForm");
    const confirmBox = document.getElementById("confirmMessage");

    if (form) {
        form.addEventListener("submit", function (event) {
            event.preventDefault();
            confirmBox.style.display = "block";
            confirmBox.scrollIntoView({ behavior: "smooth" });
            form.reset();
        });
    }
});

function toggleMenu() {
    document.getElementById("nav-menu").classList.toggle("active");
}


