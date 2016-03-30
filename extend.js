module.exports = {
  name: "extend",
  ns: "object",
  async: true,
  description: "Copy all of the properties in the source objects over to the destination object, and return the destination object. It's in-order, so the last source will override properties of the same name in previous arguments.",
  phrases: {
    active: "Extending object"
  },
  ports: {
    input: {
      "in": {
        title: "Object",
        type: "object",
        async: true,
        fn: function __IN__(data, source, state, input, $, output, underscore) {
          var r = function() {
            if (state.args) {
              state.args.unshift($.in);
              output({
                out: $.write('in', state.extend(null, state.args))
              });
              state.args = null;
            } else {
              state.args = [$.in];
            }
          }.call(this);
          return {
            state: state,
            return: r
          };
        }
      },
      source: {
        title: "Source Objects",
        type: "array",
        async: true,
        fn: function __SOURCE__(data, source, state, input, $, output, underscore) {
          var r = function() {
            if (state.args) {
              state.args.push($.source);
              output({
                out: $.write('in', state.extend(null, state.args))
              });
              state.args = null;
            } else {
              state.args = [$.source];
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
  state: {
    extend: function apply() {
      [native code]
    },
    args: null,
    source: null
  }
}