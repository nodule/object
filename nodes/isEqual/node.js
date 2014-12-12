on.input.in = function(data) {
  if (underscore.isEqual(data, input.other)) {
    output({yes: data});
  } else {
    output({no: data});
  }
};
