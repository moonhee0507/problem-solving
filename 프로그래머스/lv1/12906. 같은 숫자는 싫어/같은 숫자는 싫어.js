function solution(arr) {
    // [1, x, x, x, x]
    //  i           j
    // arr[i]와 arr[j]가 같으면 arr[j] false로 변경
    
    if (arr.length === 1) return arr;
    
    let i = 0;
    let j = 1;
    
    while (j < arr.length) {
        if (arr[i] === arr[j]) {
            arr[j] = false;
            j++;
        } else {
            j++;
            i = j - 1;
        }
    }
    
    return arr.filter((v) => v !== false);
}