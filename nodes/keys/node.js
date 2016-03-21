on.input.in = function() {
  var val = $.path ? dot_object().pick($.path, $.in) : $.in;
  output( { out: underscore.keys(val) } );
}
