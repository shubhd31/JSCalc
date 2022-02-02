const calculator = document.getElementById('calculator');
let display: HTMLInputElement = document.getElementById("display") as HTMLInputElement;
let memory: number = 0;


const getValue = (userInput: String): void => {
    display.value != null ? display.value += userInput : '';
}

const getResult = (): string => {
    return display.value;
}

const result = (): void => {
    try {
        let x = getResult();
        display.value = eval(x);
    }
    catch {
        display.value = "Syntax error!"
    }
}

const F_E = (): void => {
    let value = getResult();
    let x = parseFloat(value).toExponential(10);
    display.value = x.toString();
}

const degtorad = () => {
    let value = getResult();
    display.value = (Number(value) * (Math.PI / 100)).toString()
}

const pi = (): void => {
    let value: string = getResult();
    let x: number = Number(value) * Math.PI;
    display.value = x.toString();
}

const e = (): void => {
    let value: string = getResult();
    let x: number = Number(value) * Math.E;
    display.value = x.toString();
}

const square = (): void => {
    let value: string = getResult();
    let x: number = Math.pow(Number(value), 2);
    display.value = x.toString();
}

const reciprocal = (): void => {
    let value: string = getResult();
    let x: number = Math.pow(Number(value), -1);
    display.value = x.toString();
}

const mod = (): void => {
    let value: string = getResult();
    let x: number = Math.abs(Number(value));
    display.value = x.toString();
}

const exp = (): void => {
    let value: string = getResult();
    let x: number = Math.exp(Number(value));
    display.value = x.toString();
}
const sqrt = (): void => {
    let value: string = getResult();
    let x: number = Math.sqrt(Number(value));
    display.value = x.toString();
}

const factorial = () => {
    let value: string = getResult();
    let fact: number = 1;
    for (let i: number; i <= Number(value); i++) {
        fact = fact * i;
        display.value = fact.toString();
    }
}

const xpowof10 = () => {
    let value: string = getResult();
    let x: number = Math.pow(10, Number(value));
    display.value = x.toString();
}

const log = () => {
    let value: string = getResult();
    let x: number = Math.log(Number(value));
    display.value = x.toString();
}

const ln = () => {
    let value: string = getResult();
    let x: number = Math.LN10 * Number(value);
    display.value = x.toString();
}

const deletevalue = (): void => {
    let length: number = display.value.length;
    display.value = display.value.substring(0, length - 1)
}

const sin = (): void => {
    let value: string = getResult();
    let x: number = Math.sin(Number(value));
    display.value = x.toString();
}

const cos = (): void => {
    let value: string = getResult();
    let x: number = Math.cos(Number(value));
    display.value = x.toString();
}

const tan = (): void => {
    let value: string = getResult();
    let x: number = Math.tan(Number(value));
    display.value = x.toString();
}

const abs = (): void => {
    let value: string = getResult();
    let x: number = Math.abs(Number(value));
    display.value = x.toString();
}

const asinh = (): void => {
    let value: string = getResult();
    let x: number = Math.asinh(Number(value));
    display.value = x.toString();
}

const acosh = (): void => {
    let value: string = getResult();
    let x: number = Math.acosh(Number(value));
    display.value = x.toString();
}

const atanh = (): void => {
    let value: string = getResult();
    let x: number = Math.atanh(Number(value));
    display.value = x.toString();
}

const MemoryStore = () => {
    let value: string = getResult();
    memory = Number(value);
    console.log(memory);
}

const MemoryClear = () => {
    display.value = "";
}

const MemoryRecall = () => {
    let value: string = getResult();
    display.value = memory.toString();
    console.log(value);
}

const MemoryPlus = () => {
    let value: string = getResult();
    memory = eval(`${memory} + ${value}`)
}

const MemoryMinus = () => {
    let value: string = getResult();
    memory = eval(`${memory} - ${value}`)
}
const cubevalue = () => {
    let value: string = getResult();
    display.value = Math.pow(Number(value), 3).toString();
}

const cuberoot = () => {
    let value: string = getResult();
    let x: number = Math.cbrt(Number(value));
    display.value = x.toString();
}

const xraiseTwo = () => {
    let value: string = getResult();
    let x: number = Math.pow(2, Number(value));
    display.value = x.toString();
    console.log(x);

}

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


// let squareVar = document.getElementById("square")! as HTMLInputElement;
// let squareroot = document.getElementById("sqroot")! as HTMLButtonElement;
// let x_root_y = document.getElementById("ypowofx")! as HTMLInputElement;


// let valid: boolean = true;
// const btnswitch = () => {

//     if (valid) {

//         squareVar.innerHTML = "x<sup>3</sup>";
//         squareroot.innerHTML = "<sup>3</sup>√x";
//         x_root_y.innerHTML = "2<sup>x</sup>";
//         valid = false;

//     } else {
//         valid = true;
//         squareVar.innerHTML = "x<sup>2</sup>";
//         squareroot.innerHTML = "<sup>2</sup>√x";
//         x_root_y.innerHTML = "x<sup>y</sup>";
//     }

// };