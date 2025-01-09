const input=document.querySelector(".input");
const numberButtons= document.querySelectorAll(".number-button");
const actionButtons= document.querySelectorAll(".action-button");
const clearButton= document.querySelector(".clear-btn");
const operateButton= document.querySelector(".operate-button");


numberButtons.forEach(function(button) {
    button.addEventListener("click", function() {
        const buttonValue = this.getAttribute("value");  
        input.value += buttonValue;  
    });
});

actionButtons.forEach(function(button) {
    button.addEventListener("click", function() {
        const buttonValue = this.getAttribute("value");  
        input.value += buttonValue;  
    });
});

clearButton.addEventListener("click", function(){
    input.value="";
})

operateButton.addEventListener("click",function(){
    let firstNumber,secondNumber,result;
    const expression = input.value.trim()
    if (expression.includes('+')) {
        [firstNumber, secondNumber] = expression.split('+');
        result=addition(parseFloat(firstNumber),parseFloat(secondNumber));
    } else if (expression.includes('-')) {
        [firstNumber, secondNumber] = expression.split('-');
        result=substract(parseFloat(firstNumber),parseFloat(secondNumber));
    } else if (expression.includes('*')) {
        [firstNumber, secondNumber] = expression.split('*');
       result=multiplication(parseFloat(firstNumber),parseFloat(secondNumber));
    } else if (expression.includes('/')) {
        [firstNumber, secondNumber] = expression.split('/');
        result=divide(parseFloat(firstNumber),parseFloat(secondNumber));
    }
    input.value=result

})




const addition=(firstNumber, secondNumber)=>firstNumber+secondNumber;
const substract=(firstNumber, secondNumber)=>firstNumber-secondNumber;
const multiplication=(firstNumber, secondNumber)=>firstNumber*secondNumber;
const divide = (firstNumber, secondNumber) => secondNumber !== 0 ? firstNumber / secondNumber : 'Error: Division by zero';

