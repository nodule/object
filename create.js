module.exports = {
  name: "create",
  ns: "object",
  async: true,
  description: "Create an object, if input is a direct object it just returns a copy of the object",
  phrases: {
    active: "Creating object"
  },
  ports: {
    input: {
      "in": {
        title: "Object",
        type: "object",
        async: true,
        fn: function __IN__(data, x, source, state, input, output) {
          var r = function() {
            output({
              out: data
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
  state: {}
}