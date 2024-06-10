function solution(nums) {
    const numCount = nums.length / 2;
    const arrayRemovedSamePokemon = [...new Set(nums)];
    
    return Math.min(numCount, arrayRemovedSamePokemon.length);
}