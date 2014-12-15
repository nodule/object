on.input.in = function(data) {
  var doo;
  var i;

  // Receiving an array, check both are of the same length.
  if(input.from.length !== input.to.length) {
    output({error: Error('from length does not match to length')});
  } else {
    doo = dot_object();
    var out = {};
    var merge = true;
    for(i = 0; i < input.from.length; i++) {
      doo.copy(input.from[i], input.to[i], data, out, merge);
    }

    output({out: out});
  }

};
