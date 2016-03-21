on.input.in = function() {
  if (underscore.isArguments($.in)) {
    output({yes: $.get('in')});
  } else {
    output({no: $.get('in')});
  }
};
