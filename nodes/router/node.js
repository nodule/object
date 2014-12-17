on.input.in = function(data) {

  var out = [];
  for(var i = 0; i < input.route.length; i++) {
    var res = dot_object().pick(input.route[i], data);
    // err.. does pick remove the value?
    if(undefined !== res) {
      out[i] = data; // send out the data, not the actual picked value.
      output({out: out});
      break;
    }
  }
  // maybe send to error port if no matches.
};
