function solution(arr) {    
    // [x,1,x,3,0,x,1]
    return arr.filter((v, i) => v !== arr[i+1]);
}