on.input.in = function() {
  // can be data or input.in
  if(dot_object.pick(data, input.path)) {
    output({ yes: data });
  } else {
    output({ no: data });
  }
}
