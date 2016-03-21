on.input.in = function() {
  if (underscore.isArguments(input.in)) {
    output({yes: input.in});
  } else {
    output({no: input.in});
  }
};
