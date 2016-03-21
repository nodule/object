on.input.in = function() {
  output({out: $.write('in', underscore.omit($.in, $.omit))});
};
