let calculation = localStorage.getItem('calculation') || '';
document.querySelector('.js-result')
  .innerHTML = calculation;


function updateCalculation(value) {
  calculation += value;
  console.log(calculation);
  localStorage.setItem('calculation', calculation);
  document.querySelector('.js-result')
    .innerHTML = `${calculation}`;
}

function resultText() {
  document.querySelector('.js-total')
    .innerHTML = `Result = ${calculation}`
}
