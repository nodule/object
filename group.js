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

              state[gid].items.push(data);

              if (state[gid].complete &&
                state[gid].total === (state[gid].items.length)) {

                var g = chi.group('xout', output);
                output({
                  out: state[gid].items
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
            if (!state.hasOwnProperty(data.gid)) {
              state[data.gid] = {
                items: [],
                total: null,
                complete: false
              };
            }

            if (data.complete) {
              state[data.gid].total = data.items.length;
              state[data.gid].complete = true;

              // ok sometimes at this point we already have everything...
              // I wonder if the function stays in scope, i think not.
              if (state[data.gid].complete &&
                state[data.gid].total === (state[data.gid].items.length)) {

                var g = chi.group('xout', output);
                output({
                  out: state[data.gid].items
                }, g.item());

                g.done();

                delete state[data.gid];

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