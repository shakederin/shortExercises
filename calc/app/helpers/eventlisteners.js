import {add, sub, multiply, divide, equals} from "./math.js";
export function eventListeners(){

    addButton.addEventListener("click", function(){
        equation.firstNum = inputText.value
        equation.action = add;
        inputText.value = "";
    });
    
    subButton.addEventListener("click", function(){
        equation.firstNum = inputText.value
        equation.action = sub;
        inputText.value = "";
    });
    
    multiplyButton.addEventListener("click", function(){
        equation.firstNum = inputText.value
        equation.action = multiply;
        inputText.value = "";
    });
    
    divideButton.addEventListener("click", function(){
        equation.firstNum = inputText.value
        equation.action = divide;
        inputText.value = "";
    });
    
    equalsButton.addEventListener("click", function(){
        equation.secondNum = inputText.value;
        inputText.value = equals(equation.firstNum, equation.secondNum, equation.action);
    });
    
    deleteButton.addEventListener("click", function(){
        inputText.value = inputText.value.slice(0, (inputText.value.length-1));
    });
    
    for (let button of numbersButton ){
        button.addEventListener("click", function(){
            inputText.value += button.value;
        })
    }
    }

    const numbersButton = document.getElementsByClassName("press");
    const deleteButton = document.getElementById("delete");
    const addButton = document.getElementById("add");
    const subButton = document.getElementById("sub");
    const multiplyButton = document.getElementById("multiply");
    const divideButton = document.getElementById("divide");
    const equalsButton = document.getElementById("equals");
    const inputText = document.getElementById("input");
    const equation = {};    