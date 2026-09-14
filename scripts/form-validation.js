// Michael Barnes - September 14, 2026

// Checks the required fields and counts any fields that are empty.
function checkMissing() {
    const requiredFields = document.querySelectorAll(".required");
    let missingFields = 0;

    requiredFields.forEach(function(field) {
        if (field.value.trim() === "") {
            missingFields++;
        }
    });

    const missingCount = document.getElementById("missing-count");

    if (missingFields > 0) {
        missingCount.textContent = missingFields + " required field(s) are missing.";
        return false;
    }

    missingCount.textContent = "";
    return true;
}

// Checks whether the email address contains at least 8 characters.
function validateEmail() {
    const email = document.getElementById("email");

    if (email.value.trim().length < 8) {
        email.classList.add("invalid-email");
        return false;
    }

    email.classList.remove("invalid-email");
    return true;
}

// Runs all validation functions when the Submit button is clicked.
function validateForm() {
    const missingFieldsValid = checkMissing();
    const emailValid = validateEmail();

    if (!missingFieldsValid || !emailValid) {
        alert("Please correct the highlighted fields before submitting.");
        return false;
    }

    return true;
}

const submitButton = document.getElementById("submit-button");

submitButton.addEventListener("click", function() {
    validateForm();
});