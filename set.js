module.exports = {
  name: "set",
  ns: "object",
  async: true,
  description: "Set a property on an object, or else create a new object and set the property",
  phrases: {
    active: "Setting property {{input.key}}"
  },
  dependencies: {
    npm: {
      "dot-object": require('dot-object')
    }
  },
  ports: {
    input: {
      "in": {
        title: "Value",
        type: "any",
        async: true,
        fn: function __IN__(data, x, source, state, input, output, dot_object) {
          var r = function() {
            var obj = input.object ? input.object : {};
            dot_object().set(input.path, data, obj);
            output({
              out: obj
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
        type: "string"
      },
      object: {
        title: "Object",
        type: "object",
        "default": null
      }
    },
    output: {
      out: {
        title: "out",
        type: "object"
      }
    }
  },
  state: {}
}