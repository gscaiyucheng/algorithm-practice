/**
 * initialize your data structure here.
 */
var MinStack = function () {
  this.A = [];
  this.B = [];
};

/**
 * @param {number} x
 * @return {void}
 */
MinStack.prototype.push = function (x) {
  let { A, B } = this;
  A.push(x);
  if (B.length === 0 || B[B.length - 1] >= x) {
    B.push(x);
  }
};

/**
 * @return {void}
 */
MinStack.prototype.pop = function () {
  let { A, B } = this;
  if (A.pop() === B[B.length - 1]) {
    B.pop();
  }
};

/**
 * @return {number}
 */
MinStack.prototype.top = function () {
  return this.A[this.A.length - 1];
};

/**
 * @return {number}
 */
MinStack.prototype.min = function () {
  return this.B[this.B.length - 1];
};

/**
 * Your MinStack object will be instantiated and called as such:
 * var obj = new MinStack()
 * obj.push(x)
 * obj.pop()
 * var param_3 = obj.top()
 * var param_4 = obj.min()
 */
