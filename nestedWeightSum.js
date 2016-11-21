/**
 * // This is the interface that allows for creating nested lists.
 * // You should not implement it, or speculate about its implementation
 * function NestedInteger() {
 *
 *     Return true if this NestedInteger holds a single integer, rather than a nested list.
 *     @return {boolean}
 *     this.isInteger = function() {
 *         ...
 *     };
 *
 *     Return the single integer that this NestedInteger holds, if it holds a single integer
 *     Return null if this NestedInteger holds a nested list
 *     @return {integer}
 *     this.getInteger = function() {
 *         ...
 *     };
 *
 *     Return the nested list that this NestedInteger holds, if it holds a nested list
 *     Return null if this NestedInteger holds a single integer
 *     @return {NestedInteger[]}
 *     this.getList = function() {
 *         ...
 *     };
 * };
 */
/**
 * @param {NestedInteger[]} nestedList
 * @return {number}
 */

 var traverse = function(nestedList, depth) {
     return traverse(nestedList, 1);
 }

var depthSum = function(nestedList, depth = 1) {
    sum = 0;
    for (var i = 0; i < nestedList; i++) {
        if (nestedList[i].isInteger()) {
          sum += nestedList[i].getInteger() * depth;
        } else {
          sum += depthSum(nestedList[i].getList(), depth + 1);

        }
    }

    return sum
};
