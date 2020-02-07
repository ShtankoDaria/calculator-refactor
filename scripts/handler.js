function calculateHandler(event) {
  // read & process user input from event
  const form = event.target.form;
  const value1 = parseInt(form.value1.value);
  const value2 = parseInt(form.value2.value);
  const operator = form.operator.value;
  // pass user input through core logic
  const result = doMath(value1, value2, operator)
  // render output to DOM for user
  document.querySelector('#result').innerHTML = result;
  // log user action for developers
  calculate.log(calculate)
  // return true for the browser
  return true;
}


  
