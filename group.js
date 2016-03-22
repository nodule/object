module.exports = {
  name: "group",
  ns: "object",
  async: true,
  description: "Groups input into an array",
  phrases: {
    active: "Grouping object"
  },
  expose: ["chi"],
  ports: {
    input: {
      "in": {
        title: "Object",
        type: "any",
        fn: function __IN__(data, x, source, state, input, output, chi) {
          var r = function() {
            // x contains our keys
            for (var gid in x) {

              if (!state.hasOwnProperty(gid)) {
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
        fn: function __XIN__(data, x, source, state, input, output, chi) {
          var r = function() {
            if (!state.hasOwnProperty($.xin.gid)) {
              state[$.xin.gid] = {
                items: [],
                total: null,
                complete: false
              };
            }

            if ($.xin.complete) {
              state[$.xin.gid].total = $.xin.items.length;
              state[$.xin.gid].complete = true;

              // ok sometimes at this point we already have everything...
              // I wonder if the function stays in scope, i think not.
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
  state: {}
}