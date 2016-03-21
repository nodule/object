on.input.in = function() {
  var val = $.path ? dot_object().pick($.path, $.in) : $.in;

  if (underscore.isObject(val)) {
    output({ yes: $.in });
  } else {
    output({ no: $.in });
  }

};
