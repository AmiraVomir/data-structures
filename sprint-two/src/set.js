var Set = function() {
  var set = Object.create(setPrototype);
  set._storage = {}; // fix me
  return set;
};

var setPrototype = {};

setPrototype.add = function(item) {
  this._storage[item] = item;
};

setPrototype.contains = function(item) {
  for (var keys in this._storage){
    if (this._storage[keys] === item) {
      return true;
    }
  }
  return false;
};

setPrototype.remove = function(item) {
  for (var keys in this._storage){
    if (this._storage[keys] === item) {
      delete this._storage[keys];
    }
  }
  return item;
};

/*
 * Complexity: What is the time complexity of the above functions?
 */
