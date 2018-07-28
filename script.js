let num1 = Number(process.argv[2]);
let sinal = process.argv[3].toUpperCase();
let num2 = Number(process.argv[4]);

if (!isNaN(num1) && !isNaN(num2)) {
    switch (sinal) {
        case "+":
            console.log(`${num1} + ${num2} = ${num1 + num2}`);
            break;
        case "-":
            console.log(`${num1} - ${num2} = ${num1 - num2}`);
            break;
        case "X":
            console.log(`${num1} X ${num2} = ${num1 * num2}`);
            break;
        case "/":
            console.log(`${num1} / ${num2} = ${num1 / num2}`);
            break;
        default:
            console.log("Erro!!!\nUtilize Um Sinal Válido!!");
    }
}
else {
    console.log("Tente Utilizar\node index.js <primeiroNumero> <Sinal(+,-,/,X)> <segundoNumero>");
}