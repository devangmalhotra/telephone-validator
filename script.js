const checkButton = document.getElementById("check-btn");
const clearButton = document.getElementById("clear-btn");
const resultsDiv = document.getElementById("results-div");

const validPhoneNumber = () => {
  let userInput = document.getElementById("user-input");
  const countryCodeRegex = '^(1 ?)?';
  const areaCodeRegex = '(\\([0-9]{3}\\)|[0-9]{3})';
  const spaceOrDashRegex = '[ -]?';
  const numberAfterAreaCodeAndFirstDashRegex = '[0-9]{3}[ -]?[0-9]{4}$'; // since ending, don't need capture group
  const finalPhoneNumberRegex = new RegExp(`${countryCodeRegex}${areaCodeRegex}${spaceOrDashRegex}${numberAfterAreaCodeAndFirstDashRegex}`);
  console.log(finalPhoneNumberRegex);
  
  if (userInput.value.length === 0) {
    alert("Please provide a phone number");
  }
  
};

const clearContents = () => {
  if (!resultsDiv.classList.contains("hidden")) {
    resultsDiv.innerText = "";
    resultsDiv.classList.add("hidden");
  }
};


checkButton.addEventListener("click", validPhoneNumber);
clearButton.addEventListener("click", clearContents);
