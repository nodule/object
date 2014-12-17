on.input.in = function(data) {
  var obj = input.object ? input.object : {};
  dot_object().set(input.path, data, obj);
  output({out: obj});
};
