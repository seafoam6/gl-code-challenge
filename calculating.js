// calculator function isolated to reduce duplicity
function calculate(input){
  if(!input){
    return this.number;
  } else {
    switch (input.operator){
       case 'plus':
         return this.number + input.number;
         break;
       case 'minus':
         return this.number - input.number;
         break;
       case 'times':
         return this.number * input.number;
         break;
       case 'dividedBy':
         return this.number / input.number;
         break;
      default: throw 'invalid operatoration';
    }
  }
}

/*
  the numbers
*/

function zero(input) {
  this.number = 0;
  return calculate(input);
}

function one(input) {
  this.number = 1;
  return calculate(input);
}

function two(input) {
  this.number = 2;
  return calculate(input);
}

function three(input) {
  this.number = 3;
  return calculate(input);
}

function four(input) {
  this.number = 4;
  return calculate(input);
}

function five(input) {
  this.number = 5;
  return calculate(input);
}

function six(input) {
  this.number = 6;
  return calculate(input);
}

function seven(input) {
  this.number = 7;
  return calculate(input);
}

function eight(input) {
  this.number = 8;
  return calculate(input);
}

function nine(input) {
  this.number =  9;
  return calculate(input);
}

/*
  the operators
*/

function plus(rightHandNumber) {
  return {
    operator:'plus',
    number:rightHandNumber
  };
}

function minus(rightHandNumber) {
    return {
    operator:'minus',
    number:rightHandNumber
  };
}

function times(rightHandNumber) {
    return {
    operator:'times',
    number:rightHandNumber
  };
}

function dividedBy(rightHandNumber) {
    return {
    operator:'dividedBy',
    number:rightHandNumber
  };
}
