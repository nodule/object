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
        fn: function __IN__(data, x, source, state, input, output) {
          var r = function() {
            var i;
            var obj = input.object ? input.object : {};
            if (input.keys.length !== data.length) {
              output({
                error: Error('Key length does not match value length')
              });
            } else {
              for (i = 0; i < input.keys.length; i++) {
                obj[input.keys[i]] = data[i];
              }
              output({
                out: obj
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