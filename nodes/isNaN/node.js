on.input.in = function() {
  var val = $.path ? dot_object().pick($.path, $.in) : $.in;

  if (underscore.isNaN(val)) {
    output({ yes: $.get('in') });
  } else {
    output({ no: $.get('in') });
  }

};
