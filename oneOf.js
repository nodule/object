module.exports = {
  name: "oneOf",
  ns: "object",
  async: true,
  description: "Selects a (nested) property outputing the first property available. data.in || data.that || .. etc. Sends an error of none of the properties matched.",
  phrases: {
    active: "Picking one of the properties"
  },
  ports: {
    input: {
      "in": {
        title: "In",
        type: "Object",
        async: true,
        fn: function __IN__(data, source, state, input, $, output, dot_object) {
          var r = function() {
            var val;
            for (var i = 0; i < $.path.length; i++) {
              val = dot_object().pick($.path[i], $.in);
              if (val !== undefined) {
                return output({
                  out: $.write('in', val)
                });
              }
            }

            output({
              error: new Error('None of the properties are found')
            });
          }.call(this);
          return {
            state: state,
            return: r
          };
        }
      },
      path: {
        title: "Path",
        type: "array"
      }
    },
    output: {
      out: {
        title: "Output",
        type: "any"
      },
      error: {
        title: "Error",
        type: "object"
      }
    }
  },
  dependencies: {
    npm: {
      "dot-object": require('dot-object')
    }
  },
  state: {}
}