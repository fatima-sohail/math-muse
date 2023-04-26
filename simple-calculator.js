
let input1 = '';
let input2 = '';

let enteringInputOne = true;
let selectedOperator = ''

let expression = '';

const addNum = (x, y) => {
    let sum = x + y;
    return sum;
}

const subNum = (x, y) => {
    let difference = x - y;
    return difference
}

const multiplyNum = (x, y) => {
    // let product = x*y;
    // return product
    return x * y
}

const divideNum = (x, y) => {
    return x / y;
}

const moduloNum = (x, y) => {
    return x % y;
}

const userInputFunction = (userInput) => {
    if (enteringInputOne == true) {
        input1 = input1 + userInput
        var inputbox = document.getElementById("user-input")
        inputbox.value = input1
    } else {
        input2 = input2 + userInput
        var inputbox = document.getElementById("user-input")
        inputbox.value = expression + input2
    }
}

const clearUserInput = () => {
    input1 = ''
    var input = document.getElementById("user-input")
    input.value = ''
    expression = ''
}

const performOperation = (op) => {
    selectedOperator = op
    enteringInputOne = false;
    expression = input1 + op
    var input = document.getElementById("user-input")
    input.value = expression

}


//want userInterface
//create html file