let inputOne = document.getElementById('inputNumberOne'),
    inputTwo = document.getElementById('inputNumberTwo'),
    form = document.getElementById('calculateForm')
    operator = document.getElementById('inputOperator'),
    result = document.getElementById('outputBox');


function calculate() {
    console.log(inputOne.value);
    console.log(inputTwo.value);

    let resultValue;

    switch (operator) {
        case 'plus':
            resultValue = inputOne.value + inputTwo.value;
            result.value = resultValue;
            break;
        case 'minus':
            resultValue = inputOne.value - inputTwo.value;
            result.value = resultValue;
            break;
        case 'multiply':
            resultValue = inputOne.value * inputTwo.value;
            result.value = resultValue;
            break;
        case 'divide':
            resultValue = inputOne.value / inputTwo.value;
            result.value = resultValue;
            break;
        default:
            result.value = 0;
            break;
    }

    console.log(resultValue);
}