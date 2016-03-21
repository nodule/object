on.input.in = function () {
  // x contains our keys
  for (var gid in x) {

    if(!state.hasOwnProperty(gid)) {
      state[gid] = {
        items: [],
        total: null,
        complete: false
      };
    }

    state[gid].items.push($.in);

    if (state[gid].complete &&
      state[gid].total === (state[gid].items.length)) {

      var g = chi.group('xout', output);
      output({
        out: state[gid].items
      }, g.item());

      g.done();

      delete state[gid];

    }

  }
};

on.input.xin = function () {

  if(!state.hasOwnProperty($.xin.gid)) {
    state[$.xin.gid] = {
      items: [],
      total: null,
      complete: false
    };
  }

  if ($.xin.complete) {
    state[$.xin.gid].total = $.xin.items.length;
    state[$.xin.gid].complete = true;

    // ok sometimes at this point we already have everything...
    // I wonder if the function stays in scope, i think not.
    if (state[$.xin.gid].complete &&
      state[$.xin.gid].total === (state[$.xin.gid].items.length)) {

      var g = chi.group('xout', output);
      output({
        out: state[$.xin.gid].items
      }, g.item());

      g.done();

      delete state[$.xin.gid];

    }
  }
};
