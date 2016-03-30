module.exports = {
  name: "isArguments",
  ns: "object",
  async: true,
  description: "Determines if object is an Arguments Object",
  phrases: {
    active: "Determining Arguments Object"
  },
  ports: {
    input: {
      "in": {
        title: "In",
        type: "any",
        fn: function __IN__(data, x, source, state, input, $, output, underscore) {
          var r = function() {
            if (underscore.isArguments($.in)) {
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
      }
    },
    output: {
      yes: {
        title: "Yes",
        type: "object"
      },
      no: {
        title: "No",
        type: "any"
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