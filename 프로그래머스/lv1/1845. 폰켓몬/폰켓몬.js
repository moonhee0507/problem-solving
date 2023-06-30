function solution(nums) {
    const num1 = [...new Set(nums)].length;
    const num2 = nums.length / 2;
    
    return Math.min(num1, num2);
}