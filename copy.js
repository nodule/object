module.exports = {
  name: "copy",
  ns: "object",
  async: true,
  description: "Copy properties from one object to another object.",
  phrases: {
    active: "Copying object properties"
  },
  ports: {
    input: {
      "in": {
        title: "Input Object",
        type: "object",
        async: true,
        fn: function __IN__(data, x, source, state, input, output, dot_object) {
          var r = function() {
            var doo;
            var i;

            // Receiving an array, check both are of the same length.
            if ($.from.length !== $.to.length) {
              output({
                error: $.create(Error('from length does not match to length'))
              });
            } else {
              doo = dot_object();
              var merge = true;
              // should already be done, but to make sure.
              // not sure if it's the case when $.target is set as context
              $.target = JSON.parse(JSON.stringify($.target));
              for (i = 0; i < $.from.length; i++) {
                doo.copy($.from[i], $.to[i], $.in, $.target, merge);
              }

              output({
                out: $.write('in', $.target)
              });
            }
          }.call(this);
          return {
            state: state,
            return: r
          };
        }
      },
      target: {
        title: "Target Object",
        type: "object",
        "default": {}
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