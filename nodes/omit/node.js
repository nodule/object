on.input.in = function(data) {
  output({out: underscore.omit(data, input.omit)});
};
