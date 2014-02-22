on.input.in = function() {
  // can be data or input.in
  if(underscore.has(data, input.key)) {
    output({ yes: data });
  } else {
    output({ no: data });
  }
}
