on.start = function start() {
  state.group = chix_group.recv.create()
  state.$ = null
  state.group.on('group', function groupHandler(group) {
    output({out: state.$.create(group)})
  })
}

on.input.in = function () {
  state.group.add($.get('in'))
  state.$ = $
};

on.input.xin = function () {
  state.group.receive($.get('xin'))
  state.$ = $
};
