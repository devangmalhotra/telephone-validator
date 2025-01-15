const checkButton = document.getElementById("check-btn");
const clearButton = document.getElementById("clear-btn");
const resultsDiv = document.getElementById("results-div");

const validPhoneNumber = () => {
  let userInput = document.getElementById("user-input");
  const countryCodeRegex = '^(1 ?)?';
  const areaCodeRegex = '(\\([0-9]{3}\\)|[0-9]{3})';
  const spaceOrDashRegex = '[ -]?';
  const numberAfterAreaCodeAndFirstDashRegex = '[0-9]{3}[ -]?[0-9]{4}$'; // since ending($), don't need capture group
  const finalPhoneNumberRegex = new RegExp(`${countryCodeRegex}${areaCodeRegex}${spaceOrDashRegex}${numberAfterAreaCodeAndFirstDashRegex}`);
  //console.log(finalPhoneNumberRegex);
  console.log(finalPhoneNumberRegex.test(userInput.value));
  
  if (userInput.value.length === 0) {
    alert("Please provide a phone number");
  } else if (finalPhoneNumberRegex.test(userInput.value)) {
    let newP = document.createElement('p');
    if (!resultsDiv.classList.contains("hidden")) {
      newP.innerText = `Valid US number: ${userInput.value}`;
      resultsDiv.appendChild(newP);
    } else if (resultsDiv.classList.contains("hidden")) {
      resultsDiv.classList.remove("hidden");
      newP.innerText = `Valid US number: ${userInput.value}`;
      resultsDiv.appendChild(newP);
    }
  } else if (!finalPhoneNumberRegex.test(userInput.value)) {
    let newP = document.createElement('p');
    if (!resultsDiv.classList.contains("hidden")) {
      newP.innerText = `Invalid US number: ${userInput.value}`;
      resultsDiv.appendChild(newP);
    } else if (resultsDiv.classList.contains("hidden")) {
      resultsDiv.classList.remove("hidden");
      newP.innerText = `Invalid US number: ${userInput.value}`;
      resultsDiv.appendChild(newP);
    }
  }
  
};

const clearContents = () => {
  resultsDiv.innerHTML = "";
  if (!resultsDiv.classList.contains("hidden")) {
    resultsDiv.innerHTML = "";
    resultsDiv.classList.add("hidden");
  }
};


checkButton.addEventListener("click", validPhoneNumber);
clearButton.addEventListener("click", clearContents);
