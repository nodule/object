on.input.in = function() {
  var val = input.path ? dot_object().pick(input.path, input.in) : input.in;
  output( { out: underscore.keys(val) } );
}
