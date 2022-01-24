const calculator = document.getElementById("calculator") ;
let memory = 0;

function deleteValue(calculator){
    length= calculator.display.value.length
    calculator.display.value = calculator.display.value.substring(0, length - 1)
}

function degtorad(calculator) {

    if ($(".degrees").text() == "DEG") {
     calculator.display.value = calculator.display.value * (180 / Math.PI);
     $(".degrees").text("RAD");
    } else {
     calculator.display.value = calculator.display.value * (Math.PI / 180);
     $(".degrees").text("DEG");
    }}

function square(calculator){
    x = calculator.display.value;
    calculator.display.value = Math.pow(x,2)
}

function resiprocal(calculator){
    x = calculator.display.value;
    calculator.display.value = Math.pow(x,-1)
}

function abs(calculator){
    x = calculator.display.value;
    calculator.display.value = Math.abs(x)
}

function sqrt(calculator){
    x = calculator.display.value;
    calculator.display.value = Math.sqrt(x)
}

function log(calculator){
    x = calculator.display.value;
    calculator.display.value = Math.log10(x)
}

function ln(calculator){
    x = calculator.display.value;
    calculator.display.value = Math.log(x)
}

function factorial(calculator){
    fact = 1
    value = calculator.display.value;
    for(let i=1; i <= value; i++){
        fact = fact * i;
        calculator.display.value = fact;
    }
}

function result(calculator){
    calculator.display.value = eval(calculator.display.value);
}

function MemoryClear(calculator) {
    x = calculator.display.value;
    calculator.display.value = ' ';
}

function MemoryRecall(calculator) {
    x = calculator.display.value;
    calculator.display.value = memory;
    console.log(memory);
}

function MemoryStore(calculator) {
    x = calculator.display.value;
    memory = x;
    calculator.display.value = memory;
    console.log(memory);
}

function MemoryPlus(calculator) {
    x = calculator.display.value;
    memory = eval(`${memory} + ${x}`)
}

function MemoryMinus(calculator) {
    x = calculator.display.value;
    memory = eval(`${memory} - ${x}`)
}

function F_E(calculator) {
    x = calculator.display.value;
    calculator.display.value = parseFloat(x).toExponential(10);
}

function sin(calculator){
    x = calculator.display.value;
    calculator.display.value = Math.sin(x);
}

function cos(calculator){
    x = calculator.display.value;
    calculator.display.value = Math.cos(x);
}

function tan(calculator){
    x = calculator.display.value;
    calculator.display.value = Math.tan(x);
}

function asinh(calculator){
    x = calculator.display.value;
    calculator.display.value = Math.asinh(x);
}

function acosh(calculator){
    x = calculator.display.value;
    calculator.display.value = Math.acosh(x);
}

function atanh(calculator){
    x = calculator.display.value;
    calculator.display.value = Math.atanh(x);
}

