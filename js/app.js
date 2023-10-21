// you can generate 4 digit otp by this also but string

// let digits = "0123456789";
// let otp = "";
// for (let i = 0; i < 4; i++) {
//   otp += digits[Math.floor(Math.random() * 10)];
// }

function generatePin() {
  const random = Math.round(Math.random() * 10000);
  return random;
}

function getPin() {
  let pin = generatePin();
  let pinString = pin + "";
  if (pinString.length === 4) {
    return pin;
  } else {
    return getPin();
  }
}

document.getElementById("button-for-otp").addEventListener("click", () => {
  const displayPin = document.getElementById("display-pin");
  displayPin.value = getPin();
});

document.getElementById("calculator").addEventListener("click", (event) => {
  const value = event.target.innerText;
  const calcDisplay = document.getElementById("calc-display");
  const previousNumber = calcDisplay.value;
  if (isNaN(value)) {
    if (value === "C") {
      calcDisplay.value = "";
    } else if (value === "<") {
      const digits = previousNumber.split("");
      digits.pop();
      const remainingDigits = digits.join("");
      calcDisplay.value = remainingDigits;
    }
  } else {
    const newNumber = previousNumber + value;
    calcDisplay.value = newNumber;
  }
});

document.getElementById("btn-submit").addEventListener("click", function () {
  const generatedPin = document.getElementById("display-pin").value;
  const typedPin = document.getElementById("calc-display").value;
  const pinSucces = document.getElementById("pin-success");
  const pinFailed = document.getElementById("pin-error");
  if (generatedPin === typedPin) {
    pinSucces.style.display = "block";
    pinFailed.style.display = "none";
  } else {
    pinFailed.style.display = "block";
    pinSucces.style.display = "none";
  }
});
