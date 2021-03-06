/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * 递归实现
 * @param {TreeNode} root
 * @return {number[]}
 */
var preorderTraversal = function (root) {
  var result = [];
  recursion(root, result);
  return result;
  function recursion(root, result) {
    if (root === null) return;
    result.push(root.val);
    recursion(root.left, result);
    recursion(root.right, result);
  }
};

/**
 * 迭代实现
 * @param {TreeNode} root
 * @return {number[]}
 */
var preorderTraversal = function (root) {
  var result = [];
  var stack = [];
  var curr = root;
  while (curr || stack.length > 0) {
    while (curr) {
      result.push(curr.val);
      stack.push(curr.right);
      curr = curr.left;
    }
    curr = stack.pop();
  }
  return result;
};

console.log(
  preorderTraversal({
    val: 1,
    left: null,
    right: { val: 2, left: null, right: { val: 3, left: null, right: null } },
  })
);

/**
 * 144. 二叉树的前序遍历
 * 给定一个二叉树，返回它的前序 遍历。
 * 示例:
 * 输入: [1,null,2,3]
 * 输出: [1,2,3]
 * 进阶: 递归算法很简单，你可以通过迭代算法完成吗？
 * https://leetcode-cn.com/problems/binary-tree-preorder-traversal/
 * 迭代思路
 * https://leetcode-cn.com/problems/binary-tree-inorder-traversal/solution/die-dai-fa-by-jason-2/
 */
