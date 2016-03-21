on.input.in = function() {
  var val = $.path ? dot_object().pick($.path, $.in) : $.in;

  if (instance_of(val, $.kind)) {
    output({ yes: $.get('in') });
  } else {
    output({ no: $.get('in') });
  }

};
