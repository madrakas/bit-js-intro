console.clear();
// Polish notation calculator
function calc(expr) {
    if (expr === "" || expr === null) {
        return 0;
    }

    const polishElements = expr.split(" ");

    if (polishElements.length === 1) {
        return parseFloat(expr);
    }

    const operators = {
        "+": (a, b) => a + b,
        "-": (a, b) => a - b,
        "*": (a, b) => a * b,
        "/": (a, b) => a / b
    };

    const buffer = [];

    for (let i = 0; i < polishElements.length; i++) {
        const el = polishElements[i];
        if (operators[el]) {
            const b = buffer.pop();
            const a = buffer.pop();
            buffer.push(operators[el](a, b));
        } else {
            buffer.push(parseFloat(el));
        }
    }
    return buffer[0];
}

// console.log(calc(""), 0, "Should work with empty string");
// console.log(calc('3'), 3, "Should parse numbers");
// console.log(calc("3.5"), 3.5, "Should parse float numbers");
// console.log(calc("1 3 +"), 4, "Should support addition");
// console.log(calc("1 3 *"), 3, "Should support multiplication");
// console.log(calc("1 3 -"), -2, "Should support subtraction");
// console.log(calc("4 2 /"), 2, "Should support division");