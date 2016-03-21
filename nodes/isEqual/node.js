on.input.in = function(input.in) {
  if (underscore.isEqual($.in, $.other)) {
    output({yes: $.get('in')});
  } else {
    output({no: $.get('in')});
  }
};
