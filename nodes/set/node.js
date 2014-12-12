on.input.in = function(data) {
  var obj = input.object ? input.object : {};
  obj[input.key] = data;
  output({out: obj});
};
