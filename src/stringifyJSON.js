// this is what you would do if you liked things to be easy:
// var stringifyJSON = JSON.stringify;

// but you don't so you're going to write it from scratch:
// undefined
// functions

var stringifyJSON = function(obj) {
  var stringified = '';
  if (typeof obj === 'number') { stringified += obj.toString(); }
  if (obj === null) { stringified += 'null';}
  if (typeof obj === 'boolean') { stringified += '' + obj + ''; }
  if (typeof obj === 'string') { stringified += '"' + obj + '"'; }
  if (Array.isArray(obj) ) {
    stringified += '[';
    for (let i = 0; i < obj.length; i++) {
      stringified += stringifyJSON(obj[i]); // ---> stringifyJSON() = function -> return value d
      if (i < obj.length - 1) { stringified += ','; }
    }
    stringified += ']';
  }
  if (typeof obj === 'object' && obj !== null && Array.isArray(obj) === false) {
    stringified += '{';
    let len = Object.keys(obj).length;
    for (var key in obj) {
      if (typeof(obj[key]) === 'function' || typeof(obj[key]) === 'undefined' ) { continue; }
      len--;
      stringified += `"${key}":${stringifyJSON(obj[key])}`;
      if (len >= 1) { stringified += ','; }
    }
    stringified += '}';
  }
  return stringified;
};



