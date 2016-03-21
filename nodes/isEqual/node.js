on.input.in = function(input.in) {
  if (underscore.isEqual(input.in, input.other)) {
    output({yes: input.in});
  } else {
    output({no: input.in});
  }
};
