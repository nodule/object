on.input.in = function() {
  var val = input.path ? dot_object().pick(input.path, input.in) : input.in;

  if (instance_of(val, input.kind)) {
    output({ yes: input.in });
  } else {
    output({ no: input.in });
  }

};
