// If life was easy, we could just do things the easy way:
// var getElementsByClassName = function (className) {
//   return document.getElementsByClassName(className);
// };

// But instead we're going to implement it from scratch:
var getElementsByClassName = function(className) {

  var results = [];
  let node = document.body; // node

  var helperFunction = function (node) {
    if (node.classList && node.classList.contains(className)) {
      results.push(node);
    }
    // base and recursive case
    for ( var i = 0; i < node.children.length; i++) {
      helperFunction(node.children[i]);
    }
  };
  helperFunction(document.body);
  return results;
};

