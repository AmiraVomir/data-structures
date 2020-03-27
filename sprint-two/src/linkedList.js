var LinkedList = function() {
  var list = {};
  list.head = null;
  list.tail = null;

  list.addToTail = function(value) {
    var newNode = new Node(value);
    if ((list.head === null)) {
      list.head = newNode;
      list.tail = list.head;
    } else {
      list.tail.next = newNode;
      list.tail = newNode;
    }

  };

  list.removeHead = function() {
    if (list.head === null) {
      return null;
    }
    var formerHead = list.head;
    list.head = list.head.next;
    return formerHead.value;
  };

  list.contains = function(target) {
    var isNode = function(node) {
      if (node.value === target) {
        return true;
      } else if (node.next === null) {
        return false;
      }
      return isNode(node.next);
    };
    return isNode(list.head);
  };

  return list;
};

var Node = function(value) {
  var node = {};

  node.value = value;
  node.next = null;

  return node;
};

/*
 * Complexity: What is the time complexity of the above functions?
 */