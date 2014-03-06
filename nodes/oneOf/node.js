on.input.in = function() {

  var val = undefined;
  for(var i = 0; i < input.path.length; i++) {
    val = dot_object().pick(input.path[i], data);
    if(val !=== undefined) {
      output({ out: val });
      break;
    }
  }

  output({ error: new Error('None of the properties are found') });

};
