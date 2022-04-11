const inverseCaptcha = (nums) => {
  let sum = 0;

  // if first num matches last, add first num to sum
  if (nums[0] === nums[nums.length - 1]) {
    sum += nums[0];
  }

  // loop through nums array by 2
  for (let i = 0; i < nums.length; i += 2) {
    
    // if num matches the next num, add num to sum
    if (nums[i] === nums[i + 1]) {
      sum += nums[i];
    } 
    
    //if num matches previous num, add previous num to sum
    if (nums[i] === nums[i - 1]) {
      sum += nums[i - 1];
    }
  }

  return sum;
};

module.exports = inverseCaptcha;
