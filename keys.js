module.exports = {
  name: "keys",
  ns: "object",
  async: true,
  description: "Retrieve all the names of the object's properties",
  phrases: {
    active: "Retrieving object properties"
  },
  ports: {
    input: {
      "in": {
        title: "Object",
        type: "object",
        async: true,
        fn: function __IN__(data, x, source, state, input, output, underscore, dot_object) {
          var r = function() {
            var val = input.path ? dot_object().pick(input.path, data) : data;
            output({
              out: underscore.keys(val)
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
        type: "string",
        "default": null
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
      underscore: require('underscore'),
      "dot-object": require('dot-object')
    }
  },
  state: {}
}