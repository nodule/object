module.exports = {
  name: "router",
  ns: "object",
  description: "Route packets based on a path, input index will result in same index on output. Route should be an array [path,match], multiple matchers can be added lik [[path,match],[path,match]] -> [0] route Router out [0] -> matched..",
  async: true,
  dependencies: {
    npm: {
      "dot-object": require('dot-object')
    }
  },
  phrases: {
    active: "Routing"
  },
  ports: {
    input: {
      "in": {
        title: "Input Object",
        type: "object",
        async: true,
        fn: function __IN__(data, x, source, state, input, output, dot_object) {
          var r = function() {
            var out = [];
            var reg;
            var route;
            for (var i = 0; i < $.route.length; i++) {
              route = $.route[i];
              if (route.length !== 2) {
                output({
                  error: $.create(new Error('Route should be in the form [path,match]'))
                });
              }
              var res = dot_object().pick(route[0], $.in);
              // err.. does pick remove the value?
              if (undefined !== res) {
                reg = new RegExp(route[1]);
                if (reg.test(res)) {
                  out[i] = $.get('in'); // send out the $.in, not the actual picked value.
                  output({
                    out: out
                  });
                  return true;
                }
              }
            }

            output({
              missed: $.get('in')
            });
          }.call(this);
          return {
            state: state,
            return: r
          };
        }
      },
      route: {
        title: "Routes",
        type: "array"
      }
    },
    output: {
      out: {
        title: "Route",
        type: "array",
        async: true
      },
      missed: {
        title: "Missed",
        type: "object"
      },
      error: {
        title: "Error",
        type: "Error"
      }
    }
  },
  state: {}
}