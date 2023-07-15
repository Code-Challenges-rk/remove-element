/**
 * @param {number[]} nums
 * @param {number} val
 * @return {number}
 */
const removeElement = function (nums, val) {
  let noVal = (param) => {
    return param !== val;
  };

  let newArr = nums.filter(noVal);

  for (let j = 0; j < nums.length; j++) {
    nums[j] = newArr[j];
  }

  console.log(nums);

  nums.length = newArr.length;
  return nums.length
};

let nums = [3, 2, 2, 3];
let val = 3;
console.log(removeElement(nums, val));
