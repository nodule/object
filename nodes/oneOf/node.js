on.input.in = function() {

  var val;
  for(var i = 0; i < input.path.length; i++) {
    val = dot_object().pick(input.path[i], data);
    if(val !== undefined) {
      return output({ out: val });
    }
  }

  output({ error: new Error('None of the properties are found') });

};
