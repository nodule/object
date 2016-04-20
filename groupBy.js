module.exports = {
  name: "groupBy",
  ns: "object",
  async: true,
  description: "Groups an object by it's differentiator",
  phrases: {
    active: "Grouping object"
  },
  ports: {
    input: {
      "in": {
        title: "Object",
        type: "any",
        fn: function __IN__(data, source, state, input, $, output, chix_group) {
          var r = function() {
            state.groupBy.add($.in)
          }.call(this);
          return {
            state: state,
            return: r
          };
        }
      },
      xin: {
        title: "In Group",
        type: "any",
        fn: function __XIN__(data, source, state, input, $, output, chix_group) {
          var r = function() {
            state.groupBy.receive($.xin)
          }.call(this);
          return {
            state: state,
            return: r
          };
        }
      },
      by: {
        title: "Group By",
        type: "any",
        fn: function __BY__(data, source, state, input, $, output, chix_group) {
          var r = function() {
            state.groupBy.setBy($.by)
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
        group: "result",
        type: "boolean"
      },
      by: {
        title: "Group By",
        group: "result",
        type: "any"
      },
      xout: {
        title: "Xout",
        type: "array"
      }
    }
  },
  dependencies: {
    npm: {
      "chix-group": require('chix-group')
    }
  },
  state: {},
  on: {
    start: function __ONSTART__(data, source, state, input, $, output, chix_group) {
      var r = function() {
        state.groupBy = chix_group.groupBy.create()
        state.groupBy.on('group', function(group, by) {
          var g = chix_group.send.create()
          output({
            xout: g.open()
          })
          output({
            out: g.write($.create(group)),
            by: $.create(by)
          })
          output({
            xout: g.close()
          })
        })
      }.call(this);
      return {
        state: state,
        return: r
      };
    }
  }
}