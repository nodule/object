on.input.in = function() {
  var val = $.path ? dot_object().pick($.path, $.in) : $.in;

  if (underscore.isRegExp(val)) {
    output({ yes: $.in });
  } else {
    output({ no: $.in });
  }

};
