document.getElementById('submitButton').addEventListener('click', function() {
    const insuranceType = document.getElementById('insuranceInput').value.toLowerCase();
    const benefitsDisplay = document.getElementById('benefitsDisplay');

    let benefits;

    switch (insuranceType) {
        case 'health':
            benefits = "Health insurance covers medical expenses, preventive care, and more.";
            break;
        case 'auto':
            benefits = "Auto insurance provides coverage for vehicle damages and liability.";
            break;
        case 'home':
            benefits = "Home insurance protects your home against damages and theft.";
            break;
        case 'life':
            benefits = "Life insurance offers financial support to your beneficiaries after your death.";
            break;
        default:
            benefits = "Please enter a valid insurance type (health, auto, home, life).";
    }

    benefitsDisplay.innerText = benefits;
});
