const checkButton = document.getElementById("check-btn");
const clearButton = document.getElementById("clear-btn");
const resultsDiv = document.getElementById("results-div");

const validPhoneNumber = () => {
  let userInput = document.getElementById("user-input");
  const regex = "";
  
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
