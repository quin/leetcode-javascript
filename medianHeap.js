function minHeap() {
  this.data = [];
  this.size = 0;

  this.add = function(element) {
    this.data.push(element);
    this.bubbleUp(this.size - 1)
  }

  this.peak = function(){
    return this.data[0];
  }

  this.bubbleUp = function(n) {
    while (n > 0) {
      var pIndex = Math.floor((n + 1) / 2) - 1;

      if (this.data[n] >= this.data[pIndex]) {
        break;
      }

      var temp = this.data[n];
      this.data[n] = this.data[pIndex];
      this.data[pIndex] = temp;
      //swap indexes
      n = pIndex
    }
  }
}


function maxHeap() {
  this.data = [];
  this.size = 0;

  this.add  = function(element) {
    this.data.push(element);
    this.bubbleUp(this.size - 1)
  }


  this.peak = function() {
    return this.data[0];
  }

  this.bubbleUp = function(n) {
    while (n > 0) {
      var pIndex = Math.floor((n + 1) / 2) - 1;

      if (this.data[n] <= this.data[pIndex]) {
        break;
      }

      var temp = this.data[n];
      this.data[n] = this.data[pIndex];
      this.data[pIndex] = temp;
      //swap indexes
      n = pIndex
    }
  }
}



function medianHeap() {
  this.largest = new minHeap();
  this.smallest = new maxHeap();

  this.add = function(element) {
    rightSide = this.largest.peak();
    leftSide = this.smallest.peak();

    if (element < rightSide) {
      this.smallest.add(element);
    } else {
      this.largest.add(element);
    }

    return;
  }


  this.findMedian = function() {
    rightSide = this.largest.peak();
    leftSide = this.smallest.peak();
    console.log(leftSide)

    return Math.floor(leftSide + rightSide / 2);

  }
}



/**
 * @constructor
 */
var MedianFinder = function() {
    this.large = new MinHeap();
    this.small = new MaxHeap();
};

/**
 * @param {integer} word
 * @return {void}
 * Adds a num into the data structure.
 */
MedianFinder.prototype.addNum = function(num) {
  var lg = this.large.peek(); // lg peek is the minimum of large set
  var sm = this.small.peek(); // sm peek is the maximum of small set

  if(num <= sm) {
    this.small.add(num);
  } else {
    this.large.add(num);
  }

  // var diff = this.small.size() - this.large.size();
  // if(diff > 1) {
  //   this.large.add(this.small.pop());
  // } else if(diff < 0) {
  //   this.small.add(this.large.pop());
  // }
};


/**
 * @return {double}
 * Return median of current data stream
 */
MedianFinder.prototype.findMedian = function() {
    return this.small.size() > this.large.size() ?
        this.small.peek() : (this.small.peek() + this.large.peek())/2;
};

/**
 * Your MedianFinder object will be instantiated and called as such:
 * var mf = new MedianFinder();
 * mf.addNum(1);
 * mf.findMedian();
 */

class MaxHeap {
  constructor() {
    this.arr = [];
  }

  peek() {
    return this.arr[0] || null;
  }

  size() {
    return this.arr.length;
  }

  pop() {
    var arr = this.arr;
    var len = arr.length;

    if(len === 0) {
      return null;
    }

    var max = arr[0];
    arr[0] = arr[len - 1] // swap the last value with max value

    arr.pop();

    this.sinkDown(0);

    return max;
  }

  add(val) {
    var arr = this.arr;
    arr.push(val);
    this.bubbleUp(arr.length - 1);
  }

  bubbleUp(n) {
    var arr = this.arr;

    while(n > 0) {
      var parentN = Math.floor((n + 1)/2) - 1;

      if(arr[parentN] > arr[n]) {
        break;
      }

      var tmp = arr[n];
      arr[n] = arr[parentN];
      arr[parentN] = tmp;
      n = parentN;
    }
  }

  sinkDown(n) {
    var arr = this.arr;
    var len = arr.length;
    var val = arr[n];

    while(true) {

      var swap = null;
      var child2N = (n+1)*2; // root = 0 right child idx is (0 + 1)*2 = 2
      var child1N = child2N - 1; // right child idx - 1 = 1 for root's left child

      if(child1N < len && arr[child1N] > val) {
        swap = child1N;
      }

      if(child2N < len && arr[child2N] > val && arr[child2N] >= arr[child1N]) {
        swap = child2N;
      }

      if(swap === null) {
        break;
      }

      var tmp = arr[n];
      arr[n] = arr[swap];
      arr[swap] = tmp;
      n = swap;
    }
  }
}


class MinHeap {
  constructor() {
    this.arr = [];
  }

  peek() {
    return this.arr[0] || null;
  }

  size() {
    return this.arr.length;
  }

  pop() {
    var arr = this.arr;
    var len = arr.length;

    if(len === 0) {
      return null;
    }

    var min = arr[0];
    arr[0] = arr[len - 1] // swap the last value with min value

    arr.pop();

    this.sinkDown(0);

    return min;
  }

  add(val) {
    var arr = this.arr;
    arr.push(val);
    this.bubbleUp(arr.length - 1);
  }

  bubbleUp(n) {
    var arr = this.arr;

    while(n > 0) {
      var parentN = Math.floor((n + 1)/2) - 1;

      if(arr[parentN] <= arr[n]) {
        break;
      }

      var tmp = arr[n];
      arr[n] = arr[parentN];
      arr[parentN] = tmp;
      n = parentN;
    }
  }

  sinkDown(n) {
    var arr = this.arr;
    var len = arr.length;
    var val = arr[n]

    while(true) {
      var swap = null;
      var child2N = (n+1)*2; // root = 0 right child idx is (0 + 1)*2 = 2
      var child1N = child2N - 1; // right child idx - 1 = 1 for root's left child
      if(child1N < len && arr[child1N] < val) {
        swap = child1N;
      }

      if(child2N < len && arr[child2N] < val && arr[child2N] <= arr[child1N]) {
        swap = child2N;
      }

      if(swap === null) {
        break;
      }

      var tmp = arr[n];
      arr[n] = arr[swap];
      arr[swap] = tmp;
      n = swap;
    }
  }
}
