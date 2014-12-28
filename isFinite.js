module.exports = {
  name: "isFinite",
  ns: "object",
  async: true,
  description: "Determines if object is a Finite Number",
  phrases: {
    active: "Determining whether object is a finite number"
  },
  ports: {
    input: {
      "in": {
        title: "In",
        type: "any",
        async: true,
        fn: function __IN__(data, x, source, state, input, output, underscore, dot_object) {
          var r = function() {
            var val = input.path ? dot_object().pick(input.path, data) : data;

            if (underscore.isFinite(val)) {
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
        type: "number"
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