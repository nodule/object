on.input. in = function () {
  // x contains our keys
  for (var gid in x) {

    if(!state.hasOwnProperty(gid)) {
      state[gid] = {
        items: [],
        total: null,
        complete: false
      };
    }

    state[gid].items.push(data);

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
  if (!data.complete) {
    state[data.gid] = {
      items: [],
      total: null,
      complete: false
    };
  } else {
    state[data.gid].total = data.items.length;
    state[data.gid].complete = true;

    // ok sometimes at this point we already have everything...
    // I wonder if the function stays in scope, i think not.
    if (state[data.gid].complete &&
      state[data.gid].total === (state[data.gid].items.length)) {

      var g = chi.group('xout', output);
      output({
        out: state[data.gid].items
      }, g.item());

      g.done();

      delete state[data.gid];

    }
  }
};
