const inverseCaptcha = (nums) => {
  let sum = 0;

  if (nums[0] === nums[nums.length - 1]) {
    sum += nums[0];
  }

  for (let i = 0; i < nums.length; i += 2) {
    if (nums[i] === nums[i + 1]) {
      sum += nums[i];
    }
    if (nums[i] === nums[i - 1]) {
      sum += nums[i - 1];
    }
  }

  return sum;
};

module.exports = inverseCaptcha;
