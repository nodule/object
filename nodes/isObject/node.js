on.input.in = function() {
  var val = input.path ? dot_object.pick(input.path, data) : data;

  if (underscore.isObject(val)) {
    output({ yes: data });
  } else {
    output({ no: data });
  }

};
