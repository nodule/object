on.input.in = function() {
  if(dot_object().pick(input.path, input.in)) {
    output({ yes: input.in });
  } else {
    output({ no: input.in });
  }
}
