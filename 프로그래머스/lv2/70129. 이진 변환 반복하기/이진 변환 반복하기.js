function solution(s) {
    const toBi = (str) => str.replaceAll('0', '').length.toString(2);
    let countCirkit = 0;
    let sumZero = 0;
    
    let beforeS = s;
    let afterS = toBi(beforeS);
    while (beforeS !== '1') {
        countCirkit++;
        sumZero += beforeS.length - beforeS.replaceAll('0', '').length;
        beforeS = afterS;
        afterS = toBi(afterS);
    }
    
    return [countCirkit, sumZero];
}