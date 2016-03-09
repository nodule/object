module.exports = {
  name: "groupBy",
  ns: "object",
  async: true,
  description: "Groups an object by it's differentiator",
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
            if (!x.hasOwnProperty(state.gid)) {
              console.log(x)
              throw Error('groupBy:in State gid not initialized yet', state.gid)
            }
            var id = x[state.gid];
            if (!state[id]) {
              state[id] = {};
            }

            state[id].in = data;

            if (state[id].by) {
              // we have a match.
              if (!state.group[state[id].by]) {
                state.group[state[id].by] = [];
              }
              state.group[state[id].by].push(state[id].in);
            }

            state.total++;

            if (state.complete && state.length === (state.total / 2)) {
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
              state.length = data.items.length;
            }
          }.call(this);
          return {
            state: state,
            return: r
          };
        }
      },
      by: {
        title: "Group By",
        type: "any",
        fn: function __BY__(data, x, source, state, input, output, chi) {
          var r = function() {
            if (!x.hasOwnProperty(state.gid)) {
              console.log(x)
              throw Error('groupBy:by State gid not initialized yet', state.gid)
            }

            var id = x[state.gid];
            if (!state[id]) state[id] = {};

            state[id].by = JSON.stringify(data); // keyify

            if (state[id].in) {
              // we have a match.
              if (!state.group[state[id].by]) state.group[state[id].by] = [];
              state.group[state[id].by].push(state[id].in);
            }

            state.total++;

            if (state.complete && state.length === (state.total / 2)) {
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
        type: "boolean"
      },
      by: {
        title: "Group By",
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