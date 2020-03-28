var HashTable = function() {
  this._limit = 8;
  this._storage = LimitedArray(this._limit);
};
HashTable.prototype.insert = function(k, v) {
  var index = getIndexBelowMaxForKey(k, this._limit);
  var storageArr = this._storage.get(index);
  if (!storageArr) {
    var bucket = [];
    var tuple = [k,v];
    bucket.push(tuple);
    this._storage.set(index, bucket);
  } else if (storageArr.length > 0) {
    var exist = false;
    for (var i = 0; i < storageArr.length; i++) {
      if (storageArr[i][0] === k) {
        storageArr[i][1] = v;
        exist = true;
      }
    }
    if (exist === false) {
      storageArr.push([k, v]);
    }
  }
};
HashTable.prototype.retrieve = function(k) {
  var index = getIndexBelowMaxForKey(k, this._limit);
  var storageArr = this._storage.get(index);
  for (var i = 0; i < storageArr.length; i++) {
    if (storageArr[i][0] === k) {
      return storageArr[i][1];
    }
  }
};
HashTable.prototype.remove = function(k) {
  var index = getIndexBelowMaxForKey(k, this._limit);
  var storageArr = this._storage.get(index);
  for (var i = 0; i < storageArr.length; i++) {
    var bucket = storageArr[i];
    if (bucket[0] === k) {
      storageArr.splice(i, 2);
    }
  }
};
/*
 * Complexity: What is the time complexity of the above functions?
 */