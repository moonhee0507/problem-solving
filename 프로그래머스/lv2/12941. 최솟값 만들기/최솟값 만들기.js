function solution(A,B){
    A = A.sort((a, b) => a - b);
    B = B.sort((a, b) => b - a);
    
    return A.reduce((prev, curr, i) => {
        return prev + (curr * B[i]);
    }, 0)
}