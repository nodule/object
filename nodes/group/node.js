on.input. in = function () {
  // x contains our keys
  console.log('out', x, data);
  for (var gid in x) {

    state[gid].items.push(data);

    if (state[gid].complete &&
      state[gid].total === (state[gid].items.length)) {

      var g = chi.group('xout', output);
      output({
        out: state[gid].items
      }, g.item());

      g.done();
      console.log('done');

      // delete state[gid];

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
  }
};
