document.addEventListener('DOMContentLoaded', function () {
    const principalInput = document.getElementById('principal');
    const rateInput = document.getElementById('rate');
    const timeInput = document.getElementById('time');
    const calculateBtn = document.getElementById('calculate');
    const resultDiv = document.getElementById('result');

    const principalError = document.getElementById('principal-error');
    const rateError = document.getElementById('rate-error');
    const timeError = document.getElementById('time-error');

    const interestAmount = document.getElementById('interest-amount');
    const resultPrincipal = document.getElementById('result-principal');
    const resultRate = document.getElementById('result-rate');
    const resultTime = document.getElementById('result-time');
    const resultTotal = document.getElementById('result-total');

    // Format currency in Indian Rupees
    function formatCurrency(amount) {
        return '₹' + amount.toLocaleString('en-IN', {
            minimumFractionDigits: 2,
            maximumFractionDigits: 2
        });
    }

    // Function to validate inputs
    function validateInputs() {
        let isValid = true;

        // Reset errors
        principalError.style.display = 'none';
        rateError.style.display = 'none';
        timeError.style.display = 'none';

        // Validate principal
        if (!principalInput.value || parseFloat(principalInput.value) <= 0) {
            principalError.style.display = 'block';
            isValid = false;
        }

        // Validate rate
        if (!rateInput.value || parseFloat(rateInput.value) <= 0) {
            rateError.style.display = 'block';
            isValid = false;
        }

        // Validate time
        if (!timeInput.value || parseFloat(timeInput.value) <= 0) {
            timeError.style.display = 'block';
            isValid = false;
        }

        return isValid;
    }

    // Function to calculate simple interest
    function calculateSimpleInterest() {
        const principal = parseFloat(principalInput.value);
        const rate = parseFloat(rateInput.value);
        const time = parseFloat(timeInput.value);

        // Simple interest formula: (P * R * T) / 100
        const interest = (principal * rate * time) / 100;
        const totalAmount = principal + interest;

        // Update result display with formatted currency
        interestAmount.textContent = formatCurrency(interest);
        resultPrincipal.textContent = formatCurrency(principal);
        resultRate.textContent = rate + '%';
        resultTime.textContent = time + (time === 1 ? ' year' : ' years');
        resultTotal.textContent = formatCurrency(totalAmount);

        // Show result
        resultDiv.style.display = 'block';
    }

    // Event listener for calculate button
    calculateBtn.addEventListener('click', function () {
        if (validateInputs()) {
            calculateSimpleInterest();
        }
    });

    // Allow Enter key to trigger calculation
    document.addEventListener('keypress', function (e) {
        if (e.key === 'Enter') {
            if (validateInputs()) {
                calculateSimpleInterest();
            }
        }
    });
});