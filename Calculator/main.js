#! /usr/bin/env node
"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const operations_js_1 = require("./operations.js");
const operations_js_2 = require("./operations.js");
const operations_js_3 = require("./operations.js");
const operations_js_4 = require("./operations.js");
const inquirer_1 = __importDefault(require("inquirer"));
const num1 = await inquirer_1.default.prompt({
    message: "Enter first number",
    name: "num",
    type: "number"
});
const num2 = await inquirer_1.default.prompt({
    message: "Enter Second number",
    type: "number",
    name: "num"
});
const oper = await inquirer_1.default.prompt({
    type: "list",
    name: "operation",
    message: "What operation do you want to perform",
    choices: ["Addition", "Subtraction", "Multiplication", "Division"]
});
let result;
if (oper.operation === 'Addition') {
    result = (0, operations_js_1.add)(num1.num, num2.num);
}
else if (oper.operation === 'Subtraction') {
    result = (0, operations_js_2.minus)(num1.num, num2.num);
}
else if (oper.operation === 'Multiplication') {
    result = (0, operations_js_3.mul)(num1.num, num2.num);
}
else if (oper.operation === 'Division') {
    result = (0, operations_js_4.divide)(num1.num, num2.num);
}
console.log(`The ${oper.operation} of ${num1.num} and ${num2.num} is equal to ${result}`);
