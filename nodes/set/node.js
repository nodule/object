on.input.in = function() {
  var obj = $.object ? $.object : {};
  dot_object().set($.path, $.in, obj);
  output({out: obj});
};
