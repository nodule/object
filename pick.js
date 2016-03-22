module.exports = {
  name: "pick",
  ns: "object",
  async: true,
  description: "Output a copy of the object, filtered to only have values for the whitelisted keys (or array of valid keys)",
  phrases: {
    active: "Picking object"
  },
  ports: {
    input: {
      "in": {
        title: "Object",
        type: "object",
        async: true,
        fn: function __IN__(data, x, source, state, input, output, underscore) {
          var r = function() {
            output({
              out: $.write('in', underscore.pick($.in, $.pick))
            });
          }.call(this);
          return {
            state: state,
            return: r
          };
        }
      },
      pick: {
        title: "Pick",
        type: "array",
        items: {
          type: "string"
        }
      }
    },
    output: {
      out: {
        title: "out",
        type: "object"
      }
    }
  },
  dependencies: {
    npm: {
      underscore: require('underscore')
    }
  },
  state: {}
}