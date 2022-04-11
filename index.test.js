const inverseCaptcha = require('./index');
const fs = require('fs');

describe('Inverse Captcha', () => {
  it('should return 0 if no digits match the next', () => {
    let nums = [1, 2, 3, 4];
    expect(inverseCaptcha(nums)).toBe(0);
    nums = [2, 5, 1, 6, 4];
    expect(inverseCaptcha(nums)).toBe(0);
  });
  it('should return sum of all nums in even array if they all match', () => {
    let nums = [1, 1, 1, 1];
    expect(inverseCaptcha(nums)).toBe(4);
    nums = [2, 2, 2, 2];
    expect(inverseCaptcha(nums)).toBe(8);
  });
  it('should return sum of all nums in odd array if they all match', () => {
    let nums = [3, 3, 3];
    expect(inverseCaptcha(nums)).toBe(9);
    nums = [5, 5, 5, 5, 5];
    expect(inverseCaptcha(nums)).toBe(25);
  });
  it('should return first digit if only match is the last digit', () => {
    let nums = [9, 1, 2, 1, 2, 1, 2, 1, 2, 9];
    expect(inverseCaptcha(nums)).toBe(9);
    nums = [4, 2, 5, 1, 5, 3, 2, 4];
    expect(inverseCaptcha(nums)).toBe(4);
  });

  it('should return sum of nums with two or more digits to add', () => {
    let nums = [1, 1, 2, 2];
    expect(inverseCaptcha(nums)).toBe(3);
    nums = [1, 1, 1, 2, 2, 2];
    expect(inverseCaptcha(nums)).toBe(6);
    nums = [2, 2, 4, 4, 4, 6, 6, 2];
    expect(inverseCaptcha(nums)).toBe(18);
  });
});

describe('advent of code test', () => {
  it('should solve given set of numbers from advent of code', () => {
    const numbers = fs.readFileSync('numbers.txt', 'utf-8');
    const arrayedNums = numbers.split('').map(Number);

    expect(inverseCaptcha(arrayedNums)).toBe(1069);
  });
});
