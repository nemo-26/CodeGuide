// error(禁止使用空解构模式)
var {} = foo;
var [] = foo;
var {a: {}} = foo;
var {a: []} = foo;
function foo({}) {}
function foo([]) {}
function foo({a: {}}) {}
function foo({a: []}) {}
// good
var {a = {}} = foo;
var {a = []} = foo;
function foo({a = {}}) {}
function foo({a = []}) {}

// error(禁止 case 语句落空)
switch(foo) {
  case 1:
    doSomething();

  case 2:
    doSomething();
}
// good
switch(foo) {
  case 1:
    doSomething();
    break;

  case 2:
    doSomething();
}

// error(禁止重新声明变量)
var a = 3;
var a = 10;
// good
var a = 3;
// ...
a = 10;