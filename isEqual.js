module.exports = {
  name: "isEqual",
  ns: "object",
  async: true,
  description: "Performs an optimized deep comparison between the two objects, to determine if they should be considered equal.",
  phrases: {
    active: "Determining equality"
  },
  ports: {
    input: {
      "in": {
        title: "Object",
        type: "object",
        async: true,
        fn: function __IN__(data, x, source, state, input, $, output, underscore) {
          var r = function() {
            if (underscore.isEqual($.in, $.other)) {
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
      other: {
        title: "Object",
        type: "object"
      }
    },
    output: {
      yes: {
        title: "Yes",
        type: "object"
      },
      no: {
        title: "No",
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