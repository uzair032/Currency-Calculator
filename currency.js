function convertCurrency(event) {
    event.preventDefault(); 

    const amount = parseFloat(document.getElementById("formGroupExampleInput").value);
    const fromCurrency = document.getElementById("exampleFormControlSelect1").value;
    const toCurrency = document.getElementById("exampleFormControlSelect2").value;
    
    const exchangeRates = {
        USD: {
            QAR: 3.64,
            GBP: 0.81,
            PKR: 288.26,
            INR: 82.94,
            SAR: 3.75,
        },
        QAR: {
            USD: 0.27,
            GBP: 0.22,
            PKR: 79.06,
            INR: 22.75,
            SAR: 1.02,
        },
        GBP: {
            USD: 1.22,
            QAR: 4.47,
            PKR: 353.42,
            INR: 101.69,
            SAR: 4.59,
        },
        PKR: {
            USD: 0.0035,
            QAR: 0.012,
            GBP: 0.0028,
            INR: 0.28,
            SAR: 0.013,
        },
        INR: {
            USD: 0.012,
            QAR: 0.044,
            PKR: 3.47,
            GBP: 0.0098,
            SAR: 0.045,
        },
        SAR: {
            USD: 0.26,
            QAR: 0.97,
            PKR: 76.84,
            INR: 22.10,
            GBP: 0.21,
        },
    };

    if (exchangeRates[fromCurrency] && exchangeRates[fromCurrency][toCurrency]) {
        const convertedAmount = amount * exchangeRates[fromCurrency][toCurrency];
        document.getElementById("result").textContent = `${amount} ${fromCurrency} = ${convertedAmount.toFixed(2)} ${toCurrency}`;
    } else {
        document.getElementById("result").textContent = "Invalid currency conversion.";
    }
}

document.querySelector("form").addEventListener("submit", convertCurrency);
