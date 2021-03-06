module.exports = {
  name: "isObject",
  ns: "object",
  async: true,
  description: "Determines if object is an Object",
  phrases: {
    active: "Determining Object"
  },
  ports: {
    input: {
      "in": {
        title: "In",
        type: "any",
        async: true,
        fn: function __IN__(data, source, state, input, $, output, underscore, dot_object) {
          var r = function() {
            var val = $.path ? dot_object().pick($.path, $.in) : $.in;

            if (underscore.isObject(val)) {
              output({
                yes: $.get('in')
              });
            } else {
              output({
                no: $.get('in')
              });
            }
          }.call(this);
          return {
            state: state,
            return: r
          };
        }
      },
      path: {
        title: "Path",
        type: "string",
        "default": null
      }
    },
    output: {
      yes: {
        title: "Yes",
        type: "object"
      },
      no: {
        title: "No",
        type: "any"
      }
    }
  },
  dependencies: {
    npm: {
      underscore: require('underscore'),
      "dot-object": require('dot-object')
    }
  },
  state: {}
}