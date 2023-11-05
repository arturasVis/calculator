let firstNumber=null,secondNumber=null,operator=null

const display = document.querySelector(".display")
const buttons = document.querySelectorAll(".btn")
console.table(buttons)

buttons.forEach((button) => {
    button.addEventListener('click',()=>{
        if(display.textContent==0)
            display.textContent=""
        else if(secondNumber!==null){
            firstNumber=null
            secondNumber=null
            operator=null
            display.textContent=""
        } 
        if(button.classList.contains("operator") && firstNumber===null)
        {
            firstNumber=display.textContent
            operator=button.textContent
            display.textContent=`${firstNumber}${operator}`
        }
        else if(button.classList.contains("operator") && firstNumber!==null){
            secondNumber=display.textContent.split(/[+-/*]/)[1]
            firstNumber=operate(parseFloat(firstNumber),parseFloat(secondNumber),operator)
            display.textContent=`${firstNumber}${button.textContent}`
            operator=button.textContent
            secondNumber=null
        }
        else if(button.classList.contains("clear"))
        {
            firstNumber=null
            secondNumber=null
            operator=null
            display.textContent=0
        }
        else if(button.classList.contains("equal")&&firstNumber!==null&&operator!==null)
        {
            secondNumber=display.textContent.split(/[+\-/*]/)[1]
            display.textContent=operate(parseFloat(firstNumber),parseFloat(secondNumber),operator)
            firstNumber=null
            secondNumber=null
            operator=null
        }
        else if(button.classList.contains("number")){
            display.textContent+=button.textContent
        }
        
    })
})

function add(a,b){
    return  (a+b).toFixed(2)
}
function subtract(a,b){
    return (a-b).toFixed(2)
}
function divide(a,b){
    
    return (a/b).toFixed(2)
}
function mulitply(a,b){
    return (a*b).toFixed(2)
}
function operate(a,b,operation)
{
    switch(operation){
        case "+":
            return add(a,b)
            break;
        case "-":
            return subtract(a,b)
            break;
        case "/":
            return divide(a,b)
            break;
        case "*":
            return mulitply(a,b)
            break;
    }
}

