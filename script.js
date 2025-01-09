const input=document.querySelector(".input");
const numberButtons= document.querySelectorAll(".number-button");
const actionButtons= document.querySelectorAll(".action-button");

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