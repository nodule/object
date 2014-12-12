state.extend = underscore.extend.apply;
state.args = null;
state.source = null;

on.input.in = function(data) {
  if(state.args) {
     state.args.unshift(data);
     output({out: state.extend(null, state.args)});
     state.args = null;
  } else {
    state.args = [data];
  }
};

on.input.source = function(data) {

  if(state.args) {
     state.args.push(data);
     output({out: state.extend(null, state.args)});
     state.args = null;
  } else {
    state.args = [data];
  }

};
