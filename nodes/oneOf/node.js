on.input.in = function() {

  var val;
  for(var i = 0; i < $.path.length; i++) {
    val = dot_object().pick($.path[i], $.in);
    if(val !== undefined) {
      return output({ out: $.write('in', val) });
    }
  }

  output({ error: new Error('None of the properties are found') });

};
