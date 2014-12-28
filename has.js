module.exports = {
  name: "has",
  ns: "object",
  async: true,
  description: "Does the object contain the given property? You can use dot notation to dig deeper into the object.",
  phrases: {
    active: "Determining whether the object has property {{input.path}}"
  },
  ports: {
    input: {
      "in": {
        title: "Object",
        type: "object",
        async: true,
        fn: function __IN__(data, x, source, state, input, output, dot_object) {
          var r = function() {
            // can be data or input.in
            if (dot_object().pick(input.path, data)) {
              output({
                yes: data
              });
            } else {
              output({
                no: data
              });
            }
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
      }
    },
    output: {
      yes: {
        title: "Yes",
        type: "object"
      },
      no: {
        title: "No",
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