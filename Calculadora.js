function calculadora(num1, num2, operador) {
    switch (operador) {
        case "+":
            return num1 + num2
            break;
        case "-":
            return num1 - num2
            break;
        case "/":
            return num1 / num2
            break;
        case "*":
            return num1 * num2
            break
        default:
            return "Operação inválida!"
            
    }
}
console.log(calculadora(10,5,"-"))