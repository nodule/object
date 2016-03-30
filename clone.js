module.exports = {
  name: "clone",
  ns: "object",
  async: true,
  description: "Create a shallow-copied clone of the object. Any nested objects or arrays will be copied by reference, not duplicated.",
  phrases: {
    active: "Cloning object"
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
              out: $.clone('in', underscore.clone($.in))
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