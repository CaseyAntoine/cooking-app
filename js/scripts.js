// Liquid conversion

var ounces = function(cup){
  return cup * 8;
};

var cup = parseInt(prompt("How many cups do you want converted to ounces?"));

var result = ounces(cup);

alert("It would be " + result + " fluid oz.");

var tablespoon = function(result){

  return result * 2;
};

var resultTable = tablespoon(result);

alert("It would also be " + resultTable + " tablespoons.");


var teaspoon = function(resultTable) {
  return resultTable * 3;
};

var resultTea = teaspoon(resultTable);

alert("It would also be " + resultTea + " teaspoons.");


var ml = function(resultTea) {
  return resultTea * 4.929;
}

var resultMl = ml(resultTea);

alert("It would also be " + resultMl + " in ml.");
