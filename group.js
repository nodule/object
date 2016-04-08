module.exports = {
  name: "group",
  ns: "object",
  async: true,
  description: "Groups input into an array",
  phrases: {
    active: "Grouping object"
  },
  ports: {
    input: {
      xin: {
        title: "In Group",
        type: "any",
        fn: function __XIN__(data, source, state, input, $, output, chix_group) {
          var r = function() {
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
          }.call(this);
          return {
            state: state,
            return: r
          };
        }
      },
      "in": {
        title: "Object",
        type: "any",
        fn: function __IN__(data, source, state, input, $, output, chix_group) {
          var r = function() {
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
          }.call(this);
          return {
            state: state,
            return: r
          };
        }
      }
    },
    output: {
      xout: {
        title: "Xout",
        type: "array"
      },
      out: {
        title: "out",
        group: "result",
        type: "any"
      }
    }
  },
  dependencies: {
    npm: {
      "chix-group": require('chix-group')
    }
  },
  state: {},
  on: {
    start: function __ONSTART__(data, source, state, input, $, output, chix_group) {
      var r = function() {
        state.group = chix_group.recv.create()
        state.handler = function stateHandler($) {
          if (state.group.isComplete()) {
            output({
              out: $.create(state.group.read())
            })
          }
        }
      }.call(this);
      return {
        state: state,
        return: r
      };
    }
  }
}