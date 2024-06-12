const incrementButton = document.getElementById('incrementButton');
const numberDisplay = document.getElementById('numberDisplay');
const decrementButton = document.getElementById('decrementButton');
let currentNumber = 0; 
incrementButton.addEventListener('click', function() {
  currentNumber++;
  numberDisplay.textContent = currentNumber;
});

decrementButton.addEventListener('click', function() {
    currentNumber--;
    numberDisplay.textContent = currentNumber;
  });




  