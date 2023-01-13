function solution(lottos, win_nums) {
    const rank = { '6': 1, '5': 2, '4': 3, '3': 4, '2': 5, '1': 6, '0': 6 };
    
    let count = 0;
    
    for (let i = 0; i < lottos.length; i++) {
        if (lottos[i] !== 0) {
            for (let j = 0; j < win_nums.length; j++) {
                if (lottos[i] === win_nums[j]) {
                    count++;
                }
            }
        }
    }
    
    const countZero = lottos.filter(v => v === 0).length;
    
    
    
    return [rank[(count+countZero).toString()], rank[count.toString()]];
}