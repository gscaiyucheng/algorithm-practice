/**
 * @param {number[][]} matrix
 * @return {number[]}
 */
var spiralOrder = function (matrix) {
  if (matrix.length === 0) {
    return [];
  }
  let l = 0,
    r = matrix[0].length - 1,
    t = 0,
    b = matrix.length - 1,
    x = 0;
  const res = [];
  while (true) {
    for (let i = l; i <= r; i++) res[x++] = matrix[t][i]; // left to right.
    if (++t > b) break;
    for (let i = t; i <= b; i++) res[x++] = matrix[i][r]; // top to bottom.
    if (l > --r) break;
    for (let i = r; i >= l; i--) res[x++] = matrix[b][i]; // right to left.
    if (t > --b) break;
    for (let i = b; i >= t; i--) res[x++] = matrix[i][l]; // bottom to top.
    if (++l > r) break;
  }
  return res;
};

/**
 * 剑指 Offer 29. 顺时针打印矩阵
 * 输入一个矩阵，按照从外向里以顺时针的顺序依次打印出每一个数字。
 * 
 * 示例 1：
 * 输入：matrix = [[1,2,3],[4,5,6],[7,8,9]]
 * 输出：[1,2,3,6,9,8,7,4,5]
 * 
 * 示例 2：
 * 输入：matrix = [[1,2,3,4],[5,6,7,8],[9,10,11,12]]
 * 输出：[1,2,3,4,8,12,11,10,9,5,6,7]
 * 
 * 题解：
 * https://leetcode-cn.com/problems/shun-shi-zhen-da-yin-ju-zhen-lcof/solution/mian-shi-ti-29-shun-shi-zhen-da-yin-ju-zhen-she-di/
 */
