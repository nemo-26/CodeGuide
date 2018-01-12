// no space before '(', but one space before'{'
var doSomething = function(item) {
  // do something
};

function doSomething(item) {
  // do something
}

// not good
doSomething (item);

// good
doSomething(item);

// requires parentheses around immediately invoked function expressions
(function() {
  return 1;
})();
// use ', ' between function parameters
var doSomething = function(a, b, c) {
  // do something
};
