// this is what you would do if you liked things to be easy:
// var stringifyJSON = JSON.stringify;

// but you don't so you're going to write it from scratch:
// undefined
// functions

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
  // if its an array
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
  // if its an object
  if (typeof obj === 'object' && obj !== null && Array.isArray(obj) === false) {

    stringified += '{';

    let len = Object.keys(obj).length;

    for (let key in obj) {

      if (Array.isArray(obj[key]) && len > 1) {
        stringified += `"${key}":${stringifyJSON(obj[key])},`;
        len -= 1;

      } else if (typeof obj === 'object' && obj !== null && !Array.isArray(obj) && len > 1) {
        stringified += `"${key}":${stringifyJSON(obj[key])},`;
        len -= 1;

      } else if (Array.isArray(obj[key]) && len === 1) {
        stringified += `"${key}":${stringifyJSON(obj[key])}`;

      } else if (typeof obj === 'object' && obj !== null && !Array.isArray(obj) && len === 1) {
        stringified += `"${key}":${stringifyJSON(obj[key])}`;

      } else {
        stringified += `"${key}":"${obj[key]}"`;
      }
    }
    stringified += '}';
  }
  return stringified;
};

