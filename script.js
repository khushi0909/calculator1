const previousOperandTextElement = document.querySelector(".previous-operand")
;

const currentOperandTextElement=document.querySelector(".current-operand");

const numberButtons = document.querySelectorAll(".datanumber");
const operationButtons = document.querySelectorAll(".data-operation");

const equalsButton = document.querySelector(".data-equals");
const deleteButtons = document.querySelector(".data-delete");

const allClearButtons = document.querySelector(".data-all-clear");


class Calculator{

    constructor(previousOperandTextElement,currentOperandTextElement){
        this.previousOperandTextElement = previousOperandTextElement;
        this.currentOperandTextElement = currentOperandTextElement;
        this.clear();

    }
    clear(){
        this.previousOperand= "";
        this.currentOperand = "";
        this.operation = undefined;

    }
    delete(){
        this.currentOperand =this.currentOperand.toString().slice(0,-1);

    }
    appendNumber(number){
            if(number == "." && this.currentOperand.includes('.')) return;
        this.currentOperand = this.currentOperand.toString()+number.toString();

    }
   
    compute(){

            let computation;
            const prev = parseFloat(this.previousOperand);
            const current = parseFloat(this.currentOperand);
            if (isNaN(prev) || isNaN(current)) return;

            switch(this.operation){

                case '+':
                    computation = prev + current
                    break
                case "-" :   
                computation = prev - current;
                    break
                 case "÷" :   
                    computation = prev / current;
                        break
                 case "*" :   
                        computation = prev * current;
                            break
                 default :
                 return 
            }
            this.currenOperand = computation;
            this.operation = undefined;
            this.previousOperand = "";

    }
   
    chooseOperation(operation){
        if(this.currentOperand === "") return;
        if(this.previousOperand !== ""){
            this.compute();
        }
        this.operation = operation;
        this.previousOperand = this.currentOperand;
        this.currentOperand = '';

    }
    updateDisplay(){
        this.currentOperandTextElement.innerText = this.currentOperand;
        this.previousOperandTextElement.innerText = this.previousOperand;
    

    }
   
    
}

const calculator = new Calculator(previousOperandTextElement,currentOperandTextElement);



numberButtons.forEach(button => {

    button.addEventListener('click', () => {

        calculator.appendNumber(button.innerText)
        calculator.updateDisplay();

    })
})


operationButtons.forEach(button => {

    button.addEventListener('click', () => {

        calculator.chooseOperation(button.innerText)
        calculator.updateDisplay();

    })
})

equalsButton.addEventListener("click", button  => {

    calculator.compute();
    calculator.updateDisplay();

})
allClearButtons.addEventListener("click",button    => {

    calculator.clear();
    calculator.updateDisplay();

})
deleteButtons.addEventListener("click",button    => {

    calculator.delete();
    calculator.updateDisplay();

})