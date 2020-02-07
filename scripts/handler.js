function calculateHandler(event) {
  // read & process user input from event

  var a = parseInt(document.querySelector('#value1').value);
  var b = parseInt(document.querySelector('#value2').value);
  var operation = document.querySelector('#operator').value;
  var calculate;
  // pass user input through core logic
  if (typeof operation !== 'string') {
    throw new Error('operation should be a string');
  }
  if (typeof a !== 'number') {
    throw new Error('a should be a number');
  }
  if (typeof b !== 'number') {
    throw new Error('b should be a number');
  }
  // render output to DOM for user
  document.querySelector('#result').innerHTML = calculate;
  // log user action for developers
calculate.log(calculate)
  // return true for the browser
  return true;
}
