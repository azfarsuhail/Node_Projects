#! /usr/bin/env node

import { add } from "./operations.js";
import { minus } from "./operations.js";
import { mul } from "./operations.js";
import { divide } from "./operations.js";
import inquirer from "inquirer"

const num1 = await inquirer.prompt({
    message: "Enter first number",
    name: "num",
    type: "number"
})

const num2 = await inquirer.prompt(
    {
        message: "Enter Second number",
        type: "number",
        name: "num"
    })


const oper = await inquirer.prompt({
    type:"list",
    name:"operation",
    message:"What operation do you want to perform",
    choices:["Addition","Subtraction","Multiplication","Division"]
})

let result
if(oper.operation === 'Addition'){
    result=add(num1.num,num2.num)
}
else if(oper.operation === 'Subtraction'){
    result=minus(num1.num,num2.num)
}
else if(oper.operation === 'Multiplication'){
    result=mul(num1.num,num2.num)
}
else if(oper.operation === 'Division'){
    result=divide(num1.num,num2.num)
}

console.log(`The ${oper.operation} of ${num1.num} and ${num2.num} is equal to ${result}`)