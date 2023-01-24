function solution(n) {
    const arrNum = Array(n).fill().map((_, i) => i + 1);

    let answer = 1;
    // let sumPart = arrNum.slice(0, 1).reduce((prev, curr) => prev + curr, 0);
    let sumPart = 0;

    for (let i = 0; i < n / 2; i++) {
        if (arrNum[i] + arrNum[i+1] <= n) {
            sumPart = arrNum.slice(i, i + 1).reduce((prev, curr) => prev + curr, 0);

            for (let j = i + 1; j < n / 2; j++) {
                // sumPart = arrNum.slice(i, j + 1).reduce((prev, curr) => prev + curr, 0);
                sumPart += arrNum[j];

                if (sumPart > n) break;
                if (sumPart === n) {
                    answer++;
                    break;
                }
            }
        } else return answer;     
    }


    return answer;
}