document.getElementById('submitButton').addEventListener('click', async function() {
    const insuranceType = document.getElementById('insuranceInput').value;
    const benefitsDisplay = document.getElementById('benefitsDisplay');

    if (!insuranceType) {
        benefitsDisplay.innerText = "Please enter an insurance type.";
        return;
    }

    benefitsDisplay.innerText = "Fetching benefits...";

    try {
        const response = await fetch('/get-benefits', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({ prompt: `What are the benefits of ${insuranceType} insurance?` })
        });

        if (!response.ok) {
            throw new Error('Network response was not ok');
        }

        const data = await response.json();
        benefitsDisplay.innerText = data.choices[0].message.content;
    } catch (error) {
        benefitsDisplay.innerText = "Error fetching benefits: " + error.message;
    }
});
