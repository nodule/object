module.exports = {
  name: "omit",
  ns: "object",
  async: true,
  description: "Return a copy of the object, filtered to omit the blacklisted keys (or array of keys)",
  phrases: {
    active: "Omitting object keys"
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
              out: underscore.omit(data, input.omit)
            });
          }.call(this);
          return {
            state: state,
            return: r
          };
        }
      },
      omit: {
        title: "Pick",
        type: "any"
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