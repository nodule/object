module.exports = {
  name: "methods",
  ns: "object",
  async: true,
  description: "Gets a sorted list of the names of every method in an object — that is to say, the name of every function property of the object",
  phrases: {
    active: "Determining methods"
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
              out: underscore.methods(data)
            });
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
        type: "array"
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