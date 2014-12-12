on.input.in = function(data) {
  if (underscore.isArguments(data)) {
    output({yes: data});
  } else {
    output({no: data});
  }
};
