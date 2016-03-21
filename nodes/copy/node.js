on.input.in = function() {
  var doo;
  var i;

  // Receiving an array, check both are of the same length.
  if($.from.length !== $.to.length) {
    output({error: $.create(Error('from length does not match to length'))});
  } else {
    doo = dot_object();
    var merge = true;
    // should already be done, but to make sure.
    // not sure if it's the case when $.target is set as context
    $.target = JSON.parse(JSON.stringify($.target));
    for(i = 0; i < $.from.length; i++) {
      doo.copy($.from[i], $.to[i], $.in, $.target, merge);
    }

    output({out: $.write('in', $.target)});
  }
};
