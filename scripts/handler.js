function calculateHandler(event) {
  // read & process user input from event
  const form = event.target.form;
  const valueone = parseInt(form.value1.value);
  const valuetwo = parseInt(form.value2.value);
  const operators = form.operator.value;
  // pass user input through core logic
  const result = doMath(operators, valueone, valuetwo)
  // render output to DOM for user
  document.getElementById('result').innerHTML = result;

  // log user action for developers
  console.log(result)
  // return true for the browser
  return true;
}


  
