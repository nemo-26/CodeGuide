// not good
var a   = 1;

function Person() {
  // not good
  var me = this;

  // good
  var _this = this;

  // good
  var that = this;

  // good
  var self = this;
}

