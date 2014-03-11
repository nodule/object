on.input.in = function() {
  // can be data or input.in
  if(dot_object().pick(input.path, data)) {
    output({ yes: data });
  } else {
    output({ no: data });
  }
}
