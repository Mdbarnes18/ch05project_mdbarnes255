// Michael Barnes - September 14, 2026

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