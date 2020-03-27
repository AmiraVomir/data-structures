

// Instantiate a new graph
var Graph = function() {
  this.storage = {};
};

// Add a node to the graph, passing in the node's value.
Graph.prototype.addNode = function(node) {
  this.storage[node] = [];
};

// Return a boolean value indicating if the value passed to contains is represented in the graph.
Graph.prototype.contains = function(node) {
  return this.storage[node] ? true : false;
};

// Removes a node from the graph.
Graph.prototype.removeNode = function(node) {
  var allNodes = Object.keys(this.storage);
  for (var i = 0; i < allNodes.length; i ++) {
    if (this.storage[allNodes[i]].includes(node)) {
      var index = this.storage[allNodes[i]].indexOf(node);
      delete this.storage[allNodes[i]][index];
    }
  }
  delete this.storage[node];
};

// Returns a boolean indicating whether two specified nodes are connected.  Pass in the values contained in each of the two nodes.
Graph.prototype.hasEdge = function(fromNode, toNode) { //(1, 2)

  for (var i = 0; i < this.storage[fromNode].length; i++) {
    if (this.storage[fromNode][i] === toNode) {
      return true;
    }
    return false;
  }
};

// Connects two nodes in a graph by adding an edge between them.
Graph.prototype.addEdge = function(fromNode, toNode) {
  this.storage[fromNode].push(toNode);
  this.storage[toNode].push(fromNode);
};

// Remove an edge between any two specified (by value) nodes.
Graph.prototype.removeEdge = function(fromNode, toNode) {
  for (var i = 0; i < this.storage[fromNode].legth; i++) {
    if (this.storage[fromNode][i] === [toNode]) {
      delete this.storage[fromNode][i];
    }
  }
  for (var j = 0; j < this.storage[toNode].length; j++) {
    if (this.storage[toNode][j] === fromNode) {
      delete this.storage[toNode][j];
    }
  }
};

// Pass in a callback which will be executed on each node of the graph.
Graph.prototype.forEachNode = function(cb) {
  Object.keys(this.storage).forEach(function(node) {
    cb(node);
  });
};
/*
 * Complexity: What is the time complexity of the above functions?
 */


