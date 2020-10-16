// this is what you would do if you liked things to be easy:
// var stringifyJSON = JSON.stringify;

// but you don't so you're going to write it from scratch:


// 9,
// null,
// true,
// false,
// 'Hello world',
// [],
// [8],

var stringifyJSON = function(obj) {
  var stringified = '';

  if (typeof obj === 'number') {
    stringified += obj.toString();
  }

  if (obj === null) {
    stringified += 'null';
  }

  if (typeof obj === 'boolean') {
    stringified += '' + obj + '';
  }

  if (typeof obj === 'string') {
    stringified += '"' + obj + '"';
  }

  if (Array.isArray(obj) ) {
    stringified += '[';

    for (let i = 0; i < obj.length; i++) {
      stringified += stringifyJSON(obj[i]); // ---> stringifyJSON() = function -> return value d
      if (i < obj.length - 1) {
        stringified += ',';
      }
    }
    stringified += ']';
  }

  if (typeof obj === 'object' && obj !== null && Array.isArray(obj) === false) {

    stringified += '{';


    for (let key in obj) {

      if (Array.isArray(obj[key])) {
        stringified += `"${key}":${stringifyJSON(obj[key])}`;

      } else if (typeof obj === 'object' && obj !== null && Array.isArray(obj) === false) {
        stringified += `"${key}":${stringifyJSON(obj[key])}`;

      } else {
        stringified += `"${key}":"${obj[key]}"`;
      }

    }
    stringified += '}';

  }

  return stringified;
};