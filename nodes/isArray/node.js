on.input.in = function() {
  var val = $.path ? dot_object().pick($.path, $.in) : $.in;

  if (underscore.isArray(val)) {
    output({ yes: $.get('in') });
  } else {
    output({ no: $.get('in') });
  }

};
