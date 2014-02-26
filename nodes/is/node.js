on.input.in = function() {
  var val = input.path ? dot_object().pick(input.path, data) : data;

  if (instance_of(val, input.kind)) {
    output({ yes: data });
  } else {
    output({ no: data });
  }

};
