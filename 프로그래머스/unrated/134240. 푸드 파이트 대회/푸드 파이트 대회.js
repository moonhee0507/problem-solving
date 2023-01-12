function solution(food) {
    let arr = [];
    
    for (let i = 1; i < food.length; i++) {
        arr.push(String(i).repeat(Math.trunc(food[i] / 2)))
    }
    
    const reverse = [...arr].reverse();
    
    arr.push('0');
    
    return arr.concat(reverse).join('');
}