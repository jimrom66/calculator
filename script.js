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
        if(input.value =="0"|| (input.value=="noo diabeto")){
            input.value="";
        }
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
    input.value="0";
    firstNumber=0;
    operator=0;
    secondNumber=0;
    result=0;
    enableButtons(actionButtons);
    floatButton.disabled=false;
})

floatButton.addEventListener("click", function() {
    const buttonValue = this.getAttribute("value");

    // Check if there's no digit in the input
    let containsDigit = false;
    for (let i = 0; i < input.value.length; i++) {
        if (input.value[i] >= '0' && input.value[i] <= '9') {
            containsDigit = true;
            break;
        }
    }

    // If no digit is found, set the input to '0'
    if (!containsDigit) {
        input.value += '0';
    }

    // If the input doesn't already contain a dot, append the dot
    if (!input.value.includes(".")) {
        input.value += buttonValue;  // Append the dot to the input value
    }
});

backButton.addEventListener("click", function(){
    input.value=input.value.slice(0,-1);
    if (input.value==""){
        input.value+= "0";
    }

})

operateButton.addEventListener("click", function(){
    if (secondNumber === undefined || secondNumber==0) {
        secondNumber = parseFloat(input.value.slice(1)); 
    }
    
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
        result=divide(firstNumber,secondNumber);
        
    }
    input.value=result;
    firstNumber=result;
    enableButtons(actionButtons)




})




const addition=(firstNumber, secondNumber)=>firstNumber+secondNumber;
const substract=(firstNumber, secondNumber)=>firstNumber-secondNumber;
const multiplication=(firstNumber, secondNumber)=>firstNumber*secondNumber;
const divide = (firstNumber, secondNumber) => secondNumber !== 0 ? firstNumber / secondNumber : 'noo diabeto';

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