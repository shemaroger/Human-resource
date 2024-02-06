document.addEventListener("DOMContentLoaded", function () {
    const imgContainers = document.querySelectorAll(".img-container");
    let currentIndex = 0;

    function showImage(index) {
        imgContainers.forEach((container, i) => {
            container.style.opacity = i === index ? 1 : 0;
        });
    }

    function nextImage() {
        currentIndex = (currentIndex + 1) % imgContainers.length;
        showImage(currentIndex);
    }

    // Initial display
    showImage(currentIndex);

    // Set interval for the slideshow
    setInterval(nextImage, 5000);
});
document.getElementById("myForm").addEventListener("submit", function(event) {
    // Reset error messages
    document.getElementById("firstNameError").innerText = "";
    document.getElementById("lastNameError").innerText = "";
    document.getElementById("emailError").innerText = "";
    document.getElementById("genderError").innerText = "";
    document.getElementById("pictureError").innerText = "";
    document.getElementById("passwordError").innerText = "";
    document.getElementById("phoneError").innerText = "";
    document.getElementById("employeeIDError").innerText = "";
    document.getElementById("positionError").innerText = "";
    document.getElementById("departmentError").innerText = "";
    document.getElementById("startDateError").innerText = "";
    document.getElementById("salaryError").innerText = "";

    // Validate first name
    var firstName = document.getElementById("firstName").value;
    if (firstName.trim() === "") {
        document.getElementById("firstNameError").innerText = "First name is required";
        event.preventDefault();
    }

    // Validate last name
    var lastName = document.getElementById("lastName").value;
    if (lastName.trim() === "") {
        document.getElementById("lastNameError").innerText = "Last name is required";
        event.preventDefault();
    }

    // Validate email
    var email = document.getElementById("email").value;
    var emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
        document.getElementById("emailError").innerText = "Invalid email address";
        event.preventDefault();
    }

    // Validate gender
    var gender = document.getElementById("gender").value;
    if (gender === "") {
        document.getElementById("genderError").innerText = "Gender is required";
        event.preventDefault();
    }

    // Validate picture
    var picture = document.getElementById("picture").value;
    if (picture.trim() === "") {
        document.getElementById("pictureError").innerText = "Passport photo is required";
        event.preventDefault();
    }

    // Validate password
    var password = document.getElementById("password").value;
    if (password.length < 8) {
        document.getElementById("passwordError").innerText = "Password must be at least 8 characters";
        event.preventDefault();
    }

    // Validate phone number
    var phone = document.getElementById("phone").value;
    if (phone.length !== 12) {
        document.getElementById("phoneError").innerText = "Phone number must be 12 characters";
        event.preventDefault();
    }

    // Validate employee ID
    var employeeID = document.getElementById("employeeID").value;
    if (employeeID.trim() === "") {
        document.getElementById("employeeIDError").innerText = "Employee ID is required";
        event.preventDefault();
    }

    // Validate position
    var position = document.getElementById("position").value;
    if (position.trim() === "") {
        document.getElementById("positionError").innerText = "Position is required";
        event.preventDefault();
    }

    // Validate department
    var department = document.getElementById("department").value;
    if (department.trim() === "") {
        document.getElementById("departmentError").innerText = "Department is required";
        event.preventDefault();
    }

    // Validate start date
    var startDate = document.getElementById("startDate").value;
    if (startDate.trim() === "") {
        document.getElementById("startDateError").innerText = "Started date is required";
        event.preventDefault();
    }

    // Validate salary
    var salary = document.getElementById("salary").value;
    if (salary.trim() === "" || isNaN(salary)) {
        document.getElementById("salaryError").innerText = "Please enter a valid salary";
        event.preventDefault();
    }
});