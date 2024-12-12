// Add click event listener to the button
document.getElementById('convert-btn').addEventListener('click', convertNumber);

// Add keydown event listener to the input field
document.getElementById('number').addEventListener('keydown', (event) => {
  if (event.key === "Enter") {
    convertNumber();
  }
});

// Function to handle number conversion
function convertNumber() {
  const numberInput = document.getElementById('number').value;
  const outputElement = document.getElementById('output');
  const parsedNumber = parseFloat(numberInput); // Convert input to a number

  if (!numberInput || isNaN(parsedNumber)) {
    outputElement.textContent = "Please enter a valid number";
  } else if (parsedNumber < 1) {
    outputElement.textContent = "Please enter a number greater than or equal to 1";
  } else if (parsedNumber >= 4000) {
    outputElement.textContent = "Please enter a number less than or equal to 3999";
  } else {
    outputElement.textContent = convertToRoman(parsedNumber);
  }
}

// Function to convert numbers to Roman numerals
function convertToRoman(num) {
  const romanNumerals = [
    { value: 1000, numeral: "M" },
    { value: 900, numeral: "CM" },
    { value: 500, numeral: "D" },
    { value: 400, numeral: "CD" },
    { value: 100, numeral: "C" },
    { value: 90, numeral: "XC" },
    { value: 50, numeral: "L" },
    { value: 40, numeral: "XL" },
    { value: 10, numeral: "X" },
    { value: 9, numeral: "IX" },
    { value: 5, numeral: "V" },
    { value: 4, numeral: "IV" },
    { value: 1, numeral: "I" }
  ];

  let result = "";
  for (let i = 0; i < romanNumerals.length; i++) {
    while (num >= romanNumerals[i].value) {
      result += romanNumerals[i].numeral;
      num -= romanNumerals[i].value;
    }
  }
  return result;
}
