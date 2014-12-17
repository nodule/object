on.input.in = function(data) {

  var out = [];
  var reg;
  var route;
  for(var i = 0; i < input.route.length; i++) {
    route = input.route[i];
    if(route.length !== 2) {
      output({
        error: new Error('Route should be in the form [path,match]')
      });
    }
    var res = dot_object().pick(route[0], data);
    // err.. does pick remove the value?
    if(undefined !== res) {
      reg = new RegExp(route[1]);
      if(reg.test(res)) {
        out[i] = data; // send out the data, not the actual picked value.
        output({out: out});
        return true;
      }
    }
  }

  output({missed: data});

};
