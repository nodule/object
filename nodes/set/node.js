on.input.in = function() {
  var obj = input.object ? input.object : {};
  dot_object().set(input.path, input.in, obj);
  output({out: obj});
};
