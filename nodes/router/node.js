on.input.in = function() {

  var out = [];
  var reg;
  var route;
  for(var i = 0; i < $.route.length; i++) {
    route = $.route[i];
    if(route.length !== 2) {
      output({
        error: $.create(new Error('Route should be in the form [path,match]'))
      });
    }
    var res = dot_object().pick(route[0], $.in);
    // err.. does pick remove the value?
    if(undefined !== res) {
      reg = new RegExp(route[1]);
      if(reg.test(res)) {
        out[i] = $.get('in'); // send out the $.in, not the actual picked value.
        output({out: out});
        return true;
      }
    }
  }

  output({missed: $.get('in')});

};
