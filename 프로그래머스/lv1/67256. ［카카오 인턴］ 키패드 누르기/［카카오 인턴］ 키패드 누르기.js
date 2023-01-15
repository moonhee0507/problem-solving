function solution(numbers, hand) {
    const whichHand = [null, 'L', null, 'R', 'L', null, 'R', 'L', null, 'R', null, null, null];
    //                  0     1    2     3    4    5     6    7    8     9    *     0     #
    let leftPointer = 10; let rightPointer = 12;
    
    let answer = '';
    
    for (let i = 0; i < numbers.length; i++) {
        if (whichHand[numbers[i]]) {
            answer += whichHand[numbers[i]];
            whichHand[numbers[i]] === 'L' ? leftPointer = numbers[i] : rightPointer = numbers[i];
        } else {
            const indexZeroToEleven = numbers[i] === 0 ? 11 : numbers[i];
            const distanceFromLeft = realDistance(Math.abs(indexZeroToEleven - leftPointer));
            const distanceFromRight = realDistance(Math.abs(indexZeroToEleven - rightPointer));

            const distance = {
                leftIsCloser() {
                    answer += 'L';
                    leftPointer = indexZeroToEleven;
                },
                rightIsCloser() {
                    answer += 'R';
                    rightPointer = indexZeroToEleven;
                }
            }
            
            switch (Math.sign(distanceFromLeft - distanceFromRight)) {
                case -1:
                    distance.leftIsCloser();
                    break;
                case 1:
                    distance.rightIsCloser();
                    break;
                case 0:
                    hand === 'left' ? distance.leftIsCloser() : distance.rightIsCloser();
                    break;
            }
        }
    }
    
    return answer;
}

const realDistance = (dif) => {
    if (dif === 0) return 0;
    if (dif === 1 || dif === 3) return 1;
    if (dif === 2 || dif === 4 || dif === 6) return 2;
    if (dif === 5 || dif === 7 || dif === 9) return 3;
    if (dif === 8 || dif === 10) return 4;
    if (dif === 11) return 5;
    
    return dif;
}
