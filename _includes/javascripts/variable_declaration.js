function doSomethingWithItems (items) {

  // use one var
  var value = 10,
    result = value + 10,
    len,
    i;

  for (i = 0, len = items.length; i < len; i++) {
    result += 10;
  }
  return result;
}

doSomethingWithItems();
