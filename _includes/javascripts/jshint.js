// error (不要删除变量)
var a = 10;
delete a;

// not good
if (a == 1) {
  a++;
}

// good
if (a === 1) {
  a++;
}

// not good
Array.prototype.count = function(value) {
  return 4;
};

// not good
var x = 1;

function test() {
  if (true) {
    var x = 0;
  }

  x += 1;
}

// not good
function test() {
  console.log(x);

  var x = 1;
}

// not good
new Person();

// good
var person = new Person();

// not good
delete(obj.attr);

// good
delete obj.attr;

// not good
if (a = 10) {
  a++;
}

// not good
var a = [1, , , 2, 3];

// not good
var nums = [];

for (var i = 0; i < 10; i++) {
  (function(i) {
    nums[i] = function(j) {
      return i + j;
    };
  }(i));
}
