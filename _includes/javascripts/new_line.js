// not good（在花括号内，如果在属性内部或属性之间有换行符，就要求有换行符）
let a = {
};
let b = {
  foo: 1
};
let c = {
  foo: 1, bar: 2
};
// good
let a = {};
let b = {foo: 1};
let c = {foo: 1, bar: 2};
let d = {
  foo: 1,
  bar: 2
};

// 花括号按照one true brace style风格
if (condition) {
  ...
} else {
  ...
}

try {
  ...
} catch (e) {
  ...
} finally {
  ...
}

// not good
function test()
{
  ...
}

// good
function test() {
  ...
}

// not good
var a = {
  b: 1
  , c: 2
};

x = y
  ? 1 : 2;

// good
var a = {
  b: 1,
  c: 2
};

x = y ? 1 : 2;
x = y ?
  1 : 2;