module.exports = {
  name: "invert",
  ns: "object",
  async: true,
  description: "Retrieves a copy of the object where the keys have become the values and the values the keys. For this to work, all of your object's values should be unique and string serializable",
  phrases: {
    active: "Inverting object"
  },
  ports: {
    input: {
      "in": {
        title: "Object",
        type: "object",
        fn: function __IN__(data, source, state, input, $, output, underscore) {
          var r = function() {
            output({
              out: $.write('in', underscore.invert($.in))
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