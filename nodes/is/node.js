on.input.in = function() {
  var val = $.path ? dot_object().pick($.path, $.in) : $.in;

  if (instance_of(val, $.kind)) {
    output({ yes: $.in });
  } else {
    output({ no: $.in });
  }

};
