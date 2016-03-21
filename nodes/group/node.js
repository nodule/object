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

    state[gid].items.push(input.in);

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

  if(!state.hasOwnProperty(input.xin.gid)) {
    state[input.xin.gid] = {
      items: [],
      total: null,
      complete: false
    };
  }

  if (input.xin.complete) {
    state[input.xin.gid].total = input.xin.items.length;
    state[input.xin.gid].complete = true;

    // ok sometimes at this point we already have everything...
    // I wonder if the function stays in scope, i think not.
    if (state[input.xin.gid].complete &&
      state[input.xin.gid].total === (state[input.xin.gid].items.length)) {

      var g = chi.group('xout', output);
      output({
        out: state[input.xin.gid].items
      }, g.item());

      g.done();

      delete state[input.xin.gid];

    }
  }
};
