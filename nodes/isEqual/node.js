on.input.in = function() {
  if (underscore.isEqual($.in, $.other)) {
    output({yes: $.get('in')});
  } else {
    output({no: $.get('in')});
  }
};
