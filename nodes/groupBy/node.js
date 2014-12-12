state = {
  group: {},
  total: 0
};

// If this even works, state is not cleared
// properly or at lease during send out
// the current groups can be removed.

// really needs a main also.
// main is called always then.
// and check the existance of those keys
// first just make the synchronous one
on.input.in = function () {
  // x contains our keys
  var id = x[state.gid];
  if (!state[id]) state[id] = {};

  state[id]. in = data;

  if (state[id].by) {
    // we have a match.
    if (!state.group[state[id].by]) state.group[state[id].by] = [];
    state.group[state[id].by].push(state[id]. in );
  }

  state.total++;

  if (state.complete && state.l === (state.total / 2)) {
    // send them out, might also create groups again.
    for (var key in state.group) {
      var g = chi.group('xout', output);

      // like to introduce the grouped output, output like the below is grouped
      // it's a bit like an array port, only difference the output goes to normal ports.
      // I would like to add the convention, that if you send output this way.
      // You must declare a group inside the json
      //
      // out: "group": "result"
      // by:  "group": "result"
      //
      // in a ui this will look like:
      // [o o] o o o
      //
      // Only two states:
      //
      //  [• •] and [o o]
      //
      // Whereas the individual ports are not perse synchronous:
      //
      //  [o o] o • o
      //
      // Where the first is the grouped output, you are assured those ports
      // are pairs of data comming out, belong to eachother.
      output({
        out: state.group[key],
        by: JSON.parse(key) // same as input.by
      }, g.item());
      g.done();
    }
  }
};

// collect the keys.
on.input.by = function () {

  var id = x[state.gid];
  if (!state[id]) state[id] = {};

  state[id].by = JSON.stringify(data); // keyify

  if (state[id]. in ) {
    // we have a match.
    if (!state.group[state[id].by]) state.group[state[id].by] = [];
    state.group[state[id].by].push(state[id]. in );
  }

  state.total++;

  if (state.complete && state.l === (state.total / 2)) {
    // send them out, might also create groups again.
    for (var key in state.group) {
      var g = chi.group('xout', output);
      output({
        out: state.group[key],
        by: JSON.parse(key) // same as input.by
      }, g.item());
      g.done();
    }
  }

};

// xin now kinda acts like a main.
// more clear would probably be group begin and end methods.
// it also makes it required to have this connected.
on.input.xin = function () {
  // will always arrive first.
  // probably this can all be done outside a component.
  // the pair matching is something common.
  if (!data.complete) {
    // register the groupId
    // we rely on this being set first
    state.gid = data.gid;
    state.complete = false;
  } else {
    // is finished
    // send it out.
    state.complete = true;
    state.l = data.items.length;
  }
};
