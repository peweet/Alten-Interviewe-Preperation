(function (exports) {

  'use strict';

  var bfs = (function () {

    function buildPath(parents, targetNode) {

      var result = [targetNode];

      while (parents[targetNode] !== null) {

        targetNode = parents[targetNode];

        result.push(targetNode);

      }

      return result.reverse();

    }

    return function (graph, startNode, targetNode) {

      var parents = [];
      var queue = [];
      var visited = [];
      var current;

      queue.push(startNode);
      parents[startNode] = null;
      visited[startNode] = true;
      while (queue.length) {
        current = queue.shift();
        if (current === targetNode) {
          return buildPath(parents, targetNode);
        }
        for (var i = 0; i < graph.length; i += 1) {
          if (i !== current && graph[current][i] && !visited[i]) {
            parents[i] = current;
            visited[i] = true;
            queue.push(i);
          }
        }
      }
      return null;

    };

  });
})
