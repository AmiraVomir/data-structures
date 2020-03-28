var BinarySearchTree = function(value) {
  var branch = {};
  branch['value'] = value;
  branch['left'];
  branch['right'];
  _.extend(branch, binaryTreeMethods);
  return branch;
};

var binaryTreeMethods = {};

binaryTreeMethods.insert = function(value) {
  if (this['value'] > value) {
    if (this.left !== undefined) {
      this.left.insert(value);
    } else {
      this.left = BinarySearchTree(value);
    }
  } else {
    if (this.right !== undefined) {
      this.right.insert(value);
    } else {
      this.right = BinarySearchTree(value);
    }
  }
};

binaryTreeMethods.contains = function(value) {
  if (_.contains(this, value)) {
    return true;
  }

  if (this['value'] > value) {
    if (this.left !== undefined) {
      return this.left.contains(value);
    }
  } else {
    if (this.right !== undefined) {
      return this.right.contains(value);
    }
  }
  return false;
};

binaryTreeMethods.depthFirstLog = function(func) {
  func(this.value);
  if (this.left !== undefined) {
    this.left.depthFirstLog(func);
  }
  if (this.right !== undefined) {
    this.right.depthFirstLog(func);
  }
};

/*
 * Complexity: What is the time complexity of the above functions?
 */
