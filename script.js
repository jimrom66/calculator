const input=document.querySelector(".input");
const numberButtons= document.querySelectorAll(".number-button");
const actionButtons= document.querySelectorAll(".action-button");
const clearButton= document.querySelector(".clear-btn");
const operateButton= document.querySelector(".operate-button");
const backButton= document.querySelector(".backspace-button");
const floatButton=document.querySelector(".float-button");
let firstNumber,operator,secondNumber,result;


numberButtons.forEach(function(button) {
    button.addEventListener("click", function() {
        const buttonValue = this.getAttribute("value");  
        input.value += buttonValue;  
    });
});

actionButtons.forEach(function(button) {
    button.addEventListener("click", function() {
        const buttonValue = this.getAttribute("value");  
        firstNumber= parseFloat(input.value);
        input.value=buttonValue;  
        operator=buttonValue;
        disableButtons(actionButtons);
    });
});

clearButton.addEventListener("click", function(){
    input.value="";
    firstNumber=0;
    operator=0;
    secondNumber=0;
    result=0;
    enableButtons(actionButtons);
    floatButton.disabled=false;
})

floatButton.addEventListener("click",function(){
    const buttonValue= this.getAttribute("value");
    input.value += buttonValue;
    floatButton.disabled=true;
})

backButton.addEventListener("click", function(){
    input.value=input.value.slice(0,-1);
})

operateButton.addEventListener("click", function(){
    secondNumber=parseFloat(input.value.slice(1));
    if (operator=="+"){
        result=addition(firstNumber,secondNumber);
    }
    else if (operator=="-"){
        result=substract(firstNumber,secondNumber);
    }
    else if (operator=="*"){
        result=multiplication(firstNumber,secondNumber);
    }
    else if (operator=="/"){
        result=divide(firstNumber.secondNumber);
    }
    input.value=result;
    firstNumber=result;
    enableButtons(actionButtons)




})




const addition=(firstNumber, secondNumber)=>firstNumber+secondNumber;
const substract=(firstNumber, secondNumber)=>firstNumber-secondNumber;
const multiplication=(firstNumber, secondNumber)=>firstNumber*secondNumber;
const divide = (firstNumber, secondNumber) => secondNumber !== 0 ? firstNumber / secondNumber : 'Error: Division by zero';

function disableButtons(typeOfButton){
    typeOfButton.forEach(button=>{
        button.disabled=true;
    })
}

function enableButtons(typeOfButton){
    typeOfButton.forEach(button => {
        button.disabled=false;
    })
}