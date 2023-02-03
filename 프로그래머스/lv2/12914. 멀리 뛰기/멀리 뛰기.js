function solution(n) {
    n = BigInt(n);
    let answer = 0n;
    let one = 0n;
    let jump = 0n;

    for (let two = 0n; two <= n / 2n; two++) {
        one = n - two * 2n;
        jump = two + one;

        answer += combination(jump, one);
    }

    return answer % 1234567n;
}

const factorial = (a) => (a === 0n ? 1n : a * factorial(a - 1n));
const combination = (a, b) => factorial(a) / (factorial(b) * factorial(a - b));