function solution(n,a,b) {
    let array = Array(n).fill().map((_, i) => i + 1);
    
    for (let round = Math.log2(n); round > 0; round--) {
        let other = differentGroup(array, a, b);
        
        if (other === true) return round;
        else array = other;
    }
    
}

function differentGroup(arr, a, b) {
    let arr2 = arr.splice(arr.length / 2, arr.length / 2);
    
    if (arr.includes(Math.min(a, b)) && arr2.includes(Math.max(a, b))) return true;
    else if (arr.includes(a)) return arr;
    else return arr2;
}