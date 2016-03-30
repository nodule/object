module.exports = {
  name: "values",
  ns: "object",
  async: true,
  description: "Retrieve all of the values of the object's properties",
  phrases: {
    active: "Retrieving object values"
  },
  ports: {
    input: {
      "in": {
        title: "Object",
        type: "object",
        async: true,
        fn: function __IN__(data, x, source, state, input, $, output, underscore) {
          var r = function() {
            output({
              out: $.write('in', underscore.values($.in))
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