// not good(建议在圆括号，数组的方括号,花括号内不留空格)
var arr = [ 'foo', 'bar' ];
var obj = { a: arr };
var a = ( 1 + 2 ) * 3;
// good
var arr2 = ['foo', 'bar'];
var obj2 = {o: obj};
var a = (1 + 2) * 3;

// not good(建议逗号、分号前不用空格，后面用空格)
var foo = 1 ,bar = 2 ;bar++;
var arr = [1 , bar];
var obj = {"foo": "bar" ,"baz": "qur"};
foo(a ,b);
// good
var foo = 1, bar2 = 2
  , baz = 3; bar++;
var arr = [1, 2];
var obj = {"foo": "bar", "baz": "qur"};
foo(a, b);

// not good(建议关键字左右都用空格)
if(foo) {
  // ...
}else{
  // ...
}
// good
if (foo) {
  // ...
} else {
  // ...
}

// not good(建议语句块之前用空格)
if (foo){
  b();
}
// good
if (foo) {
  b();
}

// not good(建议在function的左括号之前不用空格)
function foo () {
  // ...
}
// good
function foo() {
  // ...
}

// not good(建议中缀操作符左右有空格)
a+b
a+ b
a?b:c
const aa={b:1};
// good
a + b
a ? b : c
const a = {b: 1};

// not good(建议箭头函数的箭头前后有空格)
()=> {};
(a) =>{};
// good
() => {};
(a) => {};