on.input.in = function() {
  output({out: underscore.omit(input.in, input.omit)});
};
