// this is what you would do if you were one to do things the easy way:
// var parseJSON = JSON.parse;

// but you're not, so you'll write it from scratch:
var parseJSON = function(json) {

  var result = null;

  for (let letter of json) {


    if (letter === '[') {
      result = [];
    }



    if (letter === '{') {
      if (result) {

      } else {
        result = {};
      }
    }

    // if letter = number -

    // if letter = '['   - Array

    // if letter = ']' - Array

    // if letter = { -- object

    // if letter = } - object


    // use regular exp, to grab keys and vals from a 'stringed' object, save to an empty array
    // iterate through the array, specify even indexed items as 'keys', specify odd indexed items
    // as 'values' save both into empty {}.




















  }

  return result;
  // your code goes here

};
