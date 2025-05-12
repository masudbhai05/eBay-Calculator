(function ($) {
    "use strict";

    const getSalePrice = document.querySelector('#sale-price');
    const getSalesTax = document.querySelector('#sales-tax');
    const getEbayFees = document.querySelector('#ebay-fees');
    const getCostItem = document.querySelector('#cost-item');
    const getShippingCost = document.querySelector('#shipping-cost');


    const salePriceAmountDisplay = document.querySelector('#display-sale-price-amount');
    const salesTaxDisplay = document.querySelector('#display-sales-tax-amount');
    const ebayFeesxDisplay = document.querySelector('#display-ebay-fees-amount');
    const costItemDisplay = document.querySelector('#display-cost-item-amount');
    const shippingCostDisplay = document.querySelector('#display-shipping-cost-amount');
    const totalProfittDisplay = document.querySelector('#display-total-profit-amount');

    const profitAmountDisplay = document.querySelector('#profit-amount');
    const profitStatusDisplay = document.querySelector('#profit-status');
    const profitDisplay = document.querySelector('#profit');


    const handleProfitShow = () => {
        const salePrice = parseFloat(getSalePrice.value) || 0; // If NaN, default to 0
        // Get all numbers from input fields, defaulting to 0 if empty
        let salesTax = parseFloat(getSalesTax.value) || 0;
        let ebayFeesPercentage = parseFloat(getEbayFees.value) || 0;
        let costItem = parseFloat(getCostItem.value) || 0;
        let shippingCost = parseFloat(getShippingCost.value) || 0;

        const ebayFeesDecimal = ebayFeesPercentage / 100;
        const ebayFees = ebayFeesDecimal * salePrice;
        const totalCost = salesTax + costItem + shippingCost + ebayFees;
        const totalProfit = salePrice - totalCost;

        // display number on UI 
        salePriceAmountDisplay.textContent = `$ ${salePrice}`;
        salesTaxDisplay.textContent = `$ -${salesTax}`;
        ebayFeesxDisplay.textContent = `$ -${ebayFees.toFixed(2)}`;
        costItemDisplay.textContent = `$ -${costItem}`;
        shippingCostDisplay.textContent = `-$ ${shippingCost}`;
        totalProfittDisplay.textContent = `$ ${totalProfit.toFixed(2)}`;
        profitAmountDisplay.textContent = `$ ${totalProfit.toFixed(2)}`;

        if (totalProfit <= 0) {
            profitAmountDisplay.classList.add('profit-amount-red');
            profitAmountDisplay.classList.remove('profit-amount-green');
            profitStatusDisplay.classList.add('profit-status-red')
            profitDisplay.classList.add('profit-red')
            profitDisplay.classList.remove('profit-green')
            profitStatusDisplay.textContent = '😭 Loss'
        }
        else if (totalProfit > 0) {
            profitAmountDisplay.classList.remove('profit-amount-red')
            profitAmountDisplay.classList.add('profit-amount-green')
            profitStatusDisplay.classList.remove('profit-status-red')
            profitDisplay.classList.remove('profit-red')
            profitDisplay.classList.add('profit-green')
            profitStatusDisplay.textContent = '😍 Very Good'
        }



    }

    getSalePrice.addEventListener("keyup", (e) => {
        handleProfitShow();
    })
    getSalesTax.addEventListener("keyup", (e) => {
        handleProfitShow();
    })
    getEbayFees.addEventListener("keyup", (e) => {
        handleProfitShow();
    })
    getCostItem.addEventListener("keyup", (e) => {
        handleProfitShow();
    })
    getShippingCost.addEventListener("keyup", (e) => {
        handleProfitShow();
    })

    // this is increased price section area
    // get the value from input field 
    const getIncreaseValue = document.querySelector('#increase-value');
    const getCurrentCost = document.querySelector('#current-cost');
    const getCopyValue = document.querySelector('#copy')

    // This for showing on display 
    const displayIncreaseBig = document.querySelector('#increase-amount-big');
    const displayIncreaseValue = document.querySelector('#display-increase-number');
    const displayCurrentCost = document.querySelector('#display-increase-cost-number');
    const displayNewPrice = document.querySelector('#display-new-price-amount');
    const displayCopiedText = document.querySelector('#copied-text');

    const handleIncreaseThePrice = () => {

        const percentageValue = parseFloat(getIncreaseValue.value) || 0;
        const currentPrice = parseFloat(getCurrentCost.value) || 0;

        const addPercentageValue = percentageValue / 100;
        const additionalPrice = currentPrice * addPercentageValue;
        const newPrice = currentPrice + additionalPrice;

        // show the values and price in the UI
        displayIncreaseBig.textContent = `$${newPrice.toFixed(2)}`;
        displayIncreaseValue.textContent = `$${additionalPrice.toFixed(2)}`;
        displayCurrentCost.textContent = `$${currentPrice}`;
        displayNewPrice.textContent = `$${newPrice.toFixed(2)}`;


        if (newPrice <= 0) {
            displayIncreaseBig.classList.add('red')
            displayIncreaseBig.classList.remove('green')
        } else {
            displayIncreaseBig.classList.add('green')
            displayIncreaseBig.classList.remove('red')
        }

        return newPrice;

    }

    const handleCopy = () => {
        const newPrice = handleIncreaseThePrice();
        navigator.clipboard.writeText(newPrice)
            .then(() => {
                displayCopiedText.style.visibility = 'visible'
                displayCopiedText.style.display = 'inline-block'
                displayCopiedText.textContent = "Copied!"

                // Optional: reset after 2 seconds
            setTimeout(() => {
                displayCopiedText.textContent = "";
                displayCopiedText.style.visibility = 'hidden'
                displayCopiedText.style.display = 'none'
            }, 2000);
            })
            .catch(() => {
                console.error("Failed to copy: ", err);
               displayCopiedText.textContent = "Copy Failed!"
            })

    }
   

    getIncreaseValue.addEventListener("keyup", (e) => {
        handleIncreaseThePrice();
    })
    getCurrentCost.addEventListener("keyup", (e) => {
        handleIncreaseThePrice();
    })
    getCopyValue.addEventListener("click", () => {
        handleCopy()
    })


})(jQuery)