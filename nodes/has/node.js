on.input.in = function() {
  // can be data or input.in
  if(dot_object.pick(data, input.key)) {
    output({ yes: data });
  } else {
    output({ no: data });
  }
}
