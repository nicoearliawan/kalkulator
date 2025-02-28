const display = document.querySelector(".display");
const buttons = document.querySelectorAll("button");
const specialChars = ["%", "*", "/", "-", "+", "=", "sin", "cos", "tan"];
let output = "";

const calculate = (btnValue) => {
    display.focus();
    if (btnValue === "=") {
        if (output !== "") {
            output = eval(output.replace("%", "/100"));
        }
    } else if (btnValue === "AC") {
        output = "";
    } else if (btnValue === "DEL") {
        output = output.toString().slice(0, -1);
    } else if (btnValue === "sin") {
        output = Math.sin(parseFloat(output) * Math.PI / 180).toFixed(4);
    } else if (btnValue === "cos") {
        output = Math.cos(parseFloat(output) * Math.PI / 180).toFixed(4);
    } else if (btnValue === "tan") {
        output = Math.tan(parseFloat(output) * Math.PI / 180).toFixed(4);
    } else {
        if (output === "" && specialChars.includes(btnValue)) return;
        output += btnValue;
    }
    display.value = output;
};

buttons.forEach((button) => {
    button.addEventListener("click", (e) => calculate(e.target.dataset.value));
});