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
      "in": {
        title: "Object",
        type: "any",
        fn: function __IN__(data, x, source, state, input, $, output, chix_group) {
          var r = function() {
            state.group.add($.in)
            state.handler()

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
      },
      xin: {
        title: "In Group",
        type: "any",
        fn: function __XIN__(data, x, source, state, input, $, output, chix_group) {
          var r = function() {
            state.group.receive($.xin)
            state.handler()
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
      }
    },
    output: {
      out: {
        title: "out",
        group: "result",
        type: "any"
      },
      xout: {
        title: "Xout",
        type: "array"
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
    start: function __ONSTART__(data, x, source, state, input, $, output, chix_group) {
      var r = function() {
        state.group = chix_group.create()
        state.handler = function stateHandler() {
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