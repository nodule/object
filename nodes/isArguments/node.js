on.input.in = function() {
  if (underscore.isArguments($.in)) {
    output({yes: $.in});
  } else {
    output({no: $.in});
  }
};
