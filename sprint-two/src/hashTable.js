var HashTable = function() {
  var self = this;
  this._limit = 8;
  this._storage = LimitedArray(this._limit);
  this._size = 0;
};

HashTable.prototype.insert = function(k, v) {
  var index = getIndexBelowMaxForKey(k, this._limit);
  var storageArr = this._storage.get(index);
  var bucket = [];
  if ((storageArr) && storageArr[0] !== k) {
    bucket.push(storageArr);
    bucket.push([k, v]);
    this._storage.set(index, bucket);
  } else {
    this._storage.set(index, [k, v]);
  }
  // this._size++;
  // if (this._size > this._limit * 0.75) {
  //   this.sizeAdjust(this._limit * 2);
  // }
};

HashTable.prototype.retrieve = function(k) {
  var index = getIndexBelowMaxForKey(k, this._limit);
  var storageArr = this._storage.get(index);
  if (Array.isArray(storageArr[0])) {
    for (var i = 0; i < storageArr.length; i++) {
      if (storageArr[i][0] === k) {
        return storageArr[i][1];
      }
    }

  }
  return storageArr[1];
};

HashTable.prototype.remove = function(k) {
  var index = getIndexBelowMaxForKey(k, this._limit);
  var storageArr = this._storage.get(index);
  delete storageArr[1];
  this._size--;
  if (this._size > this._limit * 0.25) {
    this.sizeAdjust(this._limit * 2);
  }
  return k;
};

HashTable.prototype.sizeAdjust = function(num) {
  //change limit
  this._limit = num;
  //reset size
  this._size = 0;
  //insert everything back in

  let oldStorage = this._storage;
  this._storage = [LimitedArray(this._limit)];

  if (Array.isArray(oldStorage[0])) {
    for (var i = 0; i < oldStorage.length; i++) {
      var bucket = oldStorage[i];
      if (!bucket) {
        break;
      }
      for (var j = 0; j < bucket.length; j++) {
        var tuple = bucket[i];
        this.insert(tuple[0], tuple[1]);
      }
    }
  }
};


// };
/*
 * Complexity: What is the time complexity of the above functions?
 insert() complexity = linear O(n)
 retrieve() complexity = linear O(n)
 remove() complexity = linear O()
 */