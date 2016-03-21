state.extend = underscore.extend.apply;
state.args = null;
state.source = null;

on.input.in = function() {
  if(state.args) {
     state.args.unshift(input.in);
     output({out: state.extend(null, state.args)});
     state.args = null;
  } else {
    state.args = [input.in];
  }
};

on.input.source = function() {

  if(state.args) {
     state.args.push(input.source);
     output({out: state.extend(null, state.args)});
     state.args = null;
  } else {
    state.args = [input.source];
  }

};
