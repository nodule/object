on.input.in = function() {
  var doo;
  var i;

  // Receiving an array, check both are of the same length.
  if($.from.length !== $.to.length) {
    output({error: Error('from length does not match to length')});
  } else {
    doo = dot_object();
    for(i = 0; i < $.from.length; i++) {
      doo.move($.from[i], $.to[i], $.in);
    }

    output({out: $.write('in', $.in)});
  }

};
