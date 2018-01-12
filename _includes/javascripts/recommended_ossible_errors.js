// error (禁止条件表达式中出现赋值操作符。)
if ((a = 10)) {
  a++;
}

// error (禁止在条件中使用常量表达式)
if (true) {
  alert(1);
}

// error (禁止对象字面量中出现重复的 key)
let a = {
  b: 5,
  b: 4
};

// error (禁止空块语句)
if (foo) {
}

// error (禁止使用令人困惑的多行表达式)
let foo = bar
(1 || 2).baz();
// good
var foo = bar;
(1 || 2).baz();

// error (禁止在 return、throw、continue 和 break 语句后出现不可达代码)
function fn() {
  x = 1;
  return x;
  x = 3; // this will never execute
}

// error (typeof 表达式只能与有效的字符串进行比较)
typeof foo === "strinnng"

// error (禁止对 function 声明重新赋值)
function foo() {}
foo = bar;