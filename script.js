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

    function formatCurrency(amount) {
        return '₹' + amount.toLocaleString('en-IN', {
            minimumFractionDigits: 2,
            maximumFractionDigits: 2
        });
    }

    function validateInputs() {
        let isValid = true;

        principalError.style.display = 'none';
        rateError.style.display = 'none';
        timeError.style.display = 'none';

        if (!principalInput.value || parseFloat(principalInput.value) <= 0) {
            principalError.style.display = 'block';
            isValid = false;
        }

        if (!rateInput.value || parseFloat(rateInput.value) <= 0) {
            rateError.style.display = 'block';
            isValid = false;
        }

        if (!timeInput.value || parseFloat(timeInput.value) <= 0) {
            timeError.style.display = 'block';
            isValid = false;
        }

        return isValid;
    }

    function calculateSimpleInterest() {
        const principal = parseFloat(principalInput.value);
        const rate = parseFloat(rateInput.value);
        const time = parseFloat(timeInput.value);

        const interest = (principal * rate * time) / 100;
        const totalAmount = principal + interest;

        interestAmount.textContent = formatCurrency(interest);
        resultPrincipal.textContent = formatCurrency(principal);
        resultRate.textContent = rate + '%';
        resultTime.textContent = time + (time === 1 ? ' year' : ' years');
        resultTotal.textContent = formatCurrency(totalAmount);
t
        resultDiv.style.display = 'block';
    }

    calculateBtn.addEventListener('click', function () {
        if (validateInputs()) {
            calculateSimpleInterest();
        }
    });

    document.addEventListener('keypress', function (e) {
        if (e.key === 'Enter') {
            if (validateInputs()) {
                calculateSimpleInterest();
            }
        }
    });
});