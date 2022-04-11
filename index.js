const inverseCaptcha = (nums) => {
  let sum = 0;
  const matches = [];

  if (nums[0] === nums[nums.length -1]) {
      matches.push([nums[0], nums[-1]])
  }

  for (let i = 0; i < nums.length; i+=2) {
    if (nums[i] === nums[i + 1]) {
      matches.push([nums[i], nums[i + 1]]);
    } 
    if (nums[i] === nums[i - 1]) {
      matches.push([nums[i - 1], nums[i]]);
    }
  }

  matches.forEach((num) => (sum += num[0]));

  return sum;
};

module.exports = inverseCaptcha;
