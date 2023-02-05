// https://postechlibrary.tistory.com/489
// h-index
// '몇 편의 논문을 썼느냐'만으로는 연구자를 평가하기 어렵기 때문에
// '피인용'의 개념이 등장했다. 하지만 피인용 수로만 평가하는 것도 문제가 있다
// h-index가 30인 연구자는 피인용 횟수가 30이상인 논문이 30편 있다는 것을 나타낸다

// 내림차순으로 정렬 후 
// No와 Total Citations를 비교해 Total Citations가 No.보다 작아지기 시작하기 직전의 No.를 찾는다

// |No.|Title|Total Citations|
//   1    a          77
//   2    b           6
//   3    c           5
//   4    d           5    <- O
//   5    e           4    <- X

// h-index = 4

function solution(citations) {
    citations.sort((a, b) => b - a);
    let answer = 0;

    for (let i = 0; i < citations.length; i++) {
        if (citations[i] >= i + 1 && citations[i] >= citations.length - i) {
            answer++;
            continue;
        }
        break;
    }

    return answer;
}
