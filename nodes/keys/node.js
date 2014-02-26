on.input.in = function() {
  var val = input.path ? dot_object().pick(input.path, data) : data;
  output( { out: underscore.keys(val) } );
}
