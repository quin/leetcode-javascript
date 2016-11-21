/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @return {boolean}
 */
var isValidBST = function(root) {
    return bstCheckerRecursive(root, Number.MIN_SAFE_INTEGER, Number.MAX_SAFE_INTEGER);

};


 function bstCheckerRecursive(treeRoot, lowerBound, upperBound) {

    if (!treeRoot) return true;

    if (treeRoot.val >= upperBound || treeRoot.val <= lowerBound) {
        return false;
    }

    return bstCheckerRecursive(treeRoot.left, lowerBound, treeRoot.val) && bstCheckerRecursive(treeRoot.right, treeRoot.val, upperBound);

}
