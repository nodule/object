module.exports = {
  name: "isEmpty",
  ns: "object",
  async: true,
  description: "Determines if object contains no values (no enumerable own-properties)",
  phrases: {
    active: "Determining empty object"
  },
  ports: {
    input: {
      "in": {
        title: "Object",
        async: true,
        type: "any",
        fn: function __IN__(data, x, source, state, input, output, underscore, dot_object) {
          var r = function() {
            var val = input.path ? dot_object().pick(input.path, data) : data;

            if (underscore.isEmpty(val)) {
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
        type: "string",
        "default": null
      }
    },
    output: {
      yes: {
        title: "Yes",
        type: "boolean"
      },
      no: {
        title: "No",
        type: "any"
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