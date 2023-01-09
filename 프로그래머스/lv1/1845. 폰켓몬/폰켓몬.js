function solution(nums) {
    
    return nums.length / 2 < [...new Set(nums)].length 
        ? nums.length / 2 : [...new Set(nums)].length;
}