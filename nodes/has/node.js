on.input.in = function() {
  if(dot_object().pick($.path, $.in)) {
    output({ yes: $.get('in') });
  } else {
    output({ no: $.get('in') });
  }
}
