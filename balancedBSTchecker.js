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
var isBalanced = function(root) {
    if (!root) {
        return true;
    }
    if ((Math.abs(findMax(root.left) - findMax(root.right))) <= 1) {
        return isBalanced(root.left) && isBalanced(root.right)
    }
    return false
};

function findMin(node) {
    if (!node) {
        return 0;
    }

    return Math.min(findMin(node.left), findMin(node.right)) + 1
}


function findMax(node) {
    if (!node) {
        return 0;
    }


    return Math.max(findMax(node.left), findMax(node.right)) + 1
}
