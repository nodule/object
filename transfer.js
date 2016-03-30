module.exports = {
  name: "transfer",
  ns: "object",
  async: true,
  description: "Transfer a properties from one object to another object.",
  phrases: {
    active: "Transfering object properties"
  },
  ports: {
    input: {
      "in": {
        title: "Input Object",
        type: "object",
        async: true,
        fn: function __IN__(data, source, state, input, $, output, dot_object) {
          var r = function() {
            var doo;
            var i;

            // Receiving an array, check both are of the same length.
            if ($.from.length !== $.to.length) {
              output({
                error: Error('from length does not match to length')
              });
            } else {
              doo = dot_object();
              var out = {};
              var merge = false;
              for (i = 0; i < $.from.length; i++) {
                doo.transfer($.from[i], $.to[i], $.in, out, merge);
              }

              output({
                out: $.write('in', out)
              });
            }
          }.call(this);
          return {
            state: state,
            return: r
          };
        }
      },
      from: {
        title: "From",
        type: "array"
      },
      to: {
        title: "To",
        type: "array"
      }
    },
    output: {
      error: {
        title: "Error",
        type: "object"
      },
      out: {
        title: "Output",
        type: "object"
      }
    }
  },
  dependencies: {
    npm: {
      "dot-object": require('dot-object')
    }
  },
  state: {}
}