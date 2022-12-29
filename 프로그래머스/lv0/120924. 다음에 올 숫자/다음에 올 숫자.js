function solution(common) {
    const temp = [];
    for (let i = 1; i < common.length; i++) {
        temp.push(common[i] - common[i-1]);
    }
    
    const tempSum = temp.reduce((prev, curr) => prev + curr, 0);
    if (tempSum === (temp[0] * temp.length)) {
        const commonDifference = common[1] - common[0];
        return common[common.length - 1] + commonDifference;
    } else {
        const commonRatio = common[1] / common[0];
        return common[common.length - 1] * commonRatio;
    }
}