on.input.in = function(input.in) {
  if (underscore.isEqual($.in, $.other)) {
    output({yes: $.in});
  } else {
    output({no: $.in});
  }
};
