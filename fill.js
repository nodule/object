module.exports = {
  name: "fill",
  ns: "object",
  async: true,
  description: "Fills an object with key/value pairs. Both key and in are array ports. Key must be fed the key names, and in will contain the values.",
  phrases: {
    active: "Filling object"
  },
  ports: {
    input: {
      "in": {
        title: "Value(s)",
        type: "array",
        async: true,
        fn: function __IN__(data, source, state, input, $, output) {
          var r = function() {
            var i;
            var obj = $.object ? $.object : {};
            if ($.keys.length !== $.in.length) {
              output({
                error: $.create(Error('Key length does not match value length'))
              });
            } else {
              for (i = 0; i < $.keys.length; i++) {
                obj[$.keys[i]] = $.in[i];
              }
              output({
                out: $.write('in', obj)
              });
            }
          }.call(this);
          return {
            state: state,
            return: r
          };
        }
      },
      keys: {
        title: "Key(s)",
        type: "array"
      },
      object: {
        title: "Object",
        type: "object",
        "default": null
      }
    },
    output: {
      error: {
        title: "Error",
        type: "object"
      },
      out: {
        title: "out",
        type: "object"
      }
    }
  },
  state: {}
}