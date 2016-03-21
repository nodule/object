on.input.in = function() {
  if(dot_object().pick($.path, $.in)) {
    output({ yes: $.in });
  } else {
    output({ no: $.in });
  }
}
