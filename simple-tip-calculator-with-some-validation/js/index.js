//Event Listener ----- Best Pratice
document.getElementById("calculate").addEventListener("click",calculateTip);

function calculateTip() {
  //Create variables to hold check textbox value/
  var numOfPeople = document.getElementById("numOfPeople").value;
  var billAmount = document.getElementById("billAmount").value;
  var tipPercentage = document.getElementById("tipPercent").value;
  var validationResult = true;

  validationResult = validationFields(numOfPeople, billAmount, tipPercentage);

  if (validationResult === true) {
    //calculates the how much each person would pay.
    var result = 0;
    result = billAmount * (tipPercentage / 100) / numOfPeople;
    result = result.toFixed(2);

    document.getElementById("billMessage").innerHTML =
      " Tip Amount: </br>" + "<sup>&dollar;</sup>" + result + " each ";
  }
}

//used to valid the form inputs
function validationFields(numberOfPeople, billAmount, tipPercentage) {
  console.log(isNaN(billAmount));
  console.log(billAmount);
  var noErrors = true;
  //Check Bill Amount Validation

  if (billAmount === "" || numberOfPeople === "" || tipPercentage === "") {
    alert("All field must be filled");
  } else {
    if (isNaN(billAmount) || billAmount === "") {
      document.getElementById("billAmountError").style.display = "block";
      document.getElementById("billAmountError").innerHTML =
        "bill amount must be a number";
      noErrors = false;
    } else {
      document.getElementById("billAmountError").style.display = "none";
    }

    //Checks if the number of people is a number
    if (isNaN(numberOfPeople)) {
      document.getElementById("numOfPeopleError").style.display = "block";
      document.getElementById("numOfPeopleError").innerHTML =
        "number of people must be an interger";
      noErrors = false;
    } else if (numberOfPeople <= 0) {
      document.getElementById("numOfPeopleError").style.display = "block";
      document.getElementById("numOfPeopleError").innerHTML =
        "number of people greater than zero";
      noErrors = false;
    } else {
      document.getElementById("numOfPeopleError").style.display = "none";
    }

    //Checks if the percentage is a number
    if (isNaN(tipPercentage)) {
      document.getElementById("tipPercentError").style.display = "block";
      document.getElementById("tipPercentError").innerHTML =
        "bill amount must be a number";
      noErrors = false;
    } else {
      document.getElementById("tipPercentError").style.display = "none";
    }
    return noErrors;
  }
}