function solution(want, number, discount) {
    const objWant = {};
    want.forEach((v, i) => {
        objWant[v] = number[i];
    })
    
    let count = 0;
    
    for (let i = 0; i < discount.length; i++) {
        const std = discount.slice(i, i + 10);
        const copyWant = {...objWant};

        std.forEach((v, i) => {
            if (copyWant[v] !== undefined) {
                copyWant[v]--;
            }
        });
        
        if (Object.values(copyWant).every((v) => v === 0)) count++;
    }
    
    return count;
}