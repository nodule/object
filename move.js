module.exports = {
  name: "move",
  ns: "object",
  async: true,
  description: "Moves properties within one object from one place to the other",
  phrases: {
    active: "Moving object properties"
  },
  ports: {
    input: {
      "in": {
        title: "Input Object",
        type: "object",
        async: true,
        fn: function __IN__(data, x, source, state, input, $, output, dot_object) {
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
              for (i = 0; i < $.from.length; i++) {
                doo.move($.from[i], $.to[i], $.in);
              }

              output({
                out: $.write('in', $.in)
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