on.start = function start() {
  state.group = chix_group.recv.create()
  state.handler = function stateHandler($) {
    if (state.group.isComplete()) {
      output({out: $.create(state.group.read())})
    }
  }
}

// should be able to continously receive groups.
on.input.in = function () {
  state.group.add($.get('in'))
  state.handler($)

  /*
  // x contains our keys
  for (var gid in x) {
    if(!state.hasOwnProperty(gid)) {
      state[gid] = {
        items: [],
        total: null,
        complete: false
      };
    }

    state[gid].items.push($.get('in'));

    if (state[gid].complete &&
      state[gid].total === (state[gid].items.length)) {

      var g = chi.group('xout', output);
      output({
        out: $.create(state[gid].items)
      }, g.item());

      g.done();

      delete state[gid];

    }
  }
  */
};

on.input.xin = function () {
  state.group.confirm($.get('xin'))
  state.handler($)
  /*
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

    if (state[$.xin.gid].complete &&
      state[$.xin.gid].total === (state[$.xin.gid].items.length)) {

      var g = chi.group('xout', output);
      output({
        out: $.create(state[$.xin.gid].items)
      }, g.item());

      g.done();

      delete state[$.xin.gid];

    }
  }
  */
};
