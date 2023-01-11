function solution(nums) {
    const isPrime = (n) => {
        for (let i = 2; i**2 <= n; i++) {
            for (let j = i**2; j <= n; j += i) {
                if (!(n % j)) return false;
            }
        }
        
        return true;
    }
    
    let count = 0;
    let i = 0; let j = i + 1; let k = j + 1;
    
    for (let i = 0; i < nums.length; i++) {
        for (let j = i+1; j < nums.length; j++) {
            for (let k = j+1; k < nums.length; k++) {
                const sum = nums[i] + nums[j] + nums[k];
                if (isPrime(sum)) count++;
            }
        }
    }
    
    return count;
}