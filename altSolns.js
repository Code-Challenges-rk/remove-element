function removeElement(nums, val) {
  let k = 0; // Variable to store the number of elements not equal to val

  for (let i = 0; i < nums.length; i++) {
    if (nums[i] !== val) {
      nums[k] = nums[i];
      k++;
    }
  }
  console.log(nums);

  return k;
}

console.log(removeElement([3, 2, 2, 3], 3));
