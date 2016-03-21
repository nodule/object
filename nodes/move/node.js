on.input.in = function() {
  var doo;
  var i;

  // Receiving an array, check both are of the same length.
  if(input.from.length !== input.to.length) {
    output({error: Error('from length does not match to length')});
  } else {
    doo = dot_object();
    for(i = 0; i < input.from.length; i++) {
      doo.move(input.from[i], input.to[i], input.in);
    }

    output({out: input.in});
  }

};
