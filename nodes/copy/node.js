on.input.in = function() {
  var doo;
  var i;

  // Receiving an array, check both are of the same length.
  if(input.from.length !== input.to.length) {
    output({error: Error('from length does not match to length')});
  } else {
    doo = dot_object();
    var merge = true;
    // should already be done, but to make sure.
    // not sure if it's the case when input.target is set as context
    input.target = JSON.parse(JSON.stringify(input.target));
    for(i = 0; i < input.from.length; i++) {
      doo.copy(input.from[i], input.to[i], input.in, input.target, merge);
    }

    output({out: input.target});
  }

};
