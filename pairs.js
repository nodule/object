module.exports = {
  name: "pairs",
  ns: "object",
  async: true,
  description: "Retrieve key value pairs from an object",
  phrases: {
    active: "Transforming object to pairs"
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
              out: $.write('in', underscore.pairs($.in))
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