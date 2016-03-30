module.exports = {
  name: "is",
  ns: "object",
  async: true,
  description: "Determines if object an object is of a certain type",
  phrases: {
    active: "Determining whether object is a {{input.type}}"
  },
  ports: {
    input: {
      "in": {
        title: "In",
        async: true,
        type: "any",
        fn: function __IN__(data, x, source, state, input, $, output, instance_of, dot_object) {
          var r = function() {
            var val = $.path ? dot_object().pick($.path, $.in) : $.in;

            if (instance_of(val, $.kind)) {
              output({
                yes: $.get('in')
              });
            } else {
              output({
                no: $.get('in')
              });
            }
          }.call(this);
          return {
            state: state,
            return: r
          };
        }
      },
      kind: {
        title: "Type",
        type: "string"
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
        type: "any"
      },
      no: {
        title: "No",
        type: "any"
      }
    }
  },
  dependencies: {
    npm: {
      "instance-of": require('instance-of'),
      "dot-object": require('dot-object')
    }
  },
  state: {}
}