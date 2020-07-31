const form = document.getElementById("form");
const number = document.getElementById("number");
const circle = document.getElementById("circle");
const getRgb = document.getElementById("getRgb");
const span = document.getElementById("span");

form.addEventListener("submit", (e) => {
    e.preventDefault();

    getInputs();
});

function getInputs() {
    const numberValue = number.value.trim();

    if (numberValue === "") {
        setError(number, "You did not enter a valid number");
        circle.style.backgroundColor = "#fff";
        span.textContent = "Oops... Invalid Input";
        getRgb.style.visibility = "hidden";
        span.style.visibility = "visible";
        span.textContent = "Oops... Invalid Input";
    }

    else if (numberValue < 0 || numberValue > 255) {
        setError(number, "Please enter a number between 0 and 255");
        circle.style.backgroundColor = "#fff";
        getRgb.style.visibility = "hidden";
        span.style.visibility = "visible";
        span.textContent = "Oops... Invalid RGB";
    }
    else {
        setSuccess(number);
        const r = Math.round(Math.floor(Math.random() * numberValue));
        const g = Math.round(Math.floor(Math.random() * numberValue));
        const b = Math.round(Math.floor(Math.random() * numberValue));
        circle.style.backgroundColor = `rgb(${r}, ${g}, ${b})`;
        getRgb.style.visibility = "visible";
        getRgb.textContent = `rgb(${r}, ${g}, ${b})`;       
        span.style.visibility = "hidden";
    }
}

function setError(input, message) {
    const control = input.parentElement;
    const small = control.querySelector("small");
    small.innerText = message;
    control.className = "control error";
}

function setSuccess(input) {
    const control = input.parentElement;
    control.className = "control success"; 
}