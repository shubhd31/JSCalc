var calculator = document.getElementById('calculator');
var display = document.getElementById("display");
var memory = 0;
var getValue = function (userInput) {
    display.value != null ? display.value += userInput : '';
};
var getResult = function () {
    return display.value;
};
var result = function () {
    try {
        var x = getResult();
        display.value = eval(x);
    }
    catch (_a) {
        display.value = "Syntax error!";
    }
};
var F_E = function () {
    var value = getResult();
    var x = parseFloat(value).toExponential(10);
    display.value = x.toString();
};
var degtorad = function () {
    var value = getResult();
    display.value = (Number(value) * (Math.PI / 100)).toString();
};
var pi = function () {
    var value = getResult();
    var x = Number(value) * Math.PI;
    display.value = x.toString();
};
var e = function () {
    var value = getResult();
    var x = Number(value) * Math.E;
    display.value = x.toString();
};
var square = function () {
    var value = getResult();
    var x = Math.pow(Number(value), 2);
    display.value = x.toString();
};
var reciprocal = function () {
    var value = getResult();
    var x = Math.pow(Number(value), -1);
    display.value = x.toString();
};
var mod = function () {
    var value = getResult();
    var x = Math.abs(Number(value));
    display.value = x.toString();
};
var exp = function () {
    var value = getResult();
    var x = Math.exp(Number(value));
    display.value = x.toString();
};
var sqrt = function () {
    var value = getResult();
    var x = Math.sqrt(Number(value));
    display.value = x.toString();
};
var factorial = function () {
    var value = getResult();
    var fact = 1;
    for (var i = void 0; i <= Number(value); i++) {
        fact = fact * i;
        display.value = fact.toString();
    }
};
var xpowof10 = function () {
    var value = getResult();
    var x = Math.pow(10, Number(value));
    display.value = x.toString();
};
var log = function () {
    var value = getResult();
    var x = Math.log(Number(value));
    display.value = x.toString();
};
var ln = function () {
    var value = getResult();
    var x = Math.LN10 * Number(value);
    display.value = x.toString();
};
var deletevalue = function () {
    var length = display.value.length;
    display.value = display.value.substring(0, length - 1);
};
var sin = function () {
    var value = getResult();
    var x = Math.sin(Number(value));
    display.value = x.toString();
};
var cos = function () {
    var value = getResult();
    var x = Math.cos(Number(value));
    display.value = x.toString();
};
var tan = function () {
    var value = getResult();
    var x = Math.tan(Number(value));
    display.value = x.toString();
};
var abs = function () {
    var value = getResult();
    var x = Math.abs(Number(value));
    display.value = x.toString();
};
var asinh = function () {
    var value = getResult();
    var x = Math.asinh(Number(value));
    display.value = x.toString();
};
var acosh = function () {
    var value = getResult();
    var x = Math.acosh(Number(value));
    display.value = x.toString();
};
var atanh = function () {
    var value = getResult();
    var x = Math.atanh(Number(value));
    display.value = x.toString();
};
var MemoryStore = function () {
    var value = getResult();
    memory = Number(value);
    console.log(memory);
};
var MemoryClear = function () {
    display.value = "";
};
var MemoryRecall = function () {
    var value = getResult();
    display.value = memory.toString();
    console.log(value);
};
var MemoryPlus = function () {
    var value = getResult();
    memory = eval("".concat(memory, " + ").concat(value));
};
var MemoryMinus = function () {
    var value = getResult();
    memory = eval("".concat(memory, " - ").concat(value));
};
var cubevalue = function () {
    var value = getResult();
    display.value = Math.pow(Number(value), 3).toString();
};
var cuberoot = function () {
    var value = getResult();
    var x = Math.cbrt(Number(value));
    display.value = x.toString();
};
var xraiseTwo = function () {
    var value = getResult();
    var x = Math.pow(2, Number(value));
    display.value = x.toString();
    console.log(x);
};
// let more_btn: HTMLButtonElement = document.getElementById("more_btn") as HTMLButtonElement;
// let btn_square: HTMLButtonElement = document.getElementById("square") as HTMLButtonElement;
// let btn_cube: HTMLButtonElement = document.getElementById("cube") as HTMLButtonElement;
// let btn_sqrt: HTMLInputElement = document.getElementById("sqrt") as HTMLInputElement;
// let btn_cbrt: HTMLInputElement = document.getElementById("cbrt") as HTMLInputElement;
// let btn_ypowofx: HTMLButtonElement = document.getElementById("ypowofx") as HTMLButtonElement;
// let btn_xraiseTwo: HTMLButtonElement = document.getElementById("xraiseTwo") as HTMLButtonElement;
// more_btn.addEventListener('click', () => {
//     btn_square.classList.toggle("d-none");
//     btn_cube.classList.toggle("d-none");
//     btn_cube.classList.toggle("d-block");
//     btn_sqrt.classList.toggle("d-none");
//     btn_cbrt.classList.toggle("d-none");
//     btn_cbrt.classList.toggle("d-block");
//     btn_ypowofx.classList.toggle("d-none");
//     btn_xraiseTwo.classList.toggle("d-none");
//     btn_xraiseTwo.classList.toggle("d-block");
// })
var squareVar = document.getElementById("square");
var squareroot = document.getElementById("sqroot");
var x_root_y = document.getElementById("ypowofx");
var valid = true;
var btnswitch = function () {
    if (valid) {
        squareVar.innerHTML = "x<sup>3</sup>";
        squareroot.innerHTML = "<sup>3</sup>√x";
        console.log(squareroot.innerHTML);
        x_root_y.innerHTML = "2<sup>x</sup>";
        valid = false;
    }
    else {
        valid = true;
        squareVar.innerHTML = "x<sup>2</sup>";
        squareroot.innerHTML = "<sup>2</sup>√x";
        x_root_y.innerHTML = "x<sup>y</sup>";
    }
};
