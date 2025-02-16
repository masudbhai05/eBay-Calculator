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


    const handleProfitShow = (salePrice, salesTax, ebayFeesPercentage, costItem, shippingCost) => {

        const ebayFeesDecimal = ebayFeesPercentage / 100;
        const ebayFees = ebayFeesDecimal * salePrice;
        const totalCost = salesTax + costItem + shippingCost + ebayFees;
        const totalProfit = salePrice - totalCost;

        // display number on UI 
        salePriceAmountDisplay.textContent = `$ ${salePrice}`;
        salesTaxDisplay.textContent = `$ ${salesTax}`;
        ebayFeesxDisplay.textContent = `$ ${ebayFees.toFixed(2)}`;
        costItemDisplay.textContent = `$ ${costItem}`;
        shippingCostDisplay.textContent = `$ ${shippingCost}`;
        totalProfittDisplay.textContent = `$ ${totalProfit.toFixed(2)}`;
        profitAmountDisplay.textContent = `$ ${totalProfit.toFixed(2)}`;

        if (totalProfit <= 0) {
            profitAmountDisplay.classList.add('profit-amount-red');
            profitStatusDisplay.classList.add('profit-status-red')
            profitDisplay.classList.add('profit-red')
            profitStatusDisplay.textContent = '😭 Loss'
        }
        else if (totalProfit > 0) {
            profitAmountDisplay.classList.remove('profit-amount-red')
            profitStatusDisplay.classList.remove('profit-status-red')
            profitDisplay.classList.remove('profit-red')
            profitStatusDisplay.textContent = '😍 Very Good'
        }



    }

    getSalePrice.addEventListener("keyup", (e) => {
        const salePrice = parseFloat(e.target.value) || 0; // If NaN, default to 0

        // Get all numbers from input fields, defaulting to 0 if empty
        let salesTax = parseFloat(getSalesTax.value) || 0;
        let ebayFeesPercentage = parseFloat(getEbayFees.value) || 0;
        let costItem = parseFloat(getCostItem.value) || 0;
        let shippingCost = parseFloat(getShippingCost.value) || 0;

        handleProfitShow(salePrice, salesTax, ebayFeesPercentage, costItem, shippingCost);

    })

})(jQuery)