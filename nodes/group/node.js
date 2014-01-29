state = {
  group: {}
};

// really needs a main also.
// main is called always then.
// and check the existance of those keys
// first just make the synchronous one
on.input.in = function() {
   // x contains our keys
   var id = x[state.gid];
   if(!state[id]) state[id] = {};

   state[id].in = data;

   if(state[id].by) {
     // we have a match.
     if(!state.group[state[id].by]) state.group[state[id].by] = [];
     state.group[state[id].by].push(state[id].in);
   }

   if(state.complete &&
      state[id].by  &&
      state[id].in.length === state.l &&
      state[id].by.length === state.l) {
      // send them out, might also create groups again.
      for(var key in state.group) {
        var g = chi.group('xout', output);
        output({
          out: state.group[key]
        }, g.item());
        g.done();
      }
   }
};

// collect the keys.
on.input.by = function() {

   var id = x[state.gid];
   if(!state[id]) state[id] = {};

   state[id].by  = JSON.stringify(data); // keyify

   if(state[id].in) {
     // we have a match.
     if(!state.group[state[id].by]) state.group[state[id].by] = [];
     state.group[state[id].by].push(state[id].in);
   }

   if(state.complete &&
      state[id].in &&
      state[id].in.length === state.l &&
      state[id].by.length === state.l) {
      // send them out, might also create groups again.
      for(var key in state.group) {
        var g = chi.group('xout', output);
        output({
          out: state.group[key]
        }, g.item());
        g.done();
      }
   }

};

// xin now kinda acts like a main.
// more clear would probably be group begin and end methods.
// it also makes it required to have this connected.
on.input.xin = function() {
   // will always arrive first.
   // probably this can all be done outside a component.
   // the pair matching is something common.
   if(!data.complete) {
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
