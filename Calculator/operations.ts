export function add(num1: number, num2: number):number{
    return num1 + num2
}

export function minus(num1: number, num2: number):number{
    return num1 - num2
}

export function mul(num1: number, num2: number):number {
    return num1 * num2
}

export function divide(num1: number, num2: number):number {
    if (num2 === 0) {
        throw new Error("Cannot divide by zero");
    }
    return num1 / num2;
}