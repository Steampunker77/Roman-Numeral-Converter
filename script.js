const input = document.getElementById("number");
const convertBtn = document.getElementById("convert-btn");
const output = document.getElementById("output");
let tempRomanNumeral = "";
const romanDigits = [
  {
    value: 1000,
    numeral: "M"
  },
  {
    value: 900,
    numeral: "CM"
  },
  {
    value: 500,
    numeral: "D"
  },
  {
    value: 400,
    numeral: "CD"
  },
  {
    value: 100,
    numeral: "C"
  },
  {
    value: 90,
    numeral: "XC"
  },
  {
    value: 50,
    numeral: "L"
  },
  {
    value: 40,
    numeral: "XL"
  },
  {
    value: 10,
    numeral: "X"
  },
  {
    value: 9,
    numeral: "IX"
  },
  {
    value: 5,
    numeral: "V"
  },
  {
    value: 4,
    numeral: "IV"
  },
  {
    value: 1,
    numeral: "I"
  },
];

// Validation: 
convertBtn.addEventListener("click", () => {
// Clear tempRomanNumeral.
  tempRomanNumeral = "";
// There has to be a number provided.
// The number has to be positive.
// The number has to be less than 4000.
  if(input.value === "") {
    output.innerText = "Please enter a valid number";
    return; 
  } else if (input.value < 0) {
  output.innerText = "Please enter a number greater than or equal to 1";
  return;
  } else if (input.value > 3999) {
  output.innerText = "Please enter a number less than or equal to 3999"; 
  return; 
  }
console.log(`here's the input ${input.value}`);
decimalToRoman(input.value);
console.log(`Roman Numeral is ${tempRomanNumeral}`);
output.innerText = tempRomanNumeral;
})

const decimalToRoman = (input) => {
  let result = "";
  let remaining = input;

  for (const { value, numeral } of romanDigits) {
    while (remaining >= value) {
      result += numeral;
      remaining -= value;
    }
  }
tempRomanNumeral = result;
  return result;
};