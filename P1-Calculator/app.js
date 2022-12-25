let result = document.querySelector('#result');
let clear = document.querySelector('#clean');
let addition = document.querySelector('#addition');
let subtraction = document.querySelector('#subtraction');
let multiply = document.querySelector('#multiply');
let divide = document.querySelector('#divide');
let percentage = document.querySelector('#percentage');
let equal = document.querySelector('#equal');
let operationButtons = document.querySelectorAll('.operator');

const operations = [
  {
    operation: '+',
    process: (a, b) => a + b,
  },
  {
    operation: '-',
    process: (a, b) => a - b,
  },
  {
    operation: '%',
    process: (a, b) => a % b,
  },
  {
    operation: '/',
    process: (a, b) => a / b,
  },
  {
    operation: '*',
    process: (a, b) => a * b,
  },
  {
    operation: '=',
  },
  {
    operation: 'C',
  },
];

let operationContent = '';

operationButtons.forEach((operation) => {
  operation.addEventListener('click', (event) => {
    const operationValue = event.target.innerText;
    const getOperation = operations.find((item) =>
      operationContent.includes(item.operation)
    );

    if (operationValue === '=') {
      let [a, b] = operationContent.split(getOperation.operation);
      const calcuted = getOperation.process(Number(a), Number(b));
      result.innerText = calcuted;
      operationContent = String(calcuted);

      return;
    }

    operationContent += operationValue;
    result.innerText = operationContent;

    if (operationValue === 'C') {
      result.innerText = '';
      operationContent = '';
    }
  });
});
