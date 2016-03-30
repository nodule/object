module.exports = {
  name: "defaults",
  ns: "object",
  async: true,
  description: "Fill in undefined properties in object with values from the defaults objects, and return the object. As soon as the property is filled, further defaults will have no effect.",
  phrases: {
    active: "Applying defaults to object"
  },
  ports: {
    input: {
      "in": {
        title: "Object",
        type: "object",
        async: true,
        fn: function __IN__(data, source, state, input, $, output, underscore) {
          var r = function() {
            output({
              out: $.write('in', underscore.defaults($.in, $.defaults))
            });
          }.call(this);
          return {
            state: state,
            return: r
          };
        }
      },
      defaults: {
        title: "Defaults",
        type: "object"
      }
    },
    output: {
      out: {
        title: "out",
        type: "object"
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