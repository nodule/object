on.input.in = function() {
  var doo;
  var i;

  // Receiving an array, check both are of the same length.
  if($.from.length !== $.to.length) {
    output({error: Error('from length does not match to length')});
  } else {
    doo = dot_object();
    var out = {};
    var merge = false;
    for(i = 0; i < $.from.length; i++) {
      doo.transfer($.from[i], $.to[i], $.in, out, merge);
    }

    output({out: out});
  }

};
