// calculator function isolated to reduce duplicity
function calculate(theArgs){
  if(theArgs.length === 0){
    return this.number;
  } else {
    switch (theArgs[0].operator){
       case 'plus':
         return this.number + theArgs[0].number;
         break;
       case 'minus':
         return this.number - theArgs[0].number;
         break;
       case 'times':
         return this.number * theArgs[0].number;
         break;
       case 'dividedBy':
         return this.number / theArgs[0].number;
         break;
      default: throw 'invalid operatoration';
    }
  }
}

/*
  the numbers
*/

function zero(...theArgs) {
  this.number = 0;
  return calculate(theArgs);
}

function one(...theArgs) {
  this.number = 1;
  return calculate(theArgs);
}

function two(...theArgs) {
  this.number = 2;
  return calculate(theArgs);
}

function three(...theArgs) {
  this.number = 3;
  return calculate(theArgs);
}

function four(...theArgs) {
  this.number = 4;
  return calculate(theArgs);
}

function five(...theArgs) {
  this.number = 5;
  return calculate(theArgs);
}

function six(...theArgs) {
  this.number = 6;
  return calculate(theArgs);
}

function seven(...theArgs) {
  this.number = 7;
  return calculate(theArgs);
}

function eight(...theArgs) {
  this.number = 8;
  return calculate(theArgs);
}

function nine(...theArgs) {
  this.number =  9;
  return calculate(theArgs);
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
