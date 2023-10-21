"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
const inquirer = require('inquirer');
const exchangeRates = {
    USD: 1.0,
    EUR: 0.85,
    GBP: 0.74,
    JPY: 110.0,
    // Add more currencies and their exchange rates here
};
function convertCurrency(amount, sourceCurrency, targetCurrency) {
    if (sourceCurrency in exchangeRates && targetCurrency in exchangeRates) {
        const sourceRate = exchangeRates[sourceCurrency];
        const targetRate = exchangeRates[targetCurrency];
        return (amount / sourceRate) * targetRate;
    }
    else {
        throw new Error('Invalid currency codes.');
    }
}
function main() {
    return __awaiter(this, void 0, void 0, function* () {
        const answers = yield inquirer.prompt([
            {
                type: 'input',
                name: 'amount',
                message: 'Enter the amount in the source currency:',
            },
            {
                type: 'input',
                name: 'sourceCurrency',
                message: 'Enter the source currency code (e.g., USD):',
            },
            {
                type: 'input',
                name: 'targetCurrency',
                message: 'Enter the target currency code (e.g., EUR):',
            },
        ]);
        const { amount, sourceCurrency, targetCurrency } = answers;
        try {
            const result = convertCurrency(parseFloat(amount), sourceCurrency, targetCurrency);
            console.log(`Converted amount: ${result} ${targetCurrency}`);
        }
        catch (error) {
            console.error(error.message);
        }
    });
}
main();
