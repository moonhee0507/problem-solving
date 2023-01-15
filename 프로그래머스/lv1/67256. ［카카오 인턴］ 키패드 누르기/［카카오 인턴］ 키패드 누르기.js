function solution(numbers, hand) {
    //                  0     1    2     3    4    5     6    7    8     9    *     0     #
    const whichHand = [null, 'L', null, 'R', 'L', null, 'R', 'L', null, 'R', null, null, null];
    
    let leftPointer = 10;
    let rightPointer = 12;
    
    let answer = '';
    
    for (let i = 0; i < numbers.length; i++) {
        if (whichHand[numbers[i]] !== null) {
            answer += whichHand[numbers[i]];
            whichHand[numbers[i]] === 'L' ? leftPointer = numbers[i] : rightPointer = numbers[i];
        } else {
            if (numbers[i] === 0) {
                const distanceFromLeft = realDistance(Math.abs(11 - leftPointer));
                const distanceFromRight = realDistance(Math.abs(11 - rightPointer));
              
                if (distanceFromLeft < distanceFromRight) {
                    answer += 'L';
                    leftPointer = 11;
                } else if (distanceFromLeft > distanceFromRight) {
                    answer += 'R';
                    rightPointer = 11;
                } else {
                    if (hand === 'left') {
                        answer += 'L';
                        leftPointer = 11;
                    }
                    else if (hand === 'right') {
                        answer += 'R';
                        rightPointer = 11;
                    }
                }
            } else {
                const distanceFromLeft = realDistance(Math.abs(numbers[i] - leftPointer));
                const distanceFromRight = realDistance(Math.abs(numbers[i] - rightPointer));
              
                if (distanceFromLeft < distanceFromRight) {
                    answer += 'L';
                    leftPointer = numbers[i];
                } else if (distanceFromLeft > distanceFromRight) {
                    answer += 'R';
                    rightPointer = numbers[i];
                } else {
                    if (hand === 'left') {
                        answer += 'L';
                        leftPointer = numbers[i];
                    }
                    else if (hand === 'right') {
                        answer += 'R';
                        rightPointer = numbers[i];
                    }
                }
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